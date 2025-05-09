import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidApiKey = import.meta.env.VITE_RAPID_API_KEY;

export const articleApi = createApi({
  reducerPath: "articleApi", //name for the Api Slice
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", rapidApiKey); // Use your RapidAPI key
      headers.set("X-RapidAPI-Host", "article-extractor-and-summarizer.p.rapidapi.com");
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) =>
        `summarize?url=${encodeURIComponent(params.articleUrl)}&lang=en&engine=2`, // Specify correct endpoint & parameters
    }),
  }),
});

export const { useLazyGetSummaryQuery } = articleApi;
