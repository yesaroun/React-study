import {useEffect, useState} from "react";
import UserItem from "./UserItem";

function Users() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });

    console.log("API CALL");
  }, []);

  console.log("UI REFRESH");

  return (<div>
    <h1>Coin List</h1>
    {loading ? <h1>"Loading... "</h1> : "로딩 완료"}

    {/*<User data={users}></User>*/}

    {users.map((item) => {
      return <User key={item.id} name={item.name} email={item.email}></User>
          {/*<li key={item.id}>{item.name} / {item.email}</li>*/}
          {/*<li key={item.id}>{item.address.city}</li>*/}
    })}

  </div>)
}

const User = (props) => {
  return (

    <div>
      {/*<li key={props.key}>{props.name} / {props.email}</li>*/}
      {/*여기에 키값을 주는게 아니라 위에 반복되는 map에서 키값을 줘야 한다.*/}
      <li>{props.name} / {props.email}</li>
    </div>

    // <div>
    //   {props.data.map((item) => {
    //     return (
    //       <li key={item.id}>{item.name}</li>
    //       )})}
    // </div>
  );
};

export default Users;