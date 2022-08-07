import React from 'react'

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import User from './pages/User';

const App = () => {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/user/:id" element={<User />}/>
        <Route path="*" element={ <div><h2>404 Page not found etc</h2></div>
            }
          />
      </Routes>
     </Router>
  )
}

export default App