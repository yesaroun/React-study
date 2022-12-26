import './App.css';
import {useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

/* UI 컴포턴트 IMPORT */
import Count from './Count';
import Effect from './Effect';
import Todo from './Todo';
import Button from "./Button";
import BookList from "./BookList";
import Users from "./Users";
import MovieList from "./components/Movies";
import Movies from "./components/Movies";
import Home from "./Home";
import Details from "./Details";

function App() {
  return (
    // <div>
    //   {/*<Count></Count>*/}
    //   {/*<Effect></Effect>*/}
    //   {/*<Todo></Todo>*/}
    //   {/*<Button text="첫 번째 버튼" work="true"/>*/}
    //   {/*<Button text="두 번째 버튼" work=""/>*/}
    //   {/*<Button text="세 번째 버튼" work=""/>*/}
    //   {/*<BookList></BookList>*/}
    //   {/*<Users></Users>*/}
    //   <Movies></Movies>
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/count" element={<Count></Count>}></Route>
        <Route path="/effect" element={<Effect></Effect>}></Route>
        <Route path="/todo" element={<Todo></Todo>}></Route>
        <Route path="/BookList" element={<BookList></BookList>}></Route>
        <Route path="/users" element={<Users></Users>}></Route>

        // Movie
        <Route path="/movie" element={<Movies></Movies>}></Route>
        <Route path="/movie/detail/:id" element={<Details></Details>}></Route>

      </Routes>
    </Router>
  );
}

export default App;
