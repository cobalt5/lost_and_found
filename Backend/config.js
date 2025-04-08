import { createClient } from '@supabase/supabase-js'

const supabaseUrl =  process.env.SUPABASE_URL || 'https://pxnluqzebgytvrowhedj.supabase.co'
const supabaseKey = process.env.SUPABSE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4bmx1cXplYmd5dHZyb3h3ZWRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM2NDA3NzEsImV4cCI6MjA1OTIxNjc3MX0.6SW7U4q4HY5KbjoqUQ96fQhsNlQtUGl8PGR_rUMlkOI'
export const supabase = createClient(supabaseUrl, supabaseKey)

export const PORT = process.env.PORT || 8000;

// export const mongoURL ="mongodb+srv://root:SNzJheXm5ObQeQrh@lostandfound.toc33hc.mongodb.net/lost-items?retryWrites=true&w=majority";
