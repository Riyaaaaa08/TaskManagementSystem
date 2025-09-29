import "../App.css";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import TextInput from "../components/ui/input";
import SelectInput from "../components/ui/selectinput";
import Sidebar from "../components/ui/sidebar";
import DatePicker from "../components/ui/datepicker";

type EmployeeForm = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  department: string;
  startDate: string;
  password: string;
};

export default function AddEmployee() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<EmployeeForm>();
  const navigate = useNavigate();

  const onSubmit = (data: EmployeeForm) => {
    console.log("Employee Data:", data);
    alert("Employee Added!");
    reset();
  };

  return (
    <div className="app">
      {/*  Sidebar Component */}
      <Sidebar
        navigate={navigate}
        userName="Riya Panchal"
        userRole="Administrator"
        userInitials="RP"
      />

      {/* Main Content */}
      <main className="main-content">
        <div className="main-card">
          <div className="main-header">
            <h2>Add Employee</h2>
            <button className="logout-btn">Logout</button>
          </div>

          <div className="section-title">
            <h3>Employee Information</h3>
            <p>Fill in the details of the new employee</p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="create-form"
          >
            {/* First + Last Name */}
            <div className="form-row">
              <div className="form-group">
                <TextInput
                  label="First Name"
                  placeholder="Enter first name"
                  className={errors.firstName ? "error-input" : ""}
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                />
                {errors.firstName && (
                  <p className="error">{errors.firstName.message}</p>
                )}
              </div>
              <div className="form-group">
                <TextInput
                  label="Last Name"
                  placeholder="Enter last name"
                  className={errors.lastName ? "error-input" : ""}
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                />
                {errors.lastName && (
                  <p className="error">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            {/* Email + Phone */}
            <div className="form-row">
              <div className="form-group">
                <TextInput
                  label="Email Address"
                  placeholder="Enter email address"
                  className={errors.email ? "error-input" : ""}
                  {...register("email", {
                    required: "Email is required",
                  })}
                />
                {errors.email && (
                  <p className="error">{errors.email.message}</p>
                )}
              </div>
              <div className="form-group">
                <TextInput
                  label="Phone Number"
                  placeholder="Enter phone number"
                  className={errors.phone ? "error-input" : ""}
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                />
                {errors.phone && (
                  <p className="error">{errors.phone.message}</p>
                )}
              </div>
            </div>

            {/* Role + Department */}
            <div className="form-row">
              <div className="form-group">
                <SelectInput
                  label="Role"
                  placeholder="Select Role"
                  options={["Developer", "Tester", "Leader", "Admin"]}
                  className={errors.role ? "error-input" : ""}
                  {...register("role", { required: "Role is required" })}
                />
                {errors.role && <p className="error">{errors.role.message}</p>}
              </div>
              <div className="form-group">
                <SelectInput
                  label="Department"
                  placeholder="Select Department"
                  options={["Engineering", "QA", "Design", "HR"]}
                  className={errors.department ? "error-input" : ""}
                  {...register("department", {
                    required: "Department is required",
                  })}
                />
                {errors.department && (
                  <p className="error">{errors.department.message}</p>
                )}
              </div>
            </div>

            {/* Start Date + Password */}
            <div className="form-row flex flex-wrap gap-4">
              <div className="form-group flex flex-col w-full">
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
                {errors.startDate && (
                  <p className="error">{errors.startDate.message}</p>
                )}
              </div>
              <div className="form-group">
                <TextInput
                  label="Password"
                  placeholder="Enter password"
                  isPassword
                  className={errors.password ? "error-input" : ""}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />
                {errors.password && (
                  <p className="error">{errors.password.message}</p>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="form-actions">
              <button type="button" className="cancel-btn">
                Cancel
              </button>
              <button type="submit" className="save-btn">
                Add Employee
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
