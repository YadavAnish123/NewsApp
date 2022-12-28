import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News  from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
 
 const App =()=> {
  const apikey= '6aeec94aa1f44c9aad7890b8f892e4b4'
   
  const [progress, setProgress] = useState(0)
    
     return (
      <Router> 
       <div>
            
       <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
         
            <Navbar/>
             
            <Routes>
                   <Route exact path='/sports' element={<News setProgress={setProgress} apikey={ apikey}
                    pagesize="20" country="in" category="sports"/>}></Route>
                   <Route exact path='/business' element={<News setProgress={setProgress} apikey={ apikey}
                     pagesize="20" country="in" category="business"/>}></Route>
                   <Route exact path='/science' element={<News setProgress={setProgress} apikey={ apikey}
                    pagesize="20" country="in" category="science"/>}></Route>
                   <Route exact path='/entertainment' element={<News setProgress={setProgress} apikey={ apikey}
                    pagesize="20" country="in" category="entertainment"/>}></Route>
                   <Route exact path='/' element={<News setProgress={setProgress} apikey={ apikey}
                    pagesize="20" country="in" category="general"/>}></Route>
                   <Route exact path='/health' element={<News setProgress={setProgress} apikey={ apikey}
                    pagesize="20" country="in" category="health"/>}></Route>
                   <Route exact path='/technology' element={<News setProgress={setProgress} apikey={ apikey}
                    pagesize="20" country="in" category="technology"/>}></Route>
                  
                  
            
          </Routes>
           
       </div>
      </Router>
     )
   }
   export default App
 