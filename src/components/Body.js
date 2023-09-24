import React, { useEffect, useState } from "react";
import MyList from "./MyList";
const Body = ()=>{
    const [data, setData] = useState([])
     useEffect(()=>{
        getTodos()
     },[])
    async function getTodos(){
        const data = await fetch("https://jsonplaceholder.typicode.com/todos/")
        const json = await data.json();
        console.log(json)
        setData(json)
    }
    return(
        <>
          {
            data.map((items)=>{
                return(
                    <>
                    <MyList {...items} key={items.userId}/>
                    </>
                )
            })
          }
        </>
    )
}

export default Body;