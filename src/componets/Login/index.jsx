import { useEffect, useState } from "react";
import APIService from "../help/APIService";
import { useNavigate } from "react-router";

import './style.css';


function Login({user, setUser, userIn, setUserin, setProjects,projects,setRisks, workers, setWorkers}){
    const [username, setUserName] =useState('')
    const [id, setid] = useState('')
    

    useEffect(()=>{
      APIService.workers().then((res)=>{
        setWorkers(res.data)
      })
      
    },[])




    const navigate = useNavigate()
    const delay = ms => new Promise(
      resolve => setTimeout(resolve, ms)
    );

    const hundleSumbit = async () =>
    {
      await setUser({"username":username, "id":id})
      console.log("1")
      await delay(1000);
      console.log(2)
      
      APIService.risks().then(res=>{
        window.localStorage.setItem('risks',JSON.stringify(res.data))
        setRisks(res.data)
      })
      // await delay(1000);
      console.log(21)
      APIService.projects().then(res=>{
          // console.log(res.data)
          setProjects(res.data)
        })
      // await delay(1000);
      console.log(3)
      console.log(user,'--1')
      await APIService.login({"username":username, "id":id}).then(res=>{
        console.log(res.data,'--3')
        // await delay(1000);
        window.localStorage.setItem('user',JSON.stringify({"username":username, "id":id, "isManager":res.data.isManager, "isActive":res.data.isActive}))
        console.log(4)
        if (res.data.userIn=='False'){
          setUserin(false)
        }
        else{
          window.localStorage.setItem('avatar',JSON.stringify(res.data.avatar))
          setUserin(true)
          navigate('/Projects')
        }
        
        
      }).catch((err)=>{
        console.log(err)
      }
      
      )

    }
    const hundleChangeUserName = (event) =>{
      event.preventDefault()
      setUserName(event.target.value)
    }
    


    return(
        <div className="container login-page" dir="rtl">
          <div className="a">
           
              <div className="mb-4 text-center row my-auto mt-3">
                <div className="col-6 text-center">
                  <label>שם משתמש</label>
                </div>
                <div className="col-6">
                  <input type="text" id="form2Example1" placeholder="username" value={username} onChange={(e)=>{hundleChangeUserName(e)}} className="form-control" />
                  {/* setUser({"username":e.target.value, "id":id}) */}
                
                </div>
                
                
              </div>

            
              <div className="mb-4 text-center row my-auto mt-3 ">
                <div className="col-6 text-center">
                  <label className="">תעודת זהות</label>
                </div>
                <div className="col-6">
                  <input type="text" id="form2Example2" placeholder="id" value={id} onChange={(e)=>{{setid(e.target.value)} }} className="form-control" />
                  {/* setUser({"username":username, "id":e.target.value}) */}
                </div>
                  
              </div>
            

            {/* </div> */}
          

            <div className="row" >
              <div className="col-12 text-center">
                <button type="button" data-testid="login-btn" className="btn btn-primary btn-block mb-4" disabled={!username || !id} onClick={hundleSumbit}>התחבר</button>
              </div>
              {
              userIn==false ? 
                <div data-testid={"error1"}>
                  <span color="red"  className="cl-red">שם משתמש או התעודת זהות לא נכונה</span>
                </div> 
              :<></>}
              
            </div>
          </div>
        </div>
    );

}
export default Login