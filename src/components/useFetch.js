import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortFetch = new AbortController();
    fetch(url, { signal: abortFetch.signal })
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
      })
      .catch((er) => {
        if (er.name === "AbortError") {
          console.log("fetch stoped");
        } else {
          setisLoading(false);
          setError(er.message);
        }
      });

    return () => abortFetch.abort();
  }, [url]);

  return { data, setData, isLoading, error };
};

export default useFetch;
