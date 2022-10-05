import { useState, useEffect } from "react";
import postsData from "../mockData/posts-data.json";

const useFetchPosts = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [temp, setTemp] = useState(false);

  useEffect(() => {
    try {
      setIsLoading(true);
      // setTimeout(() => {
      setData(postsData);
      // }, 3000);

      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  }, []);

  function addPost(postData) {
    setTemp((prev) => !prev);
    const newData = [...data];
    newData.push(postData);

    setData(newData);
    console.log("dataaaaaa ", newData);
  }
  // console.log(data, "====>>");
  return { data, isLoading, error, addPost };
};

export default useFetchPosts;
