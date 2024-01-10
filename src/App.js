import "./App.css";
import data from "./components/Data";
import { useState } from "react";

function App() {
  const [list, setList] = useState(data);
  return (
    <div>
      <h3>Simple display of data using map</h3>
      <h1>{list.length} birthdays today</h1>
      {list.map((l) => {
        return (
          <>
            <div key={l.id}>
              <img src={l.image} alt={l.name} />
              <div>
                <h2>{l.name}</h2>
                <p>{l.age}</p>
              </div>
            </div>
          </>
        );
      })}
      <button onClick={() => setList([])}>Clear All</button>
    </div>
  );
}

export default App;
