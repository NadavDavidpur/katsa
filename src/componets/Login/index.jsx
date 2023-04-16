import { useEffect, useState } from "react";
import APIService from "../help/APIService";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";
import './style.css';


function Login({user, setUser, userIn, setUserin, setProjects,projects,setRisks, workers, setWorkers}){
    const [username, setUserName] =useState('')
    const [id, setid] = useState('')
    const [cookies, setCookie] = useCookies(['name'])
    const navigate = useNavigate()


    const hundleSumbit = () =>
    {
      // console.log("Wwww")
      setUser({"username":username, "id":id})
   
      APIService.projects().then(res=>{
          // console.log(res.data)
          setProjects(res.data)
        })
      APIService.login(user).then(res=>{
        console.log(res.data,'--1')
        window.localStorage.setItem('user',JSON.stringify({"username":username, "id":id, "isManager":res.data.isManager, "isActive":res.data.isActive}))
        if (res.data.userIn=='False'){
          setUserin(false)
        }
        else{
          window.localStorage.setItem('avatar',JSON.stringify(res.data.avatar))
          setUserin(true)
          navigate('/Projects')
        }
        
        
      })

    }


    return(
        <div className="container login-page" dir="rtl">
          <div className="a">
           
              <div className="mb-4 text-center row my-auto mt-3">
                <div className="col-6 text-center">
                  <label>שם משתמש</label>
                </div>
                <div className="col-6">
                  <input type="text" id="form2Example1" value={username} onChange={(e)=>{{setUserName(e.target.value)}   setUser({"username":e.target.value, "id":id})}} className="form-control" />
                </div>
                
                
              </div>

            
              <div className="mb-4 text-center row my-auto mt-3 ">
                <div className="col-6 text-center">
                  <label className="">תעודת זהות</label>
                </div>
                <div className="col-6">
                  <input type="text" id="form2Example2" value={id} onChange={(e)=>{{setid(e.target.value)} setUser({"username":username, "id":e.target.value})}} className="form-control" />
                </div>
                  
              </div>
            

            {/* </div> */}
          

            <div className="row">
              <div className="col-12 text-center">
                <button type="button" className="btn btn-primary btn-block mb-4" onClick={hundleSumbit}>התחבר</button>
              </div>
              {
              userIn==false ? 
                <div>
                  <p color="red">שם משתמש או התעודת זהות לא נכונה</p>
                </div> 
              :<></>}
              
            </div>
          </div>
        </div>
    );

}
export default Login