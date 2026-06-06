import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminHeader from "../../components/admin/AdminHeader";
import AdminSidebar from "../../components/admin/AdminSidebar";
import "./AddEmployee.css";

type Form = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: "Developer" | "Tester" | "Project Manager" | "Designer";
  department: "Engineering" | "QA" | "Product" | "Design";
  startDate: string; // yyyy-mm-dd
  password: string;
};

const defaultForm: Form = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  role: "Developer",
  department: "Engineering",
  startDate: "",
  password: "",
};

const AddEmployee: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<Form>(defaultForm);
  const [submitting, setSubmitting] = useState(false);

  const update = <K extends keyof Form>(key: K, value: Form[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const onCancel = () => navigate("/teams"); // or wherever list page lives

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      // TODO: replace with API call
      await new Promise((r) => setTimeout(r, 600));
      // Redirect back to Teams or Employees list
      navigate("/teams");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="ae-page">
      <AdminSidebar />
      <div className="ae-main">
        <AdminHeader />
        <div className="ae-content">
          <div className="ae-title">Add Employee</div>

          <div className="ae-card">
            <div className="ae-card-head">
              <div>
                <div className="ae-head-title">Employee Information</div>
                <div className="ae-head-sub">
                  Fill in the details of the new employee
                </div>
              </div>
            </div>

            <form className="ae-form" onSubmit={onSubmit}>
              <div className="ae-grid">
                <div className="ae-field">
                  <label className="ae-label">First Name</label>
                  <input
                    className="ae-input"
                    placeholder="Enter first name"
                    value={form.firstName}
                    onChange={(e) => update("firstName", e.target.value)}
                  />
                </div>

                <div className="ae-field">
                  <label className="ae-label">Last Name</label>
                  <input
                    className="ae-input"
                    placeholder="Enter last name"
                    value={form.lastName}
                    onChange={(e) => update("lastName", e.target.value)}
                  />
                </div>

                <div className="ae-field">
                  <label className="ae-label">Email Address</label>
                  <input
                    type="email"
                    className="ae-input"
                    placeholder="Enter email address"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                  />
                </div>

                <div className="ae-field">
                  <label className="ae-label">Phone Number</label>
                  <input
                    className="ae-input"
                    placeholder="Enter phone number"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                  />
                </div>

                <div className="ae-field">
                  <label className="ae-label">Role</label>
                  <select
                    className="ae-input"
                    value={form.role}
                    onChange={(e) =>
                      update("role", e.target.value as Form["role"])
                    }
                  >
                    <option>Developer</option>
                    <option>Tester</option>
                    <option>Project Manager</option>
                    <option>Designer</option>
                  </select>
                </div>

                <div className="ae-field">
                  <label className="ae-label">Department</label>
                  <select
                    className="ae-input"
                    value={form.department}
                    onChange={(e) =>
                      update("department", e.target.value as Form["department"])
                    }
                  >
                    <option>Engineering</option>
                    <option>QA</option>
                    <option>Product</option>
                    <option>Design</option>
                  </select>
                </div>

                <div className="ae-field">
                  <label className="ae-label">Start Date</label>
                  <input
                    type="date"
                    className="ae-input"
                    value={form.startDate}
                    onChange={(e) => update("startDate", e.target.value)}
                  />
                </div>

                <div className="ae-field">
                  <label className="ae-label">Password</label>
                  <input
                    type="password"
                    className="ae-input"
                    placeholder="Enter password"
                    value={form.password}
                    onChange={(e) => update("password", e.target.value)}
                  />
                </div>
              </div>

              <div className="ae-actions">
                <button
                  type="button"
                  className="ae-btn ae-btn-ghost"
                  onClick={onCancel}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="ae-btn ae-btn-primary"
                  disabled={submitting}
                >
                  {submitting ? "Adding..." : "Add Employee"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
