import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { useEffect, useState } from 'react';
import './App.css';
import Legends from './components/Legends'
import Stats from './components/Stats';
import axios from 'axios';
import New from './components/New';

function App() {

  const [data,setData] = useState([])

  useEffect(()=>{
    try{
      axios.get(`${process.env.REACT_APP_DATABASE}/legend`)
      .then((responce)=>{
        console.log(responce.data)
        setData(responce.data)
      }) 
    }
    catch(err){
      console.log(err)
    }
  },[])


  return (
    <div className="App">
      <Router>
        <Link to='/'><p>All Legends</p></Link>
        <Link to='/new'><p>Add Legends</p></Link>
        <Routes>
          <Route path='/' element={<Legends data={data}/>}/>
          <Route path='/details/:id' element={<Stats data={data}/>}/>
          <Route path='/new' element={<New data={data}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
