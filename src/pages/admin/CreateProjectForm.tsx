// src/pages/admin/CreateProjectForm.tsx
import React, { useRef, useState } from "react";

type TeamMember = { id: number; name: string };

const mockMembers: TeamMember[] = [
  { id: 1, name: "Sarah Jonson" },
  { id: 2, name: "Sarth Jonson" },
  { id: 3, name: "Sarah Jonson" },
  { id: 4, name: "Sarah Jonson" }
];

type Props = {
  onCancel: () => void;
  onCreate: (data: {
    name: string;
    code: string;
    leader: string;
    status: string;
    start: string; // yyyy-mm-dd
    due: string;   // yyyy-mm-dd
    description: string;
    members: number[];
  }) => void;
};

const CreateProjectForm: React.FC<Props> = ({ onCancel, onCreate }) => {
  const [form, setForm] = useState({
    name: "",
    code: "",
    leader: "",
    status: "Planned",
    start: "",
    due: "",
    description: "",
    members: [] as number[]
  });

  const startRef = useRef<HTMLInputElement>(null);
  const dueRef = useRef<HTMLInputElement>(null);

  const showPicker = (ref: React.RefObject<HTMLInputElement>) => {
    const el = ref.current;
    if (!el) return;
    if (typeof el.showPicker === "function") el.showPicker();
    else el.focus();
  };

  const update = (k: string, v: any) => setForm(prev => ({ ...prev, [k]: v }));
  const toggleMember = (id: number) =>
    setForm(f => ({
      ...f,
      members: f.members.includes(id) ? f.members.filter(x => x !== id) : [...f.members, id]
    }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate(form);
    setForm({ name: "", code: "", leader: "", status: "Planned", start: "", due: "", description: "", members: [] });
  };

  return (
    <form className="cp-form" onSubmit={submit}>
      <div className="cp-card">
        <div className="cp-card-head">
          <div>
            <div className="cp-title">Project Information</div>
            <div className="cp-sub">Fill in the details for the new project</div>
          </div>
        </div>

        <div className="cp-grid">
          <div className="cp-field">
            <label>Project Name</label>
            <input type="text" placeholder="Enter project name" value={form.name} onChange={e => update("name", e.target.value)} required />
          </div>

          <div className="cp-field">
            <label>Project Code</label>
            <input type="text" placeholder="Enter project code" value={form.code} onChange={e => update("code", e.target.value)} />
          </div>

          <div className="cp-field">
            <label>Project Leader</label>
            <select value={form.leader} onChange={e => update("leader", e.target.value)}>
              <option value="">Select project leader</option>
              <option value="User 1">User 1</option>
              <option value="User 2">User 2</option>
              <option value="User 3">User 3</option>
            </select>
          </div>

          <div className="cp-field">
            <label>Project Status</label>
            <select value={form.status} onChange={e => update("status", e.target.value)}>
              <option>Planned</option>
              <option>Active</option>
              <option>Paused</option>
              <option>Completed</option>
            </select>
          </div>

          {/* Start Date with picker on focus/click */}
          <div className="cp-field">
            <label>Start Date</label>
            <div className="date-input-wrap">
              <input
                ref={startRef}
                type="date"
                value={form.start}
                onChange={e => update("start", e.target.value)}
                onFocus={() => showPicker(startRef)}   /* open on focus if supported */
              />
              <button
                type="button"
                className="date-icon-btn"
                aria-label="Pick start date"
                onClick={() => showPicker(startRef)}
              ></button>
            </div>
          </div>

          {/* Due Date with picker on focus/click */}
          <div className="cp-field">
            <label>Due Date</label>
            <div className="date-input-wrap">
              <input
                ref={dueRef}
                type="date"
                value={form.due}
                onChange={e => update("due", e.target.value)}
                onFocus={() => showPicker(dueRef)}
              />
              <button
                type="button"
                className="date-icon-btn"
                aria-label="Pick due date"
                onClick={() => showPicker(dueRef)}
              >📅</button>
            </div>
          </div>

          <div className="cp-field cp-col-2">
            <label>Description</label>
            <textarea rows={4} placeholder="Enter task description" value={form.description} onChange={e => update("description", e.target.value)} />
          </div>
        </div>

        <div className="cp-members">
          <div className="cp-members-title">Team Members</div>
          <div className="cp-members-grid">
            {mockMembers.map(m => (
              <label key={m.id} className="cp-checkbox">
                <input type="checkbox" checked={form.members.includes(m.id)} onChange={() => toggleMember(m.id)} />
                <span>{m.name}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="cp-actions">
          <button type="button" className="btn-outline" onClick={onCancel}>Cancel</button>
          <button type="submit" className="btn-primary">Create Project</button>
        </div>
      </div>
    </form>
  );
};

export default CreateProjectForm;
