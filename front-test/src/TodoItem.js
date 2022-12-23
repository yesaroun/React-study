import styles from "./TodoItem.module.css";
import moment from "moment";      // 시간 모듈

// function TodoItem(props) {
//    console.log("props : ", props); 이렇게 확인 가능
// {props.index} 이렇게 사용 가능
// function TodoItem({index, item}) {
//   // const [time, setTime] = useState("");
//   const  nowTime = moment().format("YYYY-MM-DD HH:mm:ss");
//
//   return (
//     <div className={styles.todoItem}>
//       <h1>{index+1} 번째 리스트</h1>
//       <li key={index}>{item}</li>
//       <p>작성 시간: {nowTime}</p>
//     </div>
//   );
// }

function TodoItem({id, userId, title}) {
  return (
    <div>
      <h3>{id}번째 todo list입니다.</h3>
      <li>{userId} / {title}</li>
    </div>
  );
}

export default TodoItem;