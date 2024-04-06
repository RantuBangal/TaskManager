import axios from "axios";
import { useEffect, useState } from "react";
import TaskCard from "./TaskCard";

export default function Tasks() {
  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
    const axiosInstance = axios.create({
      baseURL: 'http://localhost:8080/tasks/', 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${localStorage.getItem("token")}` 
      }
    });
    axiosInstance
      .get("http://localhost:8080/tasks/")
      .then((res) => {
        console.log(res.data.tasks)
        setAllTasks(res.data.tasks);
      })
      .catch((err) => console.log(err));
  }, [])



  return (
    <div style={{display: 'flex', gap: '10px'}} >
      {
        allTasks?.map((task,index) => {
          return <TaskCard key={index} task={task} />
        })
      }
    </div>
  )
}
