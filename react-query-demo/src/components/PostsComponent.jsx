// src/components/PostsComponent.jsx
import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async (page) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}`
  );
  return data;
};

export default function PostsComponent() {
  const [page, setPage] = React.useState(1);

  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["posts", page],
    queryFn: () => fetchPosts(page),
    keepPreviousData: true,           // ✅ keep old data during pagination
    refetchOnWindowFocus: false,      // ✅ don't auto-refetch when switching tabs
    cacheTime: 1000 * 60 * 5,         // ✅ cache results for 5 minutes
    staleTime: 1000 * 30,             // ✅ consider data fresh for 30 seconds
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts (Page {page})</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <div>
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <button onClick={() => setPage((old) => old + 1)} disabled={isFetching}>
          Next
        </button>
      </div>

      {isFetching && <p>Fetching...</p>}
    </div>
  );
}
