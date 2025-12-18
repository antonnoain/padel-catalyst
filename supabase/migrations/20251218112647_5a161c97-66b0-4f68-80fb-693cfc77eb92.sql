-- Fix #1: Replace RESTRICTIVE RLS policies with proper PERMISSIVE policies
DROP POLICY IF EXISTS "Anyone can submit contact form" ON contacts;
DROP POLICY IF EXISTS "contacts_insert_policy" ON contacts;
DROP POLICY IF EXISTS "contacts_select_admin_policy" ON contacts;
DROP POLICY IF EXISTS "contacts_update_admin_policy" ON contacts;
DROP POLICY IF EXISTS "contacts_delete_admin_policy" ON contacts;

-- Create clear PERMISSIVE policies
CREATE POLICY "Allow public contact submissions"
  ON contacts FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow admin to view contacts"
  ON contacts FOR SELECT
  TO authenticated
  USING ((auth.jwt() ->> 'role') = 'admin');

CREATE POLICY "Allow admin to update contacts"
  ON contacts FOR UPDATE
  TO authenticated
  USING ((auth.jwt() ->> 'role') = 'admin')
  WITH CHECK ((auth.jwt() ->> 'role') = 'admin');

CREATE POLICY "Allow admin to delete contacts"
  ON contacts FOR DELETE
  TO authenticated
  USING ((auth.jwt() ->> 'role') = 'admin');

-- Fix #2: Add input validation constraints at database level
ALTER TABLE contacts 
  ADD CONSTRAINT contacts_name_length CHECK (char_length(name) > 0 AND char_length(name) <= 100),
  ADD CONSTRAINT contacts_email_length CHECK (char_length(email) > 0 AND char_length(email) <= 255),
  ADD CONSTRAINT contacts_email_format CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  ADD CONSTRAINT contacts_org_length CHECK (organization IS NULL OR char_length(organization) <= 200),
  ADD CONSTRAINT contacts_message_length CHECK (char_length(message) >= 10 AND char_length(message) <= 5000);