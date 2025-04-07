import React, { useReducer, useEffect, useState } from "react";

function useFetchApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(url)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Netwok response is not ok ");
        }
        return resp.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

export default useFetchApi;
