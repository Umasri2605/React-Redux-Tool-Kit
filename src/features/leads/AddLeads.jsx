import { useFormik } from 'formik'
import React from 'react'
import { useAddNewLeadMutation } from "../../services/leadsApi"

function AddLeads() {

  var [addLeadFn] = useAddNewLeadMutation();

  var leadForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      courseInterested: "",
      status: "New",
    },
    onSubmit: (values) => {
      addLeadFn(values)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  });

  return (
    <div className="container mt-4">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Add Lead</h2>

        <form onSubmit={leadForm.handleSubmit}>

          <div className="mb-3">
            <label className="form-label fw-semibold">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              {...leadForm.getFieldProps("name")}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              {...leadForm.getFieldProps("email")}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Phone</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Mobile Number"
              {...leadForm.getFieldProps("phone")}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Course Interested</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Course Name"
              {...leadForm.getFieldProps("courseInterested")}
            />
          </div>

          <button className="btn btn-primary w-100" type="submit">
            Submit Lead
          </button>

        </form>
      </div>
    </div>
  );
}

export default AddLeads;

