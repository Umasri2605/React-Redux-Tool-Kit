import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useGetLeadDetailsByIdQuery, useLazyGetAllLeadsQuery, useLazyGetLeadDetailsByIdQuery, useUpdateleadMutation } from '../../services/leadsApi';
import { useFormik } from 'formik';
function EditLead() {
 var { id }=useParams(); 
 var { isLoading,data }=useGetLeadDetailsByIdQuery(id);
var [updateLeadFn]=useUpdateleadMutation();
var [getAllLeadsFn]=useLazyGetAllLeadsQuery();
var  [getLeadDetailsFn]=useLazyGetLeadDetailsByIdQuery();
 var leadForm=useFormik({
    initialValues:{
        _id:"",
        "name":"",
        "email":"",
        "phone":"",
        "courseInterested":"",
        "status":"New",
    },
      onSubmit:(values)=>{
        updateLeadFn(values).then((res)=>{
            alert("Lead Updated")
            getAllLeadsFn();
        
        });
      },
        });
        useEffect(()=>{
        getLeadDetailsFn(id).then(()=>{
          leadForm.setValues({...data});
        })
       },[data]);

  return (
    <div className="border border-primary m-4 p-4 border-1">
      <h1>Edit Lead Here</h1>
      {isLoading && <b>Loading...</b>}
      {!isLoading && JSON.stringify(data)}
      <form onSubmit={leadForm.handleSubmit}>
        <input type="text" {...leadForm.getFieldProps("name")}/>
         <br></br>
         <br></br>
         <input type="text" {...leadForm.getFieldProps("email")}/>
         <br></br>
         <br></br>
         <input type="text" {...leadForm.getFieldProps("phone")}/>
         <br></br>
         <br></br>
         <input type="text" {...leadForm.getFieldProps("courseInterested")}/>
         <br></br>
         <br></br>
         <button className='btn btn-info' type="submit">Update Lead</button>
      </form>
    </div>
  )
}

export default EditLead
