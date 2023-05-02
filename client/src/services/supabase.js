import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON;

const supabase = createClient(supabaseUrl, supabaseKey);

export const getEvents = async () => {
  const { data: events, error } = await supabase.from("events").select("*");
  return { events, error };
};
export default supabase;
