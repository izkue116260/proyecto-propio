import { createClient } from '@supabase/supabase-js';

const supabaseUrl: string = "https://drxcoiqryrjkyfznbuvl.supabase.co";
const supabaseAnonKey: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRyeGNvaXFyeXJqa3lmem5idXZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQxMzYyNTUsImV4cCI6MjA2OTcxMjI1NX0.olRutjMo5yXK4CzYIgjuPj6oNe99c4_WZCQ2jF2rTm8";
        
export const supabase = createClient(supabaseUrl, supabaseAnonKey);