// npm run dev
import {createClient} from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
   "https://hvwgnvkhnjlcruhhcpyp.supabase.co",
   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2d2dudmtobmpsY3J1aGhjcHlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEwOTY5ODEsImV4cCI6MjAyNjY3Mjk4MX0.7hOc9H4jhuust9KRvFQITwZF8AX0YVQOgDlYEg3qrnk"
);

export default [];

export async function apiRightSlide2(text) {
   const {data, error} = await supabase.from(text).select();
   return data;
}
