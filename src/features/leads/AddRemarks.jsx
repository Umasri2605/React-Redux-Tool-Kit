import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { 
  useGetLeadDetailsByIdQuery,
  useUpdateleadMutation,
  useLazyGetAllLeadsQuery,
  useLazyGetLeadDetailsByIdQuery 
} from '../../services/leadsApi';
import { useFormik } from 'formik';

function AddRemarks() {

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
      Remarks: "", 
    },
    onSubmit: (values) => {
      updateLeadFn(values).then(() => {
        alert("Lead Updated");
        getAllLeadsFn();
      });
    }
  });

  useEffect(() => {
    getLeadDetailsFn(id).then(() => {
      leadForm.setValues({ ...data });
    });
  }, [data]);

  return (
    <div className="container mt-4">
      <div className="card shadow p-4">
        <h2 className="text-center mb-3">Add Remarks</h2>

        {isLoading && <div className="text-center fw-bold">Loading...</div>}

        {!isLoading && (
          <div className="alert alert-secondary small">
            <strong>Lead Info:</strong> {JSON.stringify(data)}
          </div>
        )}

        <form onSubmit={leadForm.handleSubmit}>

          <div className="mb-3">
            <label className="form-label fw-semibold">Lead Status</label>
            <select
              className="form-select"
              {...leadForm.getFieldProps("status")}
            >
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Enrolled">Enrolled</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Remarks</label>
            <textarea
              className="form-control"
              rows="4"
              placeholder="Enter remarks..."
              {...leadForm.getFieldProps("Remarks")}
            ></textarea>
          </div>

          <button className="btn btn-primary w-100" type="submit">
            Submit
          </button>

        </form>
      </div>
    </div>
  );
}

export default AddRemarks;
