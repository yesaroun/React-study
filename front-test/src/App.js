import './App.css';
import {useState} from "react";
import Count from './Count';
import Effect from './Effect';
import Todo from './Todo';
import Button from "./Button";
import BookList from "./BookList";
import Users from "./Users";
import MovieList from "./components/Movies";
import Movies from "./components/Movies";

function App() {

  return (
    <div>
      {/*<Count></Count>*/}
      {/*<Effect></Effect>*/}
      {/*<Todo></Todo>*/}
      {/*<Button text="첫 번째 버튼" work="true"/>*/}
      {/*<Button text="두 번째 버튼" work=""/>*/}
      {/*<Button text="세 번째 버튼" work=""/>*/}
      {/*<BookList></BookList>*/}
      {/*<Users></Users>*/}
      <Movies></Movies>
    </div>
  );
}

export default App;
