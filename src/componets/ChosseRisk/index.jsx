import CloseButton from 'react-bootstrap/CloseButton'
import { toast } from 'react-toastify';
import { useEffect, useState } from "react";
import OptionsList from "../help/option";
import NewRisk from '../newRisk';
import APIService from '../help/APIService';
//import Project from './Project';



function Risk({risks, setshowpopup,setInputs, Inputs, setRisks,projectId,RisksProjects})
{
    const bool=false
    const [risk, setRisk] = useState('')
    const [showpopupNewRisk, setshowpopupNewRisk] = useState(false)
    const hundleOpen = () =>{
        setshowpopupNewRisk(true)

    }
    const hundleAdd = () =>{
        
        for(var i=0; i<Inputs.length-1; i++){
            
            if(Inputs[i].RiskName===risk)
            {
               console.log(1)
                bool=true
            }
        } 
        if(Inputs.includes(risk) || risk=="ריק" || risk == "" && bool){
            
            toast.warn("הוספת סיכון זה/ זה ריק", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
                alert("הוספת סיכון זה/ זה ריק")

        }
        else{
            APIService.NewRiskProject({"projectId":projectId, "RiskName":risk})             
            if(Inputs.length!=0){    
                setInputs(prew => [...prew, {"id":Inputs[Inputs.length-1].id+1 , "projectId":projectId, "RiskName":risk,"inactive": 1}])
            }
            else{
                
                setInputs([{"id":RisksProjects[RisksProjects.length-1].id+1 , "projectId":projectId, "RiskName":risk,"inactive": 1}])
            }
   
            setshowpopup(false)
        }
    }
    // useEffect(()=>{
    //     console.log(Inputs[Inputs.length-1 ].id)
    // },[])
    return(
        <div className="">
            <div className="">
                <div className="container">
                    {/* <div className='row' dir='ltr'>
                        <div className='col-12 close'> popup-body1  opup-container1
                            <CloseButton className='' onClick={()=>setshowpopup(false)} />   
                        </div> 
                    </div> */}
                    {/* <div className="row">
                        <p className="">בחר סיכון</p>
                    </div> */}
                    <div className='row'>
                        <p className='text-end sticky-middle'> בחר סיכון</p>
                    </div>
                    <div className="row">
                        
                        <div className="col-6 mt-2">
                            <OptionsList optionsList={risks} InputValue={risk} setInputValue={setRisk} />
                        </div>
                        <div className="col-4">          
                            <button onClick={hundleAdd} className="btn btn-primary sticky-middle">הוסף</button>
                        </div>



                        {/* <div className="col-4"> ------------הוספת סיכון חדש לדי בי

                            <button onClick={hundleOpen} className="btn btn-primary">סיכון חדש</button>
                            {showpopupNewRisk ? <NewRisk setshowpopup={setshowpopupNewRisk} risks={risks} setRisks={setRisks} /> : <></> }

                         
                            
                        </div> */}
                    </div>
                    {/* <div className="row">
                        <button onClick={()=>setshowpopup(false)}>close</button>
                        <CloseButton  onClick={()=>setshowpopup(false)} />
                    </div> */}
                </div>
            </div>
        </div>
    )
    //לעשות אופשיין ליסט קומפוננטה ולעשות פונקציב שסוגרת םופאפ
}
export default  Risk;