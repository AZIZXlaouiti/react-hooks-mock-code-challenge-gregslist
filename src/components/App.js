import React,{useEffect,useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [itemsList,setItem] = useState([])
  const [search,setSearch] = useState('')
  useEffect(()=>{
    fetch('http://localhost:6001/listings')
    .then(resp=>resp.json())
    .then(setItem)
  },[])
  const displayedItem = itemsList.filter((item) =>
  item.description.toLowerCase().includes(search.toLowerCase())
)
  function update (id){
    setItem(itemsList.filter((item)=>item.id !== id))
  }
 
  return (
    <div className="app">
      <Header onSearch={setSearch}/>
      <ListingsContainer itemsList={displayedItem} OnUpdate={update}/>
    </div>
  );
}

export default App;
