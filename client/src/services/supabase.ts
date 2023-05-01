import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL as string;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON as string;
const supabaseClient = createClient(supabaseUrl, supabaseKey);

export default supabaseClient;
