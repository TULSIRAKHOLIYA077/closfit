import axios from "axios";
import { useEffect, useState } from "react"

const BlogPosts  = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  const fetchData = async ()=>{
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setData(res.data.slice(0, 5));
    } catch (error) {
      setError("Error fetching data")
    }

  }

  useEffect(()=>{
    fetchData();
  }, []);

  return (
    <div>
      <h2>Data from Axios</h2>
      {error && <p className="text-red-500">{error}</p>}
      <ul>
        {data && data.map(item => (
          <li key={item.id}><strong>{item.title}</strong></li>
        ))}
      </ul>
    </div>
  )
}

export default BlogPosts 