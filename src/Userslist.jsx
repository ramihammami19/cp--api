import axios from "axios";
import { useState, useEffect } from "react";
import Carde from "./Carde";

function Userslist() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        padding: "100px",
      }}
    >
      {users.map((user, index) => {
        return <div  style={{margin:"30px"}}key={index}>
          <Carde user={user} />
        </div>;
      })}
    </div>
  );
}

export default Userslist;
