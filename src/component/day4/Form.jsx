import { useState } from "react"

const Form = () => {
  const [form, setForm] = useState({name: "", email: "", password: ""});
  const [errors, setErrors] = useState("");
  const handleChange = (e)=>{
    setForm({ ...form, [e.target.name]: e.target.value });
    
  }

  const validate = () => {
    if(!form.name && !form.email && !form.password){
      setErrors("Fill all the fields")
    }

    if(!form.name){
      setErrors("Name is required");
    }

    if(!form.email){
      setErrors("Email is required");
    }else if(!/\S+@\S+\.\S+/.test(form.email)){
      setErrors("Invalid email");
    }

    if(!form.password){
      setErrors("Password is required");
    }else if(form.password.length < 6){
      setErrors("Password must be 6+ chars");
    }

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
    if (errors === "") {
      alert("Login successful!");
    }
        console.log(form.name, form.email, form.password);

  };
  return (
    <form action="" className="" onSubmit={handleSubmit} className="border-2 w-fit flex flex-col p-2 gap-2 m-auto">
      <input type="text" name="name" onChange={handleChange} value={form.name} placeholder="Name" className="border-2 p-2"/>
      <input type="email" name="email" onChange={handleChange} value={form.email} placeholder="Email" className="border-2 p-2"/>
      <input type="password" name="password" onChange={handleChange} value={form.password} placeholder="Password" className="border-2 p-2"/>
      <button type="submit" className="border-2 p-2">Submit</button>
      {
        errors && errors
      }
    </form>
  )
}

export default Form