import React from "react";
import { Box } from "@mui/material";
import Post from "./Post";
import useFetchPosts from "../hooks/useFetchPosts";

export const Feed = () => {
  const { data, isLoading, error } = useFetchPosts();

  console.log(data, "getttt");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <Box flex={4} p={2}>
      {data.map((elm) => (
        <Post key={elm.id} post={elm} />
      ))}
    </Box>
  );
};
