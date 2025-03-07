import React, { useState, useEffect } from 'react';
import './Feedback.css';
import { supabase } from '../../lib/supabase';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch comments on component mount
  useEffect(() => {
    fetchComments();

    // Set up real-time subscription
    const subscription = supabase
      .channel('public:comments')
      .on('postgres_changes', { 
        event: '*', 
        schema: 'public', 
        table: 'comments' 
      }, (payload) => {
        console.log('Change received!', payload);
        if (payload.eventType === 'INSERT') {
          setComments(prevComments => [payload.new, ...prevComments]);
        }
      })
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  const fetchComments = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      setComments(data || []);
    } catch (error) {
      console.error('Error fetching comments:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill out all fields.'
      });
      return;
    }
    
    try {
      // Save to Supabase
      const { error } = await supabase
        .from('comments')
        .insert([
          { 
            name: formData.name, 
            email: formData.email, 
            message: formData.message 
          }
        ]);

      if (error) {
        throw error;
      }

      // Success
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Thank you for your feedback! I\'ll get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setFormStatus({
        submitted: false,
        error: true,
        message: 'There was an error submitting your feedback. Please try again.'
      });
    }
  };

  return (
    <div className="feedback-container">
      <h2 className="section-title">Get in Touch</h2>
      <p className="section-description">
        I'd love to hear from you! Whether you have a question, want to collaborate, or just want to say hello, feel free to drop me a message.
      </p>
      
      <div className="feedback-content">
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">📧</div>
            <div className="contact-text">
              <h3>Email</h3>
              <p>cnprado24@gmail.com</p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">📱</div>
            <div className="contact-text">
              <h3>Phone</h3>
              <p>+639568731389</p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div className="contact-text">
              <h3>Location</h3>
              <p>Taguig City</p>
            </div>
          </div>
        </div>
        
        <div className="feedback-form-container">
          {formStatus.submitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <p>{formStatus.message}</p>
            </div>
          ) : (
            <form className="feedback-form" onSubmit={handleSubmit}>
              {formStatus.error && (
                <div className="error-message">{formStatus.message}</div>
              )}
              
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                ></textarea>
              </div>
              
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          )}
        </div>
      </div>

      <div className="comments-section">
        <h3 className="comments-title">Recent Feedback</h3>
        {loading ? (
          <div className="loading-spinner">Loading comments...</div>
        ) : comments.length > 0 ? (
          <div className="comments-list">
            {comments.map((comment) => (
              <div key={comment.id} className="comment-item">
                <div className="comment-header">
                  <h4 className="comment-author">{comment.name}</h4>
                  <span className="comment-date">
                    {new Date(comment.created_at).toLocaleDateString()}
                  </span>
                </div>
                <p className="comment-message">{comment.message}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-comments">No comments yet. Be the first to leave feedback!</p>
        )}
      </div>
    </div>
  );
};

export default Feedback; 