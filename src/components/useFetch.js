import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Failed to Fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setisLoading(false);
        setError(null);
      });
  }, [url]);

  return { data, setData, isLoading, error };
};

export default useFetch;
