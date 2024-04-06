import axios from "axios";
import { useState } from "react";
export default function TaskAddForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: new Date().toISOString().slice(0, 10),
    priority: "medium",
    status: "pending",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
    const axiosInstance = axios.create({
      baseURL: 'http://localhost:8080/tasks/add', 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${localStorage.getItem("token")}` 
      }
    });
    axiosInstance
      .post("http://localhost:8080/tasks/add", task)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

      window.location.reload();

  }

  return (
      <form onSubmit={handleSubmit} className="form" style={{display: 'flex', flexDirection: 'column', width: '400px', gap: '10px', padding: '65px 30px',border: '1px solid black', borderRadius: '10px'}}>
        <h2>Add New Task</h2>
        <label htmlFor="title">Title: </label>
        <input
          className="input"
          type="text"
          name="title"
          placeholder="Enter task title"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
        <label htmlFor="description">Description: </label>
        <input
          className="input"
          type="text"
          name="description"
          placeholder="Enter task description"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        />
        <label htmlFor="dueDate">Due Date: </label>
        <input
          className="input"
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={(e) => {
            setTask({ ...task, dueDate: new Date(e.target.value).toISOString().slice(0, 10) });
            console.log(e) ;
          }}
          />
        <label htmlFor="priority">Priority: </label>
        <select
          className="input"
          name="priority"
          id="priority"
          value={task.priority}
          onChange={(e) => setTask({ ...task, priority: e.target.value })}
        >
          <option value="">Select Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <label htmlFor="status">Status: </label>
        <select
          className="input"
          name="status"
          id="status"
          value={task.status}
          onChange={(e) => setTask({ ...task, status: e.target.value })}
        >
          <option value="">Select Status</option>
          <option value="pending">Pending</option>
          <option value="inProgress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <input style={{ color: "white", padding: "10px", borderRadius: "5px", border: "none", cursor: "pointer" }} type="submit" value={"Add Task"} />
      </form>
  );
}