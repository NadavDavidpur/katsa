import { useEffect, useState } from 'react';
import { FaBeer,FaEllipsisV,FaPen,FaTrash, FaLocationArrow } from 'react-icons/fa'
import Popup from "reactjs-popup";
import APIService from '../../../help/APIService';
import Edit from '../../Edit';
import '../style.css'
function MessageMe({body,workerName,date, avatar, show, setshow, id, comments, i, commentsProjectRisk, setcommentsProjectRisk})
{
    const [messageBody, setMessageBody] = useState('')
   
//    useEffect(()=>{
//     // console.log(commentsProjectRisk[i].date,"---1")
//     console.log(date,"---2")
//    },[])
   

    
    const hundleEdit = (id,body) =>{
        // return (

            setshow(true)
            // console.log(comments[i].description)
            window.localStorage.setItem('Edit',JSON.stringify({'id':id, 'description':body}))
        //console.log(messageBody)
        // setId1(id)
        //onsole.log()
        // )
       

    }

    const hundleDelete = (id) =>{
            //console.log(id)
            

              setcommentsProjectRisk(commentsProjectRisk.filter(comment=> comment.id!=id))

            APIService.DeleteCommon({'id':id})
    }

    const editTimeOver = (date) =>{
        // console.log(date)
        if(date=="Invalid Date Invalid Date")
        {
            //console.log(date)
            date = dateNow()
        }
        let hour = date.split(' ')[1].split(':')[0];
       // console.log(hour)
        const d1 = new Date()
        let hour1 = d1.getHours();
       // console.log(d1.toLocaleDateString() + " " + d1.toLocaleTimeString())
//      date.toLocaleDateString() + " " + date.toLocaleTimeString();
        let date2 = d1.toLocaleDateString() + " " + d1.toLocaleTimeString()
        //let hour1 = (d1.toLocaled1String() + " " + d1.toLocaleTimeString()).split(' ')[1].split(':')[0];
      // console.log(hour1)
        let diff =  hour1-hour
    //     console.log(diff<1)
    //     console.log(diff==1) 
    //     console.log(parseInt(date2.split(' ')[1].split(':')[1])<=parseInt(date.split(' ')[1].split(':')[1]),"----",parseInt(date.split(' ')[1].split(':')[1]),"-----",parseInt(date2.split(' ')[1].split(':')[1]))
    //    console.log(((diff<1 ||  (diff==1 && parseInt(date2.split(' ')[1].split(':')[1])<parseInt(date.split(' ')[1].split(':')[1]))) && date2.split(' ')[0] == date.split(' ')[0]),"----",date,"------",date2,"-----",diff==0)
       // console.log(parseInt(date2.split(' ')[1].split(':')[1])<parseInt(date.split(' ')[1].split(':')[1]), date2.split(' ')[1].split(':')[1],date.split(' ')[1].split(':')[1])
        return (diff<1  || (diff==1 && parseInt(date2.split(' ')[1].split(':')[1])<=parseInt(date.split(' ')[1].split(':')[1]))) && date2.split(' ')[0] == date.split(' ')[0]
    }


    const dateNow = () =>{

        const d1 = new Date()
        return d1.toLocaleDateString() + " " + d1.toLocaleTimeString()
    }


    return(
        <div>
                <div className="direct-chat-info clearfix">
                    <span className="direct-chat-name text-right">{workerName}</span>
                   {date=="Invalid Date Invalid Date" ? <span className="direct-chat-timestamp text-left">{dateNow()}</span> : <span className="direct-chat-timestamp text-left">{date}</span>} 
                </div>
            <div className="d-flex flex-row justify-content-start mb-4">
           
                <img
                    src={avatar}
                    alt="avatar 1"
                    style={{ width: "45px", height: "100%" }}
                />
                <div
                    className="p-3 ms-3 position-relative"
                    style={{
                        borderRadius: "20px",
                        backgroundColor: "rgba(57, 192, 237,.2)",
                    }}
                    >
                    <p className="small mb-0 d-inline" >
                       {body}
                    </p>


                   { editTimeOver(date) ?

                    <Popup
                        trigger={<button className='btn absolute'><FaEllipsisV className="absolute d-inline" /></button>}
                        position="top center"
                        closeOnDocumentClick
                        on="hover"
                        // contentStyle={{ padding: "0px", border: "none" }}
                    >
                        <div className="menu">
                    
                            <FaPen className='menu-item' onClick={()=>{hundleEdit(id,body)}}/> 
                            <FaTrash className='menu-item' onClick={()=>{hundleDelete(id,body)}} />
                        </div>
                    </Popup>:<></>}
                  {show ?  <Edit body={messageBody} setMessageBody={setMessageBody} setshow={setshow} commentsProjectRisk={commentsProjectRisk} setcommentsProjectRisk={setcommentsProjectRisk} /> :<></>}
                    
            
                </div>
            </div>
        </div>
    )
}
export default MessageMe;