// sanity.js
import { createClient } from "@sanity/client";
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'
import imageUrlBuilder from "@sanity/image-url";

export function urlFor(source) {
  return builder.image(source);
}

export const client = createClient({
  projectId: "83avz3ru",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});
console.log(client, "CLINT");
const builder = imageUrlBuilder(client);

// uses GROQ to query content: https://www.sanity.io/docs/groq
