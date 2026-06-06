import React from "react";
import { useForm } from "react-hook-form";
import "../../App.css";

type TaskForm = {
  projectName: string;
  description: string;
  projectCode: string;
  teamMembers: string;
  projectStatus: string;
  projectLeader: string;
  startDate: string;
  dueDate: string;
  projectHours?: string;
};

interface CreateTaskProps {
  onClose: () => void;
}

const CreateTask: React.FC<CreateTaskProps> = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TaskForm>();

  const onSubmit = (data: TaskForm) => {
    console.log("Task Data:", data);
    alert("Task Created Successfully!");
    reset();
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <header className="modal-header">
          <h2>Create Task</h2>
          <button className="modal-close" onClick={onClose}>
            ✕
          </button>
        </header>

        <form onSubmit={handleSubmit(onSubmit)} className="grid-form">
          {/* Task Title */}
          <div className="grid-span-2">
            <label>Task Title</label>
            <input
              type="text"
              placeholder="Enter task name"
              className={errors.projectName ? "error-input" : ""}
              {...register("projectName", {
                required: "Task title is required",
              })}
            />
            <p className="error">{errors.projectName?.message}</p>
          </div>

          {/* Description */}
          <div className="grid-span-2">
            <label>Description</label>
            <textarea
              placeholder="Enter task description"
              className={errors.description ? "error-input" : ""}
              {...register("description", {
                required: "Description is required",
              })}
            />
            <p className="error">{errors.description?.message}</p>
          </div>

          {/* Project */}
          <div className="grid-span-1">
            <label>Project</label>
            <select
              className={errors.projectCode ? "error-input" : ""}
              {...register("projectCode", { required: "Select a project" })}
            >
              <option value="">Select project</option>
              <option value="E-commerce Platform">E-commerce Platform</option>
              <option value="Mobile App">Mobile App</option>
              <option value="Security Suite">Security Suite</option>
            </select>
            <p className="error">{errors.projectCode?.message}</p>
          </div>

          {/* Assigned To */}
          <div className="grid-span-1">
            <label>Assigned To</label>
            <select
              className={errors.teamMembers ? "error-input" : ""}
              {...register("teamMembers", { required: "Select a member" })}
            >
              <option value="">Select team member</option>
              <option value="Gauri More">Gauri More</option>
              <option value="Riya Panchal">Riya Panchal</option>
              <option value="John Smith">John Smith</option>
              <option value="Emma Brown">Emma Brown</option>
            </select>
            <p className="error">{errors.teamMembers?.message}</p>
          </div>

          {/* Priority */}
          <div className="grid-span-1">
            <label>Priority</label>
            <select
              className={errors.projectStatus ? "error-input" : ""}
              {...register("projectStatus", {
                required: "Priority is required",
              })}
            >
              <option value="">Select priority</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            <p className="error">{errors.projectStatus?.message}</p>
          </div>

          {/* Status */}
          <div className="grid-span-1">
            <label>Status</label>
            <select
              className={errors.projectLeader ? "error-input" : ""}
              {...register("projectLeader", { required: "Status is required" })}
            >
              <option value="">Select status</option>
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
            <p className="error">{errors.projectLeader?.message}</p>
          </div>

          {/* Start Date */}
          <div className="grid-span-1">
            <label>Start Date</label>
            <input
              type="date"
              {...register("startDate", { required: "Start date required" })}
              className={errors.startDate ? "error-input" : ""}
            />
            <p className="error">{errors.startDate?.message}</p>
          </div>

          {/* Due Date */}
          <div className="grid-span-1">
            <label>Due Date</label>
            <input
              type="date"
              {...register("dueDate", { required: "Due date required" })}
              className={errors.dueDate ? "error-input" : ""}
            />
            <p className="error">{errors.dueDate?.message}</p>
          </div>

          {/* Estimated Hours */}
          <div className="grid-span-2">
            <label>Estimated Hours</label>
            <input
              type="text"
              placeholder="Enter estimated hours"
              {...register("projectHours", {
                pattern: {
                  value: /^[0-9]*$/,
                  message: "Must be a valid number",
                },
              })}
            />
            <p className="error">{errors.projectHours?.message}</p>
          </div>

          {/* Footer */}
          <div className="form-footer grid-span-2">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
