import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const response = await axios.get("http://localhost:5000/api/v1/posts");
  return response.data;
};

const PostsComponent = () => {
  const { data, isLoading, isError } = useQuery(["posts"], fetchPosts, {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    cacheTime: 1000 * 60 * 5, // keep data in cache for 5 minutes
    staleTime: 1000 * 30,     // data is fresh for 30 seconds
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching posts</p>;

  return (
    <div>
      <h2>Posts</h2>
      {data?.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsComponent;
