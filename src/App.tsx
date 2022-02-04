import "./App.css";
import React, { ChangeEvent, FC, useState } from "react";

type todoType = string;
const App: FC = () => {
  const [todos, setTodos] = useState<todoType[]>([]);
  const [text, setText] = useState<string>("");
  const handleChange: Function = (e: ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  };
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setTodos([...todos, text]);
    setText("");
  };
  return (
    <div className="app">
      <h1>Todo</h1>
      <form className="todoForm" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          required
          placeholder="Enter todo"
          value={text}
          onChange={(e) => handleChange(e)}
        />
        <input type="submit" />
      </form>
      <div className="todos">
        <ul>
          {todos.map((todo: any) => (
            <li>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
