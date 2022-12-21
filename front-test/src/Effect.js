import {useEffect, useState} from "react";


function Effect(){

  const [count, setCount] = useState(0);
  const [keyword, setKeyword] = useState("");

  useEffect(() => { // 서버에서 데이터를 받아올 때 실행된다.
    console.log("CALL API");
  });

  useEffect(() => { // 서버에서 데이터를 받아올 때 실행된다.
    console.log("CHANGE COUNT", count);
  }, [count]);

  useEffect(() => { // 서버에서 데이터를 받아올 때 실행된다.
    console.log("CHANGE KEYWORD", keyword);
  }, [keyword]);

  useEffect(() => {
    console.log("CHANGE KEYWORD, COUNT", keyword, count);
  }, [keyword, count]);

  console.log("UI REFRESH");

  const onClick = () => {
    setCount(count + 1);
  };

  const onChange = (event) => {
    console.log(event.target.value);

    setKeyword(event.target.value);
  };

  return (
    <div>
      <h1>Number of Count : {count}</h1>
      <button onClick={onClick}>Count up</button>
      <input type="text" onChange={onChange} value={keyword}/>
      <h1>input Keyword : {keyword}</h1>
    </div>
  );
}

export default Effect;