import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'your-project-url'
const supabaseKey = 'your-anon-key'
export const supabase = createClient(supabaseUrl, supabaseKey)

export const PORT = process.env.PORT || 8000;

export const mongoURL ="mongodb+srv://root:SNzJheXm5ObQeQrh@lostandfound.toc33hc.mongodb.net/lost-items?retryWrites=true&w=majority";