import axios from "axios";


export default function TaskCard({ task }) {


    const axiosInstance = axios.create({
        baseURL: 'http://localhost:8080/tasks/', // your API base URL
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem("token")}` // Set the Authorization header with the token
        }
    });
    const handleDelete = () => {
        axiosInstance.delete(`http://localhost:8080/tasks/delete/${task._id}`)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
        window.location.reload();
    };
    const handlePriorityUpdate = () => {
        if (task.priority === "low") task.priority = "medium"
        else if (task.priority === "medium") task.priority = "high"
        else task.priority = "low"
        axiosInstance.patch(`http://localhost:8080/tasks/update/${task._id}`, task)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
        window.location.reload();
    }
    const handleStatusUpdate = () => {
        if (task.status === "pending") task.status = "inProgress"
        else if (task.status === "inProgress") task.status = "completed"
        else task.status = "pending"
        axiosInstance.patch(`http://localhost:8080/tasks/update/${task._id}`, task)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
        window.location.reload();
    }


    return (
        <div style={{ border: '1px solid black', padding: '10px', borderRadius: '10px', height: '230px' }} >
            <p><b>Task: </b>{task.title}</p>
            <p><b>Note: </b>{task.description}</p>
            <p><b>Deadline: </b>{task.dueDate}</p>
            <button
                style={{height: '30px', width: '100px', fontSize: '20px', margin: '10px', backgroundColor: 'blue', border: 'none', borderRadius: '5px'}}
                onClick={handlePriorityUpdate}
            >{task.priority}</button>

            <button
                style={{height: '30px', width: '100px', fontSize: '20px', margin: '10px', backgroundColor: 'green', border: 'none', borderRadius: '5px'}}
                onClick={handleStatusUpdate}
            >{task.status}</button>

            <button
                style={{height: '30px', width: '100px', fontSize: '20px', margin: '10px', backgroundColor: 'red', border: 'none', borderRadius: '5px'}}
                onClick={handleDelete}
            >Delete</button>
        </div>
    )
}
