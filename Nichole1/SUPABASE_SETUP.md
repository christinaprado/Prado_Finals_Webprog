# Supabase Setup for Feedback Form

This document provides instructions on how to set up Supabase for the feedback form functionality.

## 1. Create a Supabase Account

1. Go to [Supabase](https://supabase.com/) and sign up for an account if you don't have one.
2. Create a new project in Supabase.

## 2. Set Up Database Table

1. In your Supabase project, navigate to the SQL Editor.
2. Run the following SQL to create a `comments` table:

```sql
CREATE TABLE comments (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL
);

-- Enable Row Level Security
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to read comments
CREATE POLICY "Anyone can read comments" 
ON comments FOR SELECT 
USING (true);

-- Create policy to allow anyone to insert comments
CREATE POLICY "Anyone can insert comments" 
ON comments FOR INSERT 
WITH CHECK (true);
```

## 3. Configure Environment Variables

1. In your Supabase project dashboard, go to Settings > API.
2. Copy the "Project URL" and "anon/public" key.
3. Update the `.env` file in your project with these values:

```
VITE_SUPABASE_URL=your_project_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

## 4. Enable Realtime

1. In your Supabase project, go to Database > Replication.
2. Under "Realtime", make sure the "comments" table is enabled for realtime.

## 5. Test the Functionality

1. Run your application.
2. Submit a comment through the feedback form.
3. Verify that the comment appears in the Supabase database.
4. Open the application in another browser window to verify that comments update in real-time.

## Troubleshooting

- If comments are not appearing in real-time, check the browser console for errors.
- Verify that the Supabase URL and anon key are correctly set in the `.env` file.
- Make sure the Realtime feature is enabled for the comments table in Supabase. 