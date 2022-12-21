import {useState} from "react";

function Todo() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const onChange = (event) => {
    console.log(event.target.value);
    setTodo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault(); // 새로고침 막아줌
    console.log("onSubmit Click");

    setTodos((currentTodos) => [todo, ...currentTodos]);
    setTodo("") // 초기화 시킨다.

    console.log(todos);
  };

  return (<div>
      <form onSubmit={onSubmit} action="">
        <input value={todo} onChange={onChange} type="text" placeholder="할 일을 추가하세요."/>
        <button>Add todo</button>
      </form>
      {todos.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </div>);
}

export default Todo;