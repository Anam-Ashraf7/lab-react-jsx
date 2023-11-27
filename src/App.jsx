import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  // code here
  const data = imageData()
  return (
    <div>
      <img id={data[0].id} src={data[0].img} alt="" />
      <img id={data[1].id} src={data[1].img} alt="" />
      <img id={data[2].id} src={data[2].img} alt="" />
      <img id={data[3].id} src={data[3].img} alt="" />
    </div>
  )
}

export default App;
