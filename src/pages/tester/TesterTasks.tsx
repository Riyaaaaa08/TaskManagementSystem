import React, { useState } from "react";
import { Table, Form } from "react-bootstrap";

type Task = {
  id: number;
  title: string;
  status: string;
};

const TesterTasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Test login functionality", status: "Pending" },
    { id: 2, title: "Verify forgot password flow", status: "In Progress" },
    { id: 3, title: "Check OTP validation", status: "Completed" },
  ]);

  const handleStatusChange = (id: number, newStatus: string) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, status: newStatus } : task)));
  };

  return (
    <div className="container" style={{ paddingTop: 30 }}>
    <div className="container mt-5">
      <h2 className="mb-4 text-center">My Tasks</h2>
      <Table bordered hover responsive className="shadow">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Task Title</th>
            <th>Status</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.status}</td>
              <td>
                <Form.Select
                  value={task.status}
                  onChange={(e) => handleStatusChange(task.id, e.target.value)}
                >
                  <option>Pending</option>
                  <option>In Progress</option>
                  <option>Completed</option>
                </Form.Select>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    </div>
  );
};

export default TesterTasks;
