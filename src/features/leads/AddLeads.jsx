import { useFormik } from 'formik'
import React from 'react'
import {useAddNewLeadMutation} from "../../services/leadsApi"
function AddLeads() {
 var [addLeadFn]=useAddNewLeadMutation();
var leadForm=useFormik({
    initialValues:{
        "name":"",
        "email":"",
        "phone":"",
        "courseInterested":"",
        "status":"New",
    },
      onSubmit:(values)=>{
        addLeadFn(values)
        .then((res)=>{
          console.log(res);
        })
        .catch((err)=>console.log(err));

      
      }
})
  return (
    <div className="border border-primary m-4 p-4 border-1" >
      <h1>Add Leads Here</h1>
      <form onSubmit={leadForm.handleSubmit}>
        <input type="text" {...leadForm.getFieldProps("name")} placeholder='Enter Name'/>
         <br></br>
         <br></br>
         <input type="text" {...leadForm.getFieldProps("email")} placeholder='Enter E-mail'/>
         <br></br>
         <br></br>
         <input type="text" {...leadForm.getFieldProps("phone")} placeholder='Enter Mobile Number'/>
         <br></br>
         <br></br>
         <input type="text" {...leadForm.getFieldProps("courseInterested")} placeholder='CourseIntrested'/>
         <br></br>
         <br></br>
         <button className='btn btn-info' type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddLeads
