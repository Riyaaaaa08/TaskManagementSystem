import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

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

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ProfileForm>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      contact: "",
      city: "",
      state: "",
      password: "",
    },
  });

  const onSubmit = (data: ProfileForm) => {
    // Replace with API integration later
    console.log("Profile submit:", data);
    alert("Profile saved");
    reset(data);
  };

  return (
    <div className="container py-3" style={{ maxWidth: 980 }}>
      <div className="bg-white rounded shadow-sm p-3">
        <div className="d-flex align-items-center justify-content-between mb-2">
          <h5 className="m-0">Edit Profile</h5>
          <div className="d-flex align-items-center gap-2">
            <div
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: 36,
                height: 36,
                background: "#eee",
                fontWeight: 700,
              }}
              aria-hidden="true"
            >
              RP
            </div>
            <button
              className="btn btn-sm btn-primary"
              onClick={() => navigate("/login")}
            >
              Logout
            </button>
          </div>
        </div>

        <hr className="my-3" />

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">First Name</label>
              <input
                className={`form-control ${
                  errors.firstName ? "is-invalid" : ""
                }`}
                placeholder="Enter first name"
                {...register("firstName", {
                  required: "First name is required",
                })}
              />
              {errors.firstName && (
                <div className="invalid-feedback">
                  {errors.firstName.message}
                </div>
              )}
            </div>

            <div className="col-md-6">
              <label className="form-label">Last Name</label>
              <input
                className={`form-control ${
                  errors.lastName ? "is-invalid" : ""
                }`}
                placeholder="Enter last name"
                {...register("lastName", { required: "Last name is required" })}
              />
              {errors.lastName && (
                <div className="invalid-feedback">
                  {errors.lastName.message}
                </div>
              )}
            </div>

            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                placeholder="Enter email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email.message}</div>
              )}
            </div>

            <div className="col-md-6">
              <label className="form-label">Contact Number</label>
              <input
                className={`form-control ${errors.contact ? "is-invalid" : ""}`}
                placeholder="Enter contact number"
                {...register("contact", {
                  required: "Contact is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Must be 10 digits",
                  },
                })}
              />
              {errors.contact && (
                <div className="invalid-feedback">{errors.contact.message}</div>
              )}
            </div>

            <div className="col-12">
              <label className="form-label">Address</label>
              <input
                className={`form-control ${errors.address ? "is-invalid" : ""}`}
                placeholder="Enter address"
                {...register("address", { required: "Address is required" })}
              />
              {errors.address && (
                <div className="invalid-feedback">{errors.address.message}</div>
              )}
            </div>

            <div className="col-md-6">
              <label className="form-label">City</label>
              <select
                className={`form-select ${errors.city ? "is-invalid" : ""}`}
                {...register("city", { required: "City is required" })}
              >
                <option value="">Select city</option>
                <option>Mumbai</option>
                <option>Surat</option>
                <option>Chennai</option>
              </select>
              {errors.city && (
                <div className="invalid-feedback">{errors.city.message}</div>
              )}
            </div>

            <div className="col-md-6">
              <label className="form-label">State</label>
              <select
                className={`form-select ${errors.state ? "is-invalid" : ""}`}
                {...register("state", { required: "State is required" })}
              >
                <option value="">Select state</option>
                <option>Maharashtra</option>
                <option>Gujarat</option>
                <option>Tamil Nadu</option>
              </select>
              {errors.state && (
                <div className="invalid-feedback">{errors.state.message}</div>
              )}
            </div>

            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input
                type="password"
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
                placeholder="Enter password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Minimum 6 characters" },
                })}
              />
              {errors.password && (
                <div className="invalid-feedback">
                  {errors.password.message}
                </div>
              )}
            </div>
          </div>

          <div className="d-flex justify-content-end gap-2 mt-3">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => navigate("/tester/dashboard")}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
