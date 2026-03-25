import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uowmqqxsetbsfkzgvfoa.supabase.co';
const supabaseAnonKey = 'sb_publishable_myfuAwdtGb71scNshFjH1A_MYzZe9S9';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
