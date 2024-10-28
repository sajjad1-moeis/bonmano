// npm run dev
import {createClient} from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
   "https://hvwgnvkhnjlcruhhcpyp.supabase.co",
   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2d2dudmtobmpsY3J1aGhjcHlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEwOTY5ODEsImV4cCI6MjAyNjY3Mjk4MX0.7hOc9H4jhuust9KRvFQITwZF8AX0YVQOgDlYEg3qrnk"
);

// const {data, error} = await supabase.from("coffie").select();

let obj = {
   img: "./src/components/Home/Article/img/2 (3).jpg",
   isFilter: "Article(2)",
   title: "طرز تهیه قهوه لاته با شیر نارگیل",
};

export default [];
// await supabase.from("Article").insert(obj);

export async function apiRightSlide2(text) {
   const {data, error} = await supabase.from(text).select();
   return data;
}
