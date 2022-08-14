import styled from './App.module.css';
import Button from './Button';

function App() {
  return (
    <div>
      <h1 className={styled.title}>Welcome</h1>
      <Button text="클릭"></Button>

    </div>
  );
}

export default App;
