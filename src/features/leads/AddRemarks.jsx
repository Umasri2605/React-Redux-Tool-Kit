import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { useGetLeadDetailsByIdQuery,useUpdateleadMutation,useLazyGetAllLeadsQuery,useLazyGetLeadDetailsByIdQuery} from '../../services/leadsApi';
import { useFormik } from 'formik';
function AddRemarks() {
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
           "Remarks":"", 
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
       <div className="border border-primary m-3 p-3 border-1">
         <h1>AddRemarks Here</h1>
         {isLoading && <b>Loading...</b>}
         {!isLoading && JSON.stringify(data)}
         <form onSubmit={leadForm.handleSubmit}>
           <select {...leadForm.getFieldProps("status")}>
            <option value="New">New</option>
            <option value="Contacted">Contacted</option>
            <option value="Enrolled">Enrolled</option>
            <option value="Rejected">Rejected</option>
           </select>
            <br></br>
            <br></br>
            <textarea {...leadForm.getFieldProps("Remarks")}></textarea>
            <br></br>
            <br></br>
            <button className='btn btn-info' type="submit">Submit</button>
         </form>
       </div>
     )
   } 
  


export default AddRemarks
