import { useEffect, useState } from 'react'
import './App.css'
import Movies from './component/Movies'
import axios from 'axios'




function App() {

  const[myData, setMyData] = useState([]);
  useEffect(() => {
    axios.get("https://api.tvmaze.com/search/shows?q=all").then((res) => 
      setMyData(res.data)
    );
  },[]);
return(

  <>

  <div style={{display: "flex"}}>
  <Movies myData={myData}/>
  </div>
 
   
  </>
)
}

export default App
