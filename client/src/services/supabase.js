import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON;
export const huddle_API = "VwTZ4AGTxme9snANex9tep3NwvVMGfYd"
export const lighthouseApi = '5d068c8d-2bb1-4b91-9d2f-718ede05d340'


const supabase = createClient(supabaseUrl, supabaseKey);

export const getEvents = async () => {
  const { data: events, error } = await supabase.from("events").select("*");
  return { events, error };
};
export default supabase;
