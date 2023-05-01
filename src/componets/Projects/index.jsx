
import {useEffect, useState} from 'react'
import { Link,Navigate, useNavigate } from 'react-router-dom';
import APIService from '../help/APIService';
import Navbar from '../Navbar';
 import { FaAngleDown, FaAngleUp, FaInfo, FaPlus } from "react-icons/fa";
 import './style.css';
 
function Projects({projects, setProjects, setProject, project,user,setUser}){
    // const [projects, setProject] = ([{"name":1},{"name":2}])
   // const projects = [{"name":1},{"name":2}]
    // useEffect(()=>{
    //     console.log(1)
    // },[])
//  useEffect(()=>{
//     window.localStorage.setItem('user',JSON.stringify(user))
//   })
    const [showInfo, setshowInfo] = useState(false) 
    const [Id, setId] = useState(false) 
    const hundleInfo = (id) =>{
       // console.log(showInfo)
        setshowInfo(true)
        setId(id)

    }
    const hundleClickDiv = (id) =>{
      //  console.log(id)
        setshowInfo(!showInfo)
        setId(id)
        //console.log(showInfo)
    }
    useEffect(()=>{
        // console.log(1)
        APIService.projects().then(res=>
        
            setProjects(res.data)
            
          )
       // console.log(JSON.parse(window.localStorage.getItem('workers')))
        setUser(JSON.parse(window.localStorage.getItem('user')))
        
         // APIService.userId().then(res=>{
        //     // setUser(res.data)
        //     console.log(res.data)
        // })
        //   console.log(projects)
      },[])

      const hundleCloseInfo = () =>{
        setshowInfo(false)
      }
    const hundleClick =(id)=>{
        //console.log(id)
       // window.localStorage.setItem('project',JSON.stringify(projects.filter(project1=> project1.id==id)[0]))
        // words.filter(word => word.id=== 1);
        setProject(projects.filter(project1=> project1.id==id)[0])
        //console.log(project)
        navigate('/project/'+id)
        // w3-button w2-xlarge w3-circle w3-teal
    }
    const navigate = useNavigate()
    return(
        <div dir='rtl'>
            {user.isActive==1 ? 
                <div>
                    <Navbar user={user}/>

                    <div className="workers-title">
                        <h1>פרוייקטים</h1>
                        <button className="mt-2 btn-circle" onClick={()=>{navigate('/newProject')}}><FaPlus className='text-center' /></button>
                    </div>
                    <div className="container" onBlur={()=>{setshowInfo(false)}}>

                    

                        {
                            (projects.filter(project=>project.inactive==1)).map((each,i)=>(
                                // <tr>
                                    //<div className="container">
                                        <div className='row mt-2 d-flex text-end text right'>
                                            <div className='col-1'>
                                            {showInfo && each.id==Id ?
                                                <button className='btn sticky-middle' onClick={hundleCloseInfo}>
                                                <FaAngleUp />
                                                </button>
                                                
                                            :  
                                                <button className='btn sticky-middle' onClick={()=>hundleInfo(each.id)}>
                                                    <FaAngleDown />
                                                </button>
                                            }
                                            
                                            </div>
                                            
                                            <div className='col-9' onClick={()=>{hundleClickDiv(each.id)}}>
                                                <p className='sticky-middle h3 mt-2'>{each.name}</p>
                                            </div>
                                            <div className='col-2'>
                                                <button value={each.id} className="btn sticky-middle" onClick={(e)=>hundleClick(each.id)}><FaInfo /></button>
                                        
                                            </div>
                                        

                                        {showInfo && each.id==Id ? 
                                                <Info project={each} />
                                            : <></>}
                                            <hr />
                                        </div>

                            ))
                            
                        }
            
                    </div>
            </div>
            :
            <div>
                <p>
                        העובד לא פעיל
                </p>    
                
            </div>}
        </div>
    )

    


}



const Info = ({project}) =>{
    return(
        <div className='container mt-3'>
            {/* <div className='row'>
            
                <p className='text-center'>פרטי פרוייקט</p>
            </div> */}
            <div className='row'>
                <div className='col-12 m'>
                    <p className="text-right text-end h5">קבלן: {project.contractorName}</p>
                </div>
           
                
            </div>
            <div className='row'>
            
                <div className='col-12 m'>
                    <p className="text-right text-end h5">פקח: {project.supervisorName}</p>
                </div>
            </div>
            <div className='row'>
            
                <div className='col-12 m'>
                    <p className="text-right text-end h5">מיקום: {project.location}</p>
                </div>
            </div>
            <div className='row'>
            
                <div className='col-12 m'>
                    <p className="text-right text-end h5">תיאור: {project.description}</p>
                </div>
            </div>
            <div className='row'>
            
                <div className='col-12 m'>
                    <p className="text-right text-end h5">כלים: {project.Tool}</p>
                </div>
            </div>
            
        </div>
    )
}

export default Projects;



// function App3(){
//     const [count, setCount] = useState(0);

    //No dependency to trigger in each page load
  
//     return (
//       <div className="app">
//         <div>Page View Count is:</div>
//         {count}
//       </div>
//     );
// }
// export default App3;