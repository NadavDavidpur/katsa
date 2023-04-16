import { useEffect,useState } from "react";
import APIService from '../../help/APIService';
import Risk from "../../ChosseRisk";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router";
//import Loading from "./Loading";
import Navbar from "../../Navbar/index";
import worker_icon from '../../pictures/worker-icon.jpg'

//import {FcHeadset} from "react-icons/fc" 
import { FaRocketchat, FaExclamationTriangle, FaPlus, FaComment, FaRegTrashAlt, FaMapMarkerAlt } from "react-icons/fa"
function Project({project, setProject, risks, setRisks, setProjects, user})
{
    const [showpopup, setshowpopup] = useState(false)
    const [risksList, setRisksList] = useState([])
    const [RisksProjects, setRisksProjects] =useState([])
    // localStorage.setItem('data', project)
    // const saveData =localStorage.getItem('data')
   
    

    // Cookies.set('data', JSON.stringify(project));
    // const savedData = Cookies.get('data');
    // useEffect(()=>{
    //     console.log(JSON.parse(savedData))  
    // })risk1.projectId console.log(risk1)
    
    // .filter(risk1=>{
    //             project.id==risk1.ProjectId
    //             })
    

    // useEffect(()=>{
    //     window.localStorage.setItem('my_data', JSON.stringify(project))
    // },[])

    //   useEffect(()=>{
    // // console.log(project)
    //     const data = window.localStorage.getItem('my_data')
    //     if(data !== null) setProject(JSON.parse(data))
    // },[])
    // useEffect(()=>{
    //     window.localStorage.setItem('my_data',JSON.stringify(project))
    // },[project])


    useEffect(()=>{
       
       
        APIService.projects().then(res=>{
            setProject((res.data).filter(project=>project.id==window.location.pathname.split('/')[2])[0])
            setProjects(res.data)
    
    })
       
       
       
       
        // console.log(project)
        // const data = window.localStorage.getItem('my_data')
        // if(data !== null) setProject(JSON.parse(data))
        // console.log(project)
        // console.log(1)
        // APIService.risks().then(res=>{
        //     setRisks(res.data)
        //     // console.log(res.data)
        // })
    //     .catch(err=>
    //    console.log(window.location.pathname.split('/')[2])
    //    APIService.projects().then(res=>
    //     setProject(res.data.filter(project1=> project1.id==window.location.pathname.split('/')[2]))
        
    //     )
    
        
        APIService.ProjectRisk().then(res=>{
            setRisksProjects(res.data)
            const riskl=[]
            for(var i=0; i<res.data.length; i++)
            {
                if(window.location.pathname.split('/')[2]==res.data[i].projectId && res.data[i].inactive==1){
                    riskl.push(res.data[i])
                }
            }
            setRisksList(riskl)




            // console.log(project.id)

        })
        .catch(err=>
            console.log(err))
        
           
        
    },[])





    

    // useEffect(() => {
    //     // Access count value from session storage
    //     var pageView = sessionStorage.getItem("pageView");
    //     if (pageView == null) {
    //       // Initialize page views count
    //       pageView = project;
    //     } else {
    //       // Increment count
    //       pageView = project;
    //     }
    //     // Update session storage
    //     sessionStorage.setItem("pageView", pageView);
    //     console.log(1)
    //     console.log(pageView)
        
    //   }, []);
      

    const hundleAdd = () =>{
            APIService.risks().then(res=>{
            setRisks(res.data)
            // console.log(res.data)
        })
        setshowpopup(!showpopup)
    }


    const hundleRemove = (each) =>{
       // console.log(each)  each.name
    //    console.log(each.id)
       APIService.DeleteRisk({"id":each.id})
       setRisksList(risksList.filter(risk => risk!=each))
    }
    const navigate = useNavigate()
    const hundleInfo = (each) =>{
        // console.log(risksList)
        // console.log(each)/project/'+project.id+
        window.localStorage.setItem('project',JSON.stringify(project))
        navigate("risk/"+each.id)
    }

    return(
        <div>
            {user.isActive==1 ? 
            <div>
                <Navbar user={user} />
                {project ?
                    <div className="container" dir="rtl">
                       
                        <div className="row mt-3">

                            <div className="col-6 h1 text-center">{project.name}</div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-3"><p  className="h5 text-end text-right">שם קבלן
                            <img src={worker_icon} width="25"/>
                            </p></div>
                            <div className="col-2">{project.contractorName}</div>
                        </div>
                        <div className="row mt-3">
                                <div className="col-3">
                                    <p  className="h5 text-end text-right">
                                        שם פקח
                                        <img src={worker_icon} width="25"/>
                                    </p>
                                </div>
                            <div className="col-2">{project.supervisorName}</div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-3"><p className="h5 text-end text-right">מיקום<FaMapMarkerAlt /></p></div>
                            <div className="col-2">{project.location}</div>
                        </div>

                        <div className="row mt-5">
                            <div className="col-12">
                                <h4 className="text-right text-end">סיכונים <FaExclamationTriangle />   <button className="btn btn-primary" onClick={hundleAdd}><FaPlus /></button></h4>
                                
                                {showpopup ? <Risk risks={risks}  setshowpopup={setshowpopup} setInputs={setRisksList} Inputs={risksList} setRisks={setRisks} projectId={window.location.pathname.split('/')[2]} RisksProjects={RisksProjects} /> :<></>}
                            </div>
                        </div>
                        {
                        risksList.length>0 && risksList!=null ? 
                            risksList.filter(res => project.id==res.projectId && res.inactive==1).map((each,index)=>(
                                <div className="row mt-2">
                                    <div className="col-3">
                                        <p className="text-end">
                                            {index+1}.{each.RiskName}
                                        </p>
                                        

                                    </div>
                                    <div className="col-1">
                                        <button onClick={()=>hundleRemove(risksList[index])} className="btn btn-xs text-right"><FaRegTrashAlt /></button>
                                    </div>
                                    <div className="col-1">
                                        <button className="btn" onClick={()=>hundleInfo(risksList[index])}><FaRocketchat /></button>
                                    </div>
                                </div>
                            ))
                            :<></>
                        }
                        
                    </div>:
                        <div className="text-end" dir="rtl">
                            אין פרוייקט ב   id הזה
                        </div>
                    }
            </div>
            :
            <div dir="rtl">
                <p>
                    העובד לא פעיל
                </p>
            </div>
            
            }
        </div>
    )
    // <Loading />
}
export default Project;