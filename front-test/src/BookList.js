import styles from "./BookList.module.css";

function BookList() {
  return (
    <div className={styles.booklist}>
      <Book title="my" author="kim" imglink="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F1tqRw%2FbtryUfwtfCS%2FpkMKT5b4k6HvnfOMdhdRpk%2Fimg.png"></Book>
      <Book title="mtmy" author="lee" imglink="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F1tqRw%2FbtryUfwtfCS%2FpkMKT5b4k6HvnfOMdhdRpk%2Fimg.png"></Book>
      <Book title="Hey~" author="kim" imglink="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F1tqRw%2FbtryUfwtfCS%2FpkMKT5b4k6HvnfOMdhdRpk%2Fimg.png"></Book>
    </div>
  )
}

const Book = (props) => {
  return (
    <div className={styles.book}>
      <img src={props.imglink} height="300px" width="200px" alt=""/>
      <h1>{props.title}</h1>
      <h3>{props.author}</h3>
    </div>
  )
}

// 이미지, 제목, 저자

const Img = () => (
  <img height="300px" width="200px"
       src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F1tqRw%2FbtryUfwtfCS%2FpkMKT5b4k6HvnfOMdhdRpk%2Fimg.png"
       alt=""/>
);
const Title = () => {
  return (<h1>만일 내가 인생을 다시 산다면</h1>);
}

const Author = () => {
  return (<h3>김땡땡</h3>)
}


export default BookList;