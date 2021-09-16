import "./styles.css";

export default function App() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="App">
      <div className="squares">
        {numbers.map((i, j) => {
          return (
            <div key={j} className="Numbers">
              {i}
            </div>
          );
        })}
      </div>
    </div>
  );
}
