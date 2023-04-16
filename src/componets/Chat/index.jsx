import React, { useEffect, useState } from "react";
import APIService from "../help/APIService";
import './style.css'
import Loading from "../Loading";
import MessageMe from "./message/meesage-me";
import MessageAnouther from "./message/message-anouther";
import Navbar from "../Navbar";
// import {FaBeer} from 'react-icons/fa';
import {FaEllipsisV, FaRocketchat } from "react-icons/fa"
// import DeleteIcon from '@mui/icons-material/Delete';
// import DeleteIcon from '@mui/icons-material/Delete';
// import IconButton from '@mui/material/IconButton';
// import Tooltip from '@mui/material/Tooltip';
import Edit from "./Edit";


function RiskInfo({comments, setComments, user,setUser, project, setProject})
{
    const [messageBody, setMessageBody] = useState('')
    const [chatInput,setChatInput] =useState()
    const [show, setshow] = useState(false)
    const [avatar, setAvatar] = useState('')
    const [commentsProjectRisk, setcommentsProjectRisk] = useState(null)
    // const date = new Date() commentsProjectRisk
    // const date = moment().format('h:mm:ss');  src="https://bootdey.com/img/Content/user_2.jpg" alt="Message User Image"
    // projectId=window.location.pathname.split('/')[2] && comment.riskId==window.location.pathname.split('/')[4]
    useEffect(()=>{
        APIService.comments().then(res=>{
            setcommentsProjectRisk((res.data.filter(comment=>comment.ProjectRiskId==window.location.pathname.split('/')[4] && comment.inactive===1)))
            setComments((res.data))
        })
       // console.log(JSON.parse(localStorage.getItem('key')) )

        setUser(JSON.parse(window.localStorage.getItem('user')))
        // setProject(JSON.parse(window.localStorage.getItem('project')))
        setAvatar(window.localStorage.getItem('avatar'))
        // setComments()
    },[])
    const hundlesubmit = ()=>{
        setChatInput('')
        const currentTime = new Date();
        //console.log(formatdate(currentTime,0))
        
        // const date4 = formatdate(currentTime)
        // console.log(date4)
        //currentTime.toLocaleDateString()+" "+currentTime.toLocaleTimeString()
       // console.log(comments[comments.length-1].id+1)
        
        APIService.newComment({'workerName':user.username, 'description':chatInput, 'ProjectRiskId':window.location.pathname.split('/')[4]})

        if(commentsProjectRisk.length!=[]){
            // console.log({'avatar':(window.localStorage.getItem('avatar')).split('"')[1]})
            // console.log([{"id":comments[comments.length-1].id+1 , date:(currentTime), 'workerName':user.username, 'description':chatInput, 'ProjectRiskId':window.location.pathname.split('/')[4], 'avatar':(window.localStorage.getItem('avatar'))}])    
           // console.log(formatdate(currentTime,0), currentTime)
            setcommentsProjectRisk(prew => [...prew, {"id":comments[comments.length-1].id+1 , date:formatdate(currentTime,0), 'workerName':user.username, 'description':chatInput, 'ProjectRiskId':window.location.pathname.split('/')[4], 'avatar':avatar.split('"')[1]}])
            //console.log((currentTime))prew => 

        }
        else{
            // console.log([{"id":comments[comments.length-1].id+1 , date:(currentTime), 'workerName':user.username, 'description':chatInput, 'ProjectRiskId':window.location.pathname.split('/')[4], 'avatar':avatar.split('"')[1]}])
           
            setcommentsProjectRisk([{"id":comments[comments.length-1].id+1 , date:formatdate(currentTime,0), 'workerName':user.username, 'description':chatInput, 'ProjectRiskId':window.location.pathname.split('/')[4], 'avatar':avatar.split('"')[1]}])
            //console.log(commentsProjectRisk[-1].date)
            // setComments([{"id":RisksProjects[RisksProjects.length-1].id+1 , "projectId":projectId, "RiskName":risk,"inactive": 1}])
        }
        
        
    }
    const formatdate = (date1,x)=>{
        //console.log(date1)
        //console.log(date1,"---s-", x)
        const date = new Date(date1);
        //console.log(date,' ---- ',date1)
        if(x==1){
           // console.log(1)
            date.setHours(date.getHours() - 3);
        }
        else{
            date.setHours(date.getHours()+3);
            //console.log(0)
        }
        
        const formattedDate = date.toLocaleDateString() + " " + date.toLocaleTimeString();

        return formattedDate
    }

    return(
        <div>

        {
        user.isActive==1 ?
            <div>
                <Navbar user={user} />
                <div className="box-body">
                
                    {
                    commentsProjectRisk != null ?
                        commentsProjectRisk.map((comment,i) => (     
                
                    <div>
                    {
                        comment.workerName==user.username ?
                            <MessageMe body={comment.description} workerName={comment.workerName} date={formatdate(comment.date,1)} avatar={comment.avatar} show={show} setshow={setshow} id={comment.id} comments={comments} i={i} commentsProjectRisk={commentsProjectRisk} setcommentsProjectRisk={setcommentsProjectRisk}  />
                        :
                            <MessageAnouther body={comment.description} workerName={comment.workerName} date={formatdate(comment.date,1)} avatar={comment.avatar} />
                    }
                    
                    </div>
                    ))
                    :
                        <Loading />
                    }
                    <div className="box-footer">

                        <div className="input-group">
                            
                            <textarea name="message" placeholder="Type Message ..."  type="textarea" value={chatInput} onChange={(e)=> {setChatInput(e.target.value)}} required className="form-control" id="chatInput" />
                            
                            <span className="input-group-btn">
                                <button type="submit" className="btn btn-primary btn-flat" onClick={hundlesubmit}> Send</button>
                            </span>
                        </div>

                    </div>
                
                </div>      
            </div>
        :
        <div>
            <p>העובד לא קיים יותר</p>
        </div>  
        
        }
            
        </div>
    )
}

export default RiskInfo;