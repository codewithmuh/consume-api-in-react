import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

const Home = () => {

const [error, setError] =  useState(null);
const [isLoaded, setIsLoaded] =useState(false);
const [users, setUsers] = useState([]);

useEffect(()=> {

    fetch("https://jsonplaceholder.typicode.com/users/")
     .then(res =>  res.json())
     .then(
        (data) => {
        setIsLoaded(true);
        setUsers(data);
     },
     (error) =>{
        setIsLoaded(true);
        setError(error);
     })

}, [])

    
  return (
    <div>
       { users.map( user =>(
        <li>
           <Link to={`user/${user.id}`}>
            {user.name}
           </Link>
        </li>
       ))}
    </div>
  )
}

export default Home;