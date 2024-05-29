import { createClient } from "next-sanity";
import useSWR from "swr";

const client = createClient({
  projectId: "lvs6uzbo",
  dataset: "production",
  apiVersion: "2022-03-07",
  useCdn: true,
});

export default client;
