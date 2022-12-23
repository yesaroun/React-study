import {useEffect, useState} from "react";
import TodoItem from "./TodoItem";

function Todo() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  const onSubmit = (event) => {
    event.preventDefault(); // 새로고침 막아줌
    console.log("onSubmit Click");

    setTodos((currentTodos) => [todo, ...currentTodos]);
    setTodo("");  // 초기화 시킨다.

    console.log(todos);
  };

  return (<div>
    <form onSubmit={onSubmit} action="">
      {/*<input value={todo} type="text" placeholder="할 일을 추가하세요."/>*/}
      <button>Add todo</button>
      {todos.map((item) => {
        return (
          // <li key={item.id}>{item.title}</li>
          <TodoItem key={item.id} id={item.id} userId={item.userId} title={item.title}></TodoItem>
        );
      })}
    </form>
    {/*{todos.map((item, index) => {*/}
    {/*  // return <TodoItem index={index} item={item}></TodoItem>*/}
    {/*  // return <li key={index}>{item}</li>;*/}
    {/*  return <TodoItem key={item.id} name={item.name} email={item.email}></TodoItem>*/}
    {/*})}*/}
  </div>);
}

export default Todo;