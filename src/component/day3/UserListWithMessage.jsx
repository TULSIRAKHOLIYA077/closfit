
const UserListWithMessage = () => {
    const data = [
    { id: 1, title: "Card One" },
    { id: 2, title: "Card Two" },
    { id: 3, title: "Card Three" }
  ];

  return (
    <div>
      {
        data.length > 0 ? (
        data.map((d)=>(
          <div key={d.id} className="border-2 p-4 m-7">
            <h3>{d.title}</h3>
          </div>
        ))
         ) : (
          <p>No users found.</p>
         )

      }
    </div>
  )
}

export default UserListWithMessage