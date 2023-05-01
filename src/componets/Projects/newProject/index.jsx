import React from "react";
import { useState } from "react"

// import axios from "axios";
import ApiServices from "../../help/APIService";
import { useNavigate } from "react-router";





function Newproject({data, setData, projects}) {
    const [projectname, setProjectname] = useState('')
    const [contractorname, setContractorname] = useState('')
    const [inspectorname, setInspectorname] = useState('')
    // const [inspectorname, setinspectorname] = useState('')
    const [location_project, setLocation_project] = useState('')
    const [description, setDescription] = useState('')
    const [Tool, setTool] = useState('')
    // const [riskManagement, setRiskManagement] = useState('')
    
    const navigate = useNavigate()



    const handleSubmit = (event)=>{
      event.preventDefault()
      setData({'projectname': projectname, 'contractorname':contractorname, 'inspectorname':inspectorname, 'location_project':location_project,'Tool':Tool, 'description':description})
      // console.log('submit')
      // console.log(data["projectname"])
      ApiServices.createProject(data).then(res => {
        
        console.log(res.data)
        console.log((projects[projects.length-1].id+1))
        navigate('/project/'+(projects[projects.length-1].id+1).toString())
       } )
        .catch(err=>{
          console.log(2)
          console.log(err)
        })
        
        // navigate('/projects/'+(projects[-1].id))
    // fetch('http://127.0.0.1:5000/api', {
    //   method: 'POST',
    //   headers: {

    //     'Content-type': 'application/json'
    //   },
    //   body: (data),
// JSON.stringify
    // })


  };


      // console.log([
      // projectname,
      // contractorname,
      // inspectorname,
      // location_project,
      // description,
      // Tool,
      // riskManagement
      
      // ])

    
    
    



    return (

  
      <div className='container' dir="rtl">
        
        <div className='row'>
            <div className='col-12'>
              <h1>
                יצירת פרוייקט
              </h1>
            </div>
          <form>
            <div className='row'>
              <div className='col-12 mt-3'>
                <h5 className='bg-light p-1 px-3'>פרטי הפרוייקט:</h5>
              </div>
              <div className='col-12'>
                <div className='form-group'>
                  <label className='form-check-label'>שם פרוייקט:</label>
                  <input type="text" className="form-control" value={projectname} onChange={(e)=> {setProjectname(e.target.value) 
                    setData({'projectname': e.target.value, 'contractorname':contractorname, 'inspectorname':inspectorname, 'location_project':location_project,'Tool':Tool, 'description':description})}} required id="projectname" />
                </div>
              
              </div>
              <div className=''>
                <label className='form-check-label'>שם קבלן:</label>
                <input type="text" value={contractorname} onChange={(e)=> {setContractorname(e.target.value)
                setData({'projectname': projectname, 'contractorname':e.target.value, 'inspectorname':inspectorname, 'location_project':location_project,'Tool':Tool, 'description':description})}} required className="form-control" id="Contractorname" />
              </div>
            </div>
            <div className='form-group mt-3'>
              <label htmlFor='inspectorname' className='form-check-label'>שם מפקח:</label>
              <input type="text" value={inspectorname} onChange={(e)=> {setInspectorname(e.target.value)
            setData({'projectname': projectname, 'contractorname':contractorname, 'inspectorname':e.target.value, 'location_project':location_project,'Tool':Tool, 'description':description})}} required className="form-control" id="inspectorname" />
            </div>
            <div className='form-group mt-3'>
              <label htmlFor='project_location' className='form-check-label'>מיקום פרוייקט: </label>
              <input type="text" className="form-control" id="location_project" value={location_project} onChange={(e)=> {setLocation_project(e.target.value)
              setData({'projectname': projectname, 'contractorname':contractorname, 'inspectorname':inspectorname, 'location_project':e.target.value,'Tool':Tool, 'description':description})}} required />
            </div>

              <div className='col-12 mt-3'>
                  <h5 className='bg-light p-1 px-3'>מפרט:</h5>
              </div>
              <div className='form-group mt-3'>
                <label htmlFor='description' className='form-check-label'>פירוט עבודה: </label>
                <textarea id='description' className='form-control' value={description} onChange={(e)=> {setDescription(e.target.value)
                setData({'projectname': projectname, 'contractorname':contractorname, 'inspectorname':inspectorname, 'location_project':location_project,'Tool':Tool, 'description':e.target.value})}} required />
              </div>
              <div className='form-group mt-3'>
                <label htmlFor='Tool' className='form-check-label'>כלים ומכונות: </label>
                <input type="text" className="form-control" id="Tool" value={Tool} onChange={(e)=> {setTool(e.target.value)
                setData({'projectname': projectname, 'contractorname':contractorname, 'inspectorname':inspectorname, 'location_project':location_project,'Tool':e.target.value, 'description':description}) }} required/>
              </div>
              {/* <div className='form-group mt-3'>
                <label htmlFor='Risk-Management' className='form-check-label'>ניהול סיכונים: </label>
                <textarea id='Risk-Management' className='form-control' value={riskManagement} onChange={(e)=> setRiskManagement(e.target.value)} required />
              </div> */}
            <button className="btn btn-primary mt-4" onClick={handleSubmit}>צור פרוייקט</button>
          </form>
          
  
        </div>
  
      </div>
    );
    }


export default Newproject;