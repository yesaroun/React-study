import styles from './App.module.css';
import AppRouter from './Router';
import { useState } from 'react';

function App() {
  const [age, setAge] = useState(0);

  return (
    <div>
      <>
        <AppRouter age={age}></AppRouter>
      </>
    </div>
  );
}

export default App;
