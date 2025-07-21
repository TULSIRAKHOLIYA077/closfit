import { useNavigate, useParams } from "react-router-dom";

const User = () => {
  const { username } = useParams(); // 🔥 this gets the value from the URL
  const navigate = useNavigate();
  const homepage = ()=>{
    navigate("/home");
  }
  return (
    <div>
      <h2>Hello, {username}! </h2>
      <p className="text-blue-500 cursor-pointer" onClick={homepage}>Go to homepage</p>
    </div>
  );
};

export default User;
