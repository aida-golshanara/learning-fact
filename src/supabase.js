import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rrbwzdplnktwinnncdet.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJyYnd6ZHBsbmt0d2lubm5jZGV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE5NjQxNjYsImV4cCI6MTk4NzU0MDE2Nn0.BBWIBz9Jk9q3N20pxvlhA_bxbLciD99ev8xU_SYu9_8';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
