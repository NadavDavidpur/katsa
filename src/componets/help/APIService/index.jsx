import axios from "axios";


const API_URL = "http://127.0.0.1:5000/" 

class ApiServices
{
    


    createProject(newproject){
       // console.log(1)
        return axios.post(API_URL+'newProject', newproject,  {'Access-Control-Allow-Origin': '*'});
    }
    projects(){
        // console.log(1)

         return axios.get(API_URL+'projects',  {'Access-Control-Allow-Origin': '*'});
     }
    login(user){
        return  axios.post(API_URL+'login', user,  {'Access-Control-Allow-Origin': '*'});
    } 
    risks(){
        // console.log(1)

         return axios.get(API_URL+'risks',  {'Access-Control-Allow-Origin': '*'});
     }
    //  project_risk
    ProjectRisk(){
        // console.log(1)

         return axios.get(API_URL+'ProjectRisk',  {'Access-Control-Allow-Origin': '*'});
    }
    DeleteRisk(RiskId){
        return axios.post(API_URL+"deleteRisk",RiskId, {'Access-Control-Allow-Origin': '*'})

    }
    NewRiskProject(newRiskProject){
        return axios.post(API_URL+"newRiskProject",newRiskProject, {'Access-Control-Allow-Origin': '*'})

    }
    NewRisk(newRisk){
        return axios.post(API_URL+"newRisk",newRisk, {'Access-Control-Allow-Origin': '*'})

    }
    comments(){
        // console.log(1)

         return axios.get(API_URL+'comments',  {'Access-Control-Allow-Origin': '*'});
    }

    newComment(newComment){
        // console.log(1)

         return axios.post(API_URL+'newComment',  newComment,{'Access-Control-Allow-Origin': '*'});
    }
    userId(){
        // console.log(1)

         return axios.get(API_URL+'userId',  {'Access-Control-Allow-Origin': '*'});
    }
    updateCommon(update){
        return axios.post(API_URL+'updateCommon',update,{'Access-Control-Allow-Origin': '*'})
    }
    DeleteCommon(delete1){
        return axios.post(API_URL+'DeleteCommon',delete1,{'Access-Control-Allow-Origin': '*'})
    }
    workers(){
        // console.log(1)

         return axios.get(API_URL+'workers',  {'Access-Control-Allow-Origin': '*'});
    }
    DeleteWorker(delete1){
        return axios.post(API_URL+'DeleteWorker',delete1,{'Access-Control-Allow-Origin': '*'})
    }
    newWorker(worker){
        return axios.post(API_URL+'newWorker',worker, {'Access-Control-Allow-Origin': '*'})
    }
}

export default new ApiServices()