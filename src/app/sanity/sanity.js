import { createClient } from "next-sanity";

const client = createClient({
  projectId: "lvs6uzbo",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: true,
});
