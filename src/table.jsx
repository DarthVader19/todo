import { useEffect, useState } from "react";

 


const Table =({data,setTodos,handleDelete})=>{

    // const {slipNo,vehNo,consignor,vehType,item,weight,charge}=data;

    const [todos,settodos] = useState([...data]);
    const [completeTodos,setCompleteTodos] = useState([]);
    const [inCompleteTodos,setInCompleteTodos] = useState([]);



    useEffect( ()=>{
         settodos(prev=>{
            return [...data]
        })
        // console.log(data,todos);

        setInCompleteTodos(p=>data.filter(t=>!t.isCompleted))
        setCompleteTodos(p=>data.filter(t=>t.isCompleted))


    },[data])

    

   

    const handleCheck = (i,e,task)=>{

        // console.log(e.target.checked,i);
        task.isCompleted = e.target.checked
        const completed = todos.filter((todo)=>todo.isCompleted)
        
        if(completed.length){
       
            setCompleteTodos(completed)
            setInCompleteTodos(p=>todos.filter(t=>!t.isCompleted))

        }
        e.target.checked = false
        // todos[i]
      }

    //divide-y divide-gray-200 table-fixed dark:divide-gray-700
  //bg-white border-2 border-spacing-2 w-full text-lg text-left text-gray-600  
    return(
        <div className="relative overflow-x-auto rounded">
    
         <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
            <thead className=" text-zinc-100 bg-gray-100 dark:bg-gray-700">
                <tr>
                <th className="px-6 py-3 border-2">.</th>

                <th className="px-6 py-3 border-2">Task</th>
                <th className="px-6 py-3 border-2">Time</th>
                <th className="px-6 py-3 border-2">Action</th>
                </tr>
            </thead>
                    <tbody>
                        
                        {inCompleteTodos.map((row, index) => (
                            <tr key={row.task+index}  className="bg-gray-100 text-center">
                            <td className="px-3 "><input type="checkbox" onChange={(e)=>handleCheck(index,e,row)}></input></td>
                            <td className="px-3">{row.task}</td>
                            <td className="px-3">{row.time}</td>

                            <td>
                            <div>
                                <a className='m-2.5 underline cursor-pointer hover:text-red-400' onClick={()=>handleDelete(index,row)} >delete</a>
                            </div>
                             </td>
                            </tr>
                          ))}

                          {completeTodos.map((row, index) => (
                            
                            <tr key={row.task}  className="bg-green-300 text-center">

                             <td className="px-3 ">
                            {'✔'}
                             </td>
                            <td className="px-3 line-through ">{row.task}</td>
                            <td className="px-3 line-through ">{row.time}</td>
                            <td className="px-3 "></td>

                           
                            </tr>
                          ))}
                       

                    </tbody>
             </table>

        </div>
    )
};

export default Table ;