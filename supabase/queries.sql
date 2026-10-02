-- Create the registrations table
CREATE TABLE registrations (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    full_name TEXT NOT NULL,
    college TEXT NOT NULL,
    department TEXT,
    email TEXT,
    phone TEXT,
    events TEXT[] -- Array of event names
);

-- Enable Row Level Security (RLS)
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public inserts (for registration form)
CREATE POLICY "Allow public inserts" ON registrations
    FOR INSERT WITH CHECK (true);

-- Create policy to allow only authenticated users to view data
-- (You'll need a way for admins to log in to see this, or just view in Supabase dashboard)
CREATE POLICY "Allow authenticated view" ON registrations
    FOR SELECT USING (auth.role() = 'authenticated');

-- Example Query: Get all registrations
-- SELECT * FROM registrations;

-- Example Query: Count registrations per event
-- SELECT unnest(events) as event_name, count(*) 
-- FROM registrations 
-- GROUP BY event_name;
