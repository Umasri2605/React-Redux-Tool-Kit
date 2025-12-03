import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { 
  useGetLeadDetailsByIdQuery, 
  useLazyGetAllLeadsQuery, 
  useLazyGetLeadDetailsByIdQuery, 
  useUpdateleadMutation 
} from '../../services/leadsApi';
import { useFormik } from 'formik';

function EditLead() {

  var { id } = useParams(); 

  var { isLoading, data } = useGetLeadDetailsByIdQuery(id);

  var [updateLeadFn] = useUpdateleadMutation();
  var [getAllLeadsFn] = useLazyGetAllLeadsQuery();
  var [getLeadDetailsFn] = useLazyGetLeadDetailsByIdQuery();

  var leadForm = useFormik({
    initialValues: {
      _id: "",
      name: "",
      email: "",
      phone: "",
      courseInterested: "",
      status: "New",
    },
    onSubmit: (values) => {
      updateLeadFn(values).then(() => {
        alert("Lead Updated");
        getAllLeadsFn();
      });
    },
  });

  useEffect(() => {
    getLeadDetailsFn(id).then(() => {
      leadForm.setValues({ ...data });
    });
  }, [data]);

  return (
    <div className="container mt-4">
      <div className="card shadow p-4">

        <h2 className="text-center mb-3">Edit Lead</h2>

        {isLoading && <div className="text-center fw-bold">Loading...</div>}

        {!isLoading && (
          <div className="alert alert-secondary small mb-4">
            <strong>Lead Data:</strong> {JSON.stringify(data)}
          </div>
        )}

        <form onSubmit={leadForm.handleSubmit}>

          <div className="mb-3">
            <label className="form-label fw-semibold">Name</label>
            <input
              type="text"
              className="form-control"
              {...leadForm.getFieldProps("name")}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control"
              {...leadForm.getFieldProps("email")}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Phone</label>
            <input
              type="text"
              className="form-control"
              {...leadForm.getFieldProps("phone")}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Course Interested</label>
            <input
              type="text"
              className="form-control"
              {...leadForm.getFieldProps("courseInterested")}
            />
          </div>

          <button className="btn btn-primary w-100 mt-2" type="submit">
            Update Lead
          </button>

        </form>

      </div>
    </div>
  );
}

export default EditLead;
