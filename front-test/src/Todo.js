import {useEffect, useState} from "react";
import TodoItem from "./TodoItem";

function Todo() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  // const onChange = (event) => {
  //   console.log(event.target.value);
  //   setTodo(event.target.value);
  // };
  //
  // const onSubmit = (event) => {
  //   event.preventDefault(); // 새로고침 막아줌
  //   console.log("onSubmit Click");
  //
  //   setTodos((currentTodos) => [todo, ...currentTodos]);
  //   setTodo("");  // 초기화 시킨다.
  //
  //   console.log(todos);
  // };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });
  });

  return (<div>
    {/*<form onSubmit={onSubmit} action="">*/}
    {/*  <input value={todo} onChange={onChange} type="text" placeholder="할 일을 추가하세요."/>*/}
    {/*  <button>Add todo</button>*/}
    {/*</form>*/}
    {todos.map((item, index) => {
      // return <TodoItem index={index} item={item}></TodoItem>
      // return <li key={index}>{item}</li>;
      return <TodoItem key={item.id} name={item.name} email={item.email}></TodoItem>
    })}

  </div>);
}

export default Todo;