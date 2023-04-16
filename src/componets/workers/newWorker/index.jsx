import React from "react";
import { useState } from "react"
// import {Dropdown} from 'semantic-ui-react'
import Select, { components } from "react-select";

//import { FaRocketchat, FaExclamationTriangle, FaPlus, FaComment, FaRegTrashAlt, FaMapMarkerAlt } from "react-icons/fa"
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";
import ProfileOptionList from '../../optionListPicture'
// import axios from "axios";
import ApiServices from "../../help/APIService";
import { useNavigate } from "react-router";
// import ReactUIDropdown from "react-ui-dropdown";
// import { Title } from "@mui/icons-material";
//import ImageSelect from 'react-image-select';

const data1 = [
    {
        id:1,
        key: "avatar1",
        text:"avatar1",
        value:"avatar1",
        Image: {avatar:true, src:"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"}
    },
    {
        id:2,
        key: "avatar2",
        text:"avatar2",
        value:"avatar2",
        Image: {avatar:true, src:"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp"}
    },
    {
        id:3,
        key: "avatar3",
        text:"avatar3",
        value:"avatar3",
        Image: {avatar:true, src:"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"}
    }
]






function NewWorker({data, setData}) {
    const [Name, setName] = useState('')
    const [Id, setId] = useState(0)
    const [PhoneNumber, setphoneNumber] = useState('')
    // const [inspectorname, setinspectorname] = useState('')
    const [Class, setClass] = useState('')
    // const [selected, setSelected] = useState(0);
    // const [descriptionWork, setDescriptionWork] = useState('')
    // const [Tool, setTool] = useState('')
    const [img, setimg] = useState('https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp')
    
    const navigate = useNavigate()

    // const handleDropdownChange = (selectedItems) => {
    //   //  console.log(selectedItems);
    //   };


  const [checked, setChecked] = useState(false);

  const handleChangeCheckBox = () => {
    setChecked(!checked);
    console.log(checked)
  };

    //const [selectedCountry, setSelectedCountry] = useState(countries[0]);

    // const handleChange = (value) => {
    //   setSelectedCountry(value);
    // };

    // const SingleValue = ({ children, ...props }) => (
    //   <components.SingleValue {...props}>
    //     <img src={selectedCountry.icon} alt="s-logo" className="selected-logo" />
    //     {children}
    //   </components.SingleValue>
    // );










    const handleSubmit = (event)=>{

      ApiServices.newWorker(data)



        navigate('/workers')



  };

    return (

  
      <div className='container' dir="rtl">
        
        <div className='row'>
            <div className='col-12'>
              <h1>
                    עובד חדש
              </h1>
            </div>
          {/* <form> */}
            <div className='row'>
              <div className='col-12 mt-3'>
                <h5 className='bg-light p-1 px-3'>פרטי העובד:</h5>
              </div>
            </div>
            {/* <div className="row">
              <div className='col-12'> */}
                <div className='form-group'>
                  <label className='form-check-label'>שם העובד:</label>
                  <input type="text" className="form-control" value={Name} onChange={(e)=> {setName(e.target.value) 
                    setData({'name': e.target.value, 'Id':Id, 'PhoneNumber':PhoneNumber, 'class':Class, 'img':img, 'manager':checked})}} id="name" />
                {/* </div>
              
              </div> */}
                </div>
              <div className=''>
                <label className='form-check-label'>תעודת זהות:</label>
                <input type="text" className="form-control" value={Id} onChange={(e)=> {setId(e.target.value)
               setData({'name': Name, 'Id':e.target.value, 'PhoneNumber':PhoneNumber, 'class':Class, 'img':img, 'manager':checked})}} id="id" />

              </div>
            </div>
            <div className='form-group mt-3'>
              <label className='form-check-label'>מספר טלפון:</label>
              <input type="text" className="form-control" value={PhoneNumber} onChange={(e)=> {setphoneNumber(e.target.value)
              setData({'name': Name, 'Id':Id, 'PhoneNumber':e.target.value, 'class':Class, 'img':img, 'manager':checked})}} id="phoneNumber" />

            </div>
            <div className='form-group mt-3'>
              <label className='form-check-label'>מחלקה:</label>
              <input type="text" className="form-control" id="class" value={Class} onChange={(e)=> {setClass(e.target.value)
                setData({'name': Name, 'Id':Id, 'PhoneNumber':PhoneNumber, 'class':e.target.value, 'img':img, 'manager':checked})}}  />
            </div>
            <div>
              <label className='form-check-label'>מנהל:</label>

              <input
                type="checkbox"
                checked={checked}
                onChange={handleChangeCheckBox}
              />
            </div>
            <div className="">
                <ProfileOptionList img={img} setimg={setimg} />
            </div>
            <button className="btn btn-primary mt-2 col-3 t-center" onClick={handleSubmit}>צור עובד</button>
          {/* </form> */}
          
  
        </div>
  
      // </div>
    );
    }


export default NewWorker;