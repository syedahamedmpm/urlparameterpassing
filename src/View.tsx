import { useState,useEffect } from 'react'
import {
  useParams 
} from "react-router-dom";
import axios from 'axios';
function View(props) {
  const [viewList, setViewList] = useState({})
  let { id } = useParams();
  
useEffect(() => {
	console.log(id)
	axios(`https://jsonplaceholder.typicode.com/posts/${ id }`)
	.then(resp => setViewList(resp.data))
	});
  return (
    <div className="App">
      <ul>
	  {viewList.title}
	  </ul>
    </div>
  )
}

export default View
