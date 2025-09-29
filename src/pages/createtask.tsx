// src/pages/CreateTask.tsx
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../App.css";
import TextInput from "../components/ui/input";
import SelectInput from "../components/ui/selectinput";
import DatePicker from "../components/ui/datepicker";

type TaskForm = {
  projectName: string; // Task Title
  description: string;
  projectCode: string; // Project
  teamMembers: string[]; // Assigned to
  projectStatus: string; // Priority
  projectLeader: string; // Status
  startDate: string;
  dueDate: string;
  projectHours?: string; // Estimated Hours
};

export default function CreateTask() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<TaskForm>();
  const navigate = useNavigate();

  const onSubmit = (data: TaskForm) => {
    console.log("Task Data:", data);
    alert("Task Created!");
    reset();
    navigate("/projects");
  };

  return (
    <div className="create-shell">
      {/* Top header bar */}
      <header className="create-header">
        <h2>Create Task</h2>
        <div className="header-right">
          <span className="notif-dot" />
          <div className="avatar">RP</div>
          <button className="btn-primary" onClick={() => navigate("/")}>
            Logout
          </button>
        </div>
      </header>

      {/* Main container */}
      <main className="create-main">
        <section className="task-panel">
          <div className="task-panel-head">
            <div>
              <h3>Task Details</h3>
              <p className="muted">Fill in the details of the new task</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="grid-form"
          >
            {/* Task Title */}
            <div className="grid-span-2">
              <TextInput
                label="Task Title"
                placeholder="Enter task name"
                className={errors.projectName ? "error-input" : ""}
                {...register("projectName", {
                  required: "Task Title is required",
                })}
              />
              <p className="error">{errors.projectName?.message}</p>
            </div>

            {/* Description */}
            <div className="grid-span-2">
              <label>Description</label>
              <textarea
                placeholder="Enter task Description"
                className={errors.description ? "error-input" : ""}
                {...register("description", {
                  required: "Description is required",
                })}
              />
              <p className="error">{errors.description?.message}</p>
            </div>

            {/* Project */}
            <div className="grid-span-1">
              <SelectInput
                label="Project"
                placeholder="Select project"
                options={[
                  "E‑commerce Platform",
                  "Mobile App",
                  "Security Suite",
                ]}
                {...register("projectCode", {
                  required: "Project is required",
                })}
              />
              <p className="error">{errors.projectCode?.message}</p>
            </div>

            {/* Assigned to */}
            <div className="grid-span-1">
              <SelectInput
                label="Assigned to"
                placeholder="Select team members"
                options={[
                  "Gauri More",
                  "Riya Panchal",
                  "John Smith",
                  "Emma Brown",
                ]}
                {...register("teamMembers", {
                  required: "At least one team member must be selected",
                })}
              />
              <p className="error">
                {errors.teamMembers?.message as unknown as string}
              </p>
            </div>

            {/* Priority */}
            <div className="grid-span-1">
              <SelectInput
                label="Priority"
                placeholder="Low"
                options={["Low", "Medium", "High"]}
                {...register("projectStatus", {
                  required: "Priority is required",
                })}
              />
              <p className="error">{errors.projectStatus?.message}</p>
            </div>

            {/* Status */}
            <div className="grid-span-1">
              <SelectInput
                label="Status"
                placeholder="To Do"
                options={["To Do", "In Progress", "Completed"]}
                {...register("projectLeader", {
                  required: "Status is required",
                })}
              />
              <p className="error">{errors.projectLeader?.message}</p>
            </div>

            {/* Start Date */}
            <div className="grid-span-1">
              <Controller
                name="startDate"
                control={control}
                rules={{ required: "Start date is required" }}
                render={({ field }) => (
                  <DatePicker
                    label="Start Date"
                    value={field.value}
                    onChange={field.onChange}
                    className={errors.startDate ? "error-input" : ""}
                  />
                )}
              />
              <p className="error">{errors.startDate?.message}</p>
            </div>

            {/* Due Date */}
            <div className="grid-span-1">
              <label>Due Date</label>
              <input
                type="date"
                className={errors.dueDate ? "error-input" : ""}
                {...register("dueDate", { required: "Due date is required" })}
              />
              <p className="error">{errors.dueDate?.message}</p>
            </div>

            {/* Estimated Hours */}
            <div className="grid-span-2">
              <TextInput
                label="Estimated Hours"
                placeholder="Enter estimated hours"
                className={errors.projectHours ? "error-input" : ""}
                {...register("projectHours", {
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "Estimated hours must be a number",
                  },
                })}
              />
              <p className="error">{errors.projectHours?.message}</p>
            </div>

            {/* Footer actions */}
            <div className="form-footer grid-span-2">
              <button
                type="button"
                className="btn-secondary"
                onClick={() => navigate(-1)}
              >
                Cancel
              </button>
              <button type="submit" className="btn-primary">
                Create Task
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
