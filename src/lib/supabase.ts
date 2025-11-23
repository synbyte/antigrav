import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jprkxjvzadmyyunhbfvp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impwcmt4anZ6YWRteXl1bmhiZnZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMzMzk2OTUsImV4cCI6MjA3ODkxNTY5NX0.W3i9mw_e2Ydiq67fB-5q9xhsJsN--p2LrS_bQa1h5TA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
