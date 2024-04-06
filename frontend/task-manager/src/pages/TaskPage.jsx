import { useState } from "react";
import TaskAddForm from "../components/TaskAddForm";
import Tasks from "../components/Tasks";


export default function TaskPage() {
 const user = JSON.parse(localStorage.getItem("user"));


  return (
    <>
    <h1>Hello <span style={{color: 'green'}} >{user.userName}</span></h1>
    <h1>Here are your all TASKS</h1>
    <div style={{display: 'flex', gap: '10px'}} >
      <TaskAddForm/>
      <Tasks/>
    </div>
    </>
  )
}
