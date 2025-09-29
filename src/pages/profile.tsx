import "../App.css";
import TextInput from "../components/ui/input";
import SelectInput from "../components/ui/selectinput";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/ui/sidebar";

type ProfileForm = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  contact: string;
  city: string;
  state: string;
  password: string;
};

export default function Profile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProfileForm>();

  const navigate = useNavigate();

  function onSubmit(data: ProfileForm) {
    console.log("Form Data:", data);
    alert("Form Submitted!");
    reset();
  }

  return (
    <div className="app">
      {/*  Reusable Sidebar */}
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
            <h2>Edit Profile</h2>
            <div className="avatar1">GM</div>
            <button className="logout-btn">Logout</button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* First Name */}
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

            {/* Last Name */}
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

            {/* Email */}
            <div className="form-group relative-input">
              <TextInput
                label="Email"
                placeholder="Enter email"
                className={errors.email ? "error-input" : ""}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>

            {/* Address */}
            <div className="form-group">
              <TextInput
                label="Address"
                placeholder="Enter address"
                className={errors.address ? "error-input" : ""}
                {...register("address", { required: "Address is required" })}
              />
              {errors.address && (
                <p className="error">{errors.address.message}</p>
              )}
            </div>

            {/* Contact */}
            <div className="form-group">
              <TextInput
                label="Contact Number"
                placeholder="Enter contact number"
                className={errors.contact ? "error-input" : ""}
                {...register("contact", {
                  required: "Contact is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Must be 10 digits",
                  },
                })}
              />
              {errors.contact && (
                <p className="error">{errors.contact.message}</p>
              )}
            </div>

            {/* City */}
            <div className="form-group">
              <SelectInput
                label="City"
                placeholder="Select city"
                options={["Mumbai", "Surat", "Chennai"]}
                className={errors.city ? "error-input" : ""}
                {...register("city", { required: "City is required" })}
              />
              {errors.city && <p className="error">{errors.city.message}</p>}
            </div>

            {/* State */}
            <div className="form-group">
              <SelectInput
                label="State"
                placeholder="Select state"
                options={["Maharashtra", "Gujarat", "Tamil Nadu"]}
                className={errors.state ? "error-input" : ""}
                {...register("state", { required: "State is required" })}
              />
              {errors.state && <p className="error">{errors.state.message}</p>}
            </div>

            {/* Password */}
            <div className="form-group relative-input">
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

            {/* Actions */}
            <div className="form-actions">
              <button
                type="button"
                className="cancel-btn"
                onClick={() => navigate("/")}
              >
                Cancel
              </button>
              <button type="submit" className="save-btn">
                Save
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
