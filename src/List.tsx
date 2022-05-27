import { useState,useEffect } from 'react'
import axios from 'axios'
import {
  Link
} from "react-router-dom";
function List() {
  const [listItems, setListItems] = useState([])
	useEffect(() => {
	axios('https://jsonplaceholder.typicode.com/posts')
	.then(resp => setListItems(resp.data))
	},[listItems]);
  return (
    <div className="App">
	<ul>
	{listItems.map((lis,index)=>(
	<li key={index}>{lis.title} <Link to={"/view/" +lis.id }><button>View</button></Link></li>
	
	  ))}
	  </ul>
    </div>
  )
}

export default List
