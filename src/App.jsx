import { useEffect, useState } from 'react'
import './App.css'
import Movies from './component/Movies'
import axios from 'axios'
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Summary from './component/Summary';



function App() {

  const[myData, setMyData] = useState([]);
  useEffect(() => {
    axios.get("https://api.tvmaze.com/search/shows?q=all").then((res) => 
      setMyData(res.data)
    );
  },[]);
return(

  <>
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<div style={{display: "flex"}}>
  <Movies myData={myData}/>
  </div>}/> 
  <Route path='summary' element={<Summary myData={myData}/>} />
  </Routes>
  </BrowserRouter>
   
  </>
)
}

export default App
