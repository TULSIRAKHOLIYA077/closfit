import { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error(err));      
  }, []);

  return (
    <div>
      <ul>
        {data && data.slice(0, 5).map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
