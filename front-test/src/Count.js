import {useState} from "react";

function Count() {
	const [count, setCount] = useState(100);

	const btnClickEvent = () => {
		setCount(count + 1);
		console.log(count);
	}
	return (
		<div>
			<h1>Count : {count}</h1>
			<button onClick={btnClickEvent}>count up</button>
		</div>
	);
}

export default Count;
