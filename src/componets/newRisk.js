import { useState } from "react"
import CloseButton from 'react-bootstrap/CloseButton'
import APIService from "./help/APIService"



function NewRisk({setshowpopup, risks, setRisks, projectId})
{
    const [newRisky, setNewRisky] = useState('')
    const hundleAdd =()=>{
        if(newRisky!='')
        {
            console.log(risks.find(risk => risk.name==newRisky))
            // console.log(risks[risks.length - 1].id)
            setRisks(prew => [...prew, {'id':risks[risks.length - 1].id+1, 'name':newRisky}])
            // setRisks(prew => [...prew, {"id":risks[risks.length - 1].id+1, "name":newRisky}])
            APIService.NewRisk({"RiskName":newRisky})
            setshowpopup(false)
        }
        else{
            alert("הוספת סיכון זה/ זה ריק")
        }
}
    return(
        <div className="popup-container1">
            <div className="popup-body1">
                <div className="container">
                    <div className='row' dir='ltr'>
                         <div className='col-12 close'>
                            {/* <p>iii</p> */}
                            {/* <button>x</button> */}
                            <CloseButton className=''  variant="red" onClick={()=>setshowpopup(false)} />   
                            
                        </div>  
                    </div> 
                    <div className="row">
                        <h3>סיכון חדש</h3>
                    </div>
                    <div className="row">
                        <div className="col-10">
                            <label>שם הסיכון:</label>
                            <input 
                                type="text"
                                onChange={(e)=>setNewRisky(e.target.value)}
                                value={newRisky}
                                />

                        </div>
                        <div className="col-2">
                            <button onClick={hundleAdd} className="btn btn-primary">הוסף</button>
                        </div>
                    </div>
                {/* <div className="row">
                    <button onClick={()=>setshowpopup(false)}>close</button>
                    <CloseButton  onClick={()=>setshowpopup(false)} />
                </div> */}
                </div>
            </div>
        </div>
    )
}
export default NewRisk;