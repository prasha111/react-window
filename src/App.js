import './App.css';
import { useEffect, useState } from "react"
import { apiCall } from './component/ApiService';
import {FixedSizeList} from "react-window"

function App() {
  const [data ,setData] = useState([])

  useEffect(()=>{
    apiCall().then((res)=>{
    console.log(res)
      setData(res)
    }).catch((err)=>{
      console.log(err)
    })
    return()=>{
      
    }
  },[])
 
  return (
    <div className="App">
      <FixedSizeList
      height={800}
      itemCount={data.length}
      itemSize={100}
      width={200}
      itemData={data}
      >
       {RowElement}
      </FixedSizeList>
    </div>
  );
}

export default App;
const RowElement = ({style, data, index}) =>{
  return(
    <div style={style} className='row'>
      {data[index]?.id || "dccs"}
      {data[index]?.title || "dccs"}
    </div>
  )
}