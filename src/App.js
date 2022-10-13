import Card from "./components/Card";
import './App.css'
const comment = [
  {
    id: 1,
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "http://placekitten.com/g/62/62",
    },
  },

  {
    id: 2,
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "http://placekitten.com/g/64/64",
    },
  },

  {
    id: 3,
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "http://placekitten.com/g/64/64",
    },
  },
];
function App() {
  return (
    <div className="App">
      {comment.map((el) => {
        return (
          <Card
   avatarUrl={el.author.avatarUrl}
   name={el.author.name}
   text={el.text}
   date={el.date}
          />
        );
      })}
    </div>
  );
}
export default App;
