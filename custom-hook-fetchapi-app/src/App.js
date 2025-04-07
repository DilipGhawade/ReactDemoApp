import React from "react";
import useFetchApi from "./useFetchApi";
function App() {
  const { data, loading, error } = useFetchApi(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return (
    <div className="container mt-5 ">
      <h2 className="mb-5">Custom useFetch Hook</h2>
      {loading && <p className="text-primary">Loading...</p>}
      {error && <p className="text-danger">Error Fetching data: {error}</p>}
      {data && (
        <ul className="list-group">
          {data.slice(0, 5).map((post) => (
            <li key={post.id} className="list-group-item">
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
