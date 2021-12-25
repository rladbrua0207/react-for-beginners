import { useRef, useState } from "react";

function App() {
  const [toDo, setToDo] = useState(0);
  const [toDos, setToDos] = useState([]);
  const latestToDos = useRef(toDos);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    latestToDos.current.push(toDo);
    setToDos(latestToDos.current);

    setToDo("");
    console.log(toDos);
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          type={"text"}
          value={toDo}
          onChange={onChange}
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
