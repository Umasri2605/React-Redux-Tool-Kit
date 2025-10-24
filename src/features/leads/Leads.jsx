import React from 'react'
import {Link} from "react-router-dom"
import { useDeleteLeadMutation, useGetAllLeadsQuery, useLazyGetAllLeadsQuery } from '../../services/leadsApi'
function Leads() {
 var{isLoading,data}=useGetAllLeadsQuery(); 
 var [deleteLeadFn]=useDeleteLeadMutation();
 var [getAllLeadsFn]=useLazyGetAllLeadsQuery();
 function deleteLead(id){
  deleteLeadFn(id).then((res)=>{
    console.log(res);
    alert("Lead Deleted Successfully")
  getAllLeadsFn();
    alert("Something Went Wrong"+JSON.stringify(err));

  })
 }
  return (
    <div className='border border-1 m-3 p-3 border-primary'>
      <div className='d-flex justify-content-between align-items-center'>
      <h1>Leads Components </h1> 
      <Link className='btn btn-success' to="/addLead"><i class="bi bi-plus-circle"></i>Add Leads</Link>
      </div>
      
       {isLoading && <b>Loading.....</b>}
      <table className='table table-stripped table-bordered'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Course</th>
                <th>Status</th>
                <th>Time</th>
                <th>Options</th>
            </tr>
        </thead>
        <tbody>
            {!isLoading && data?.map((lead)=>{
                return (
                    <tr>
                        <td>{lead.name}</td>
                        <td>{lead.email}</td>
                        <td>{lead.phone}</td>
                        <td>{lead.courseInterested}</td>
                        <td>
                          {lead.status}
                          <Link className='btn btn-warning mx-4' to={`/addRemark/${lead['_id']}`}>Remarks</Link>
                          </td>
                        <td>{lead.createdAt}</td>
                        <td>
                          <Link className='btn btn-info me-4' to={`/editLead/${lead["_id"]}`}>Edit</Link>
                          <button className='btn btn-danger' onClick={()=>{deleteLead(lead['_id']);}}>Delete</button>
                        </td>
                    </tr>
                )
            })}
        </tbody>
      </table>
    
    </div>
  )
}

export default Leads
