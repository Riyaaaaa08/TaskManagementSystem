import React, { useMemo, useState } from "react";
import Sidebar from "../../components/tester/Sidebar";
import { Modal, Button, Form } from "react-bootstrap";
import { MdModeEditOutline } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";

type Task = {
  id: number;
  title: string;
  description: string;
  reporter: string;
  date: string;
  assignedTo: string;
  environment: string;
  priority: "High" | "Medium" | "Low";
  progress: number;
  comments: number;
};

const priorityRank: Record<Task["priority"], number> = {
  High: 0,
  Medium: 1,
  Low: 2,
};

const TesterTasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Login form validation error",
      description: "Email validation not working properly on login form",
      reporter: "mike.tester",
      date: "Jan 15, 2025",
      assignedTo: "mike.frontend",
      environment: "Production",
      priority: "High",
      progress: 75,
      comments: 1,
    },
    {
      id: 2,
      title: "Login form validation error",
      description: "Email validation not working properly on login form",
      reporter: "mike.tester",
      date: "Jan 15, 2025",
      assignedTo: "mike.frontend",
      environment: "Production",
      priority: "Medium",
      progress: 35,
      comments: 1,
    },
  ]);

  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState<Omit<Task, "id">>({
    title: "",
    description: "",
    reporter: "",
    date: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
    assignedTo: "",
    environment: "Production",
    priority: "Medium",
    progress: 0,
    comments: 0,
  });

  const sortedTasks = useMemo(
    () =>
      [...tasks].sort(
        (a, b) => priorityRank[a.priority] - priorityRank[b.priority]
      ),
    [tasks]
  );

  const getPriorityBadge = (priority: Task["priority"]) => {
    if (priority === "High") return "danger";
    if (priority === "Medium") return "warning";
    return "secondary";
  };

  const openAdd = () => {
    setForm({
      title: "",
      description: "",
      reporter: "",
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      assignedTo: "",
      environment: "Production",
      priority: "Medium",
      progress: 0,
      comments: 0,
    });
    setShowAdd(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        name === "progress" || name === "comments" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextId = tasks.length ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;
    const newTask: Task = { id: nextId, ...form };
    setTasks((prev) => [...prev, newTask]);
    setShowAdd(false);
  };

  const handleDelete = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 p-3">
          <div className="mb-2 d-flex justify-content-between align-items-center">
            <h5>Total Tasks</h5>
            <button className="btn btn-sm btn-add-task" onClick={openAdd}>
              Add Task
            </button>
          </div>

          {sortedTasks.map((bug) => (
            <div key={bug.id} className="card mb-4 shadow-sm">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title">{bug.title}</h5>
                  <span
                    className={`badge bg-${getPriorityBadge(bug.priority)}`}
                  >
                    {bug.priority}
                  </span>
                </div>
                <p className="text-muted">{bug.description}</p>

                <div className="d-flex flex-wrap mb-3">
                  <small className="me-4">
                    <i className="bi bi-person"></i> Reported by: {bug.reporter}
                  </small>
                  <small className="me-4">
                    <i className="bi bi-calendar"></i> Reported: {bug.date}
                  </small>
                  <small className="me-4">
                    <i className="bi bi-person-check"></i> Assigned to:{" "}
                    {bug.assignedTo}
                  </small>
                  <small>
                    <i className="bi bi-gear"></i> Environment:{" "}
                    {bug.environment}
                  </small>
                </div>

                <div className="progress mb-3" style={{ height: "8px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${bug.progress}%` }}
                    aria-valuenow={bug.progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <select
                      className="form-select form-select-sm d-inline w-auto me-2"
                      defaultValue="In Progress"
                    >
                      <option>In Progress</option>
                      <option>Resolved</option>
                      <option>Pending</option>
                    </select>
                    <button className="btn btn-sm btn-outline-secondary">
                      {bug.comments} comments
                    </button>
                  </div>
                  <div>
                    <button className="btn btn-sm btn-outline-primary me-2">
                      <MdModeEditOutline />
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => handleDelete(bug.id)}
                    >
                      <FaRegTrashAlt />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="text-end">
            <button className="btn btn-next">Next</button>
          </div>
        </div>
      </div>

      <Modal show={showAdd} onHide={() => setShowAdd(false)} size="xl">
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Add Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                className="form-control"
                name="title"
                value={form.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                name="description"
                rows={3}
                value={form.description}
                onChange={handleChange}
                required
              />
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Reporter</label>
                <input
                  className="form-control"
                  name="reporter"
                  value={form.reporter}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Assigned To</label>
                <input
                  className="form-control"
                  name="assignedTo"
                  value={form.assignedTo}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Environment</label>
                <select
                  className="form-select"
                  name="environment"
                  value={form.environment}
                  onChange={handleChange}
                >
                  <option>Production</option>
                  <option>Staging</option>
                  <option>Development</option>
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Priority</label>
                <select
                  className="form-select"
                  name="priority"
                  value={form.priority}
                  onChange={handleChange}
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Progress (%)</label>
                <input
                  type="number"
                  min={0}
                  max={100}
                  className="form-control"
                  name="progress"
                  value={form.progress}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Comments</label>
                <input
                  type="number"
                  min={0}
                  className="form-control"
                  name="comments"
                  value={form.comments}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Reported Date</label>
              <input
                className="form-control"
                name="date"
                value={form.date}
                onChange={handleChange}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              type="button"
              onClick={() => setShowAdd(false)}
            >
              Cancel
            </Button>
            <Button className="btn btn-save" type="submit">
              Save Task
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default TesterTasks;
