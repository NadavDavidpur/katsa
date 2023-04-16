import logo from './logo.svg';
import './App.css';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Newproject from './componets/Projects/newProject';
import {useState, useEffect} from 'react'
import Projects from './componets/Projects';
import Login from './componets/Login';
// import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Project from './componets/Projects/project';
import APIService from './componets/help/APIService';
import NewWorker from './componets/workers/newWorker';
import RiskInfo from './componets/Chat';
// import Chat from './componets/Chat';
import Workers from './componets/workers';

function App(){
  const [data, setData] = useState({})
//[{"id":1,"name":"fff"},{"id":2,"name":"kkkk"}]projects.filter(project1=> project1.id==window.location.pathname.split('/')[2])[0]
  const [projects, setProjects] = useState([])
  const [workers, setWorkers] = useState(null)
  const [risks, setRisks] = useState([{"id":1,"name":"fff"},{"id":2,"name":"kkkk"}])
  const [project, setProject] = useState(null)
  const [user, setUser] = useState({})
  const [userIn, setUserin] = useState(null)
  // const [banner, setBanner] = useState(false)

  const [comments, setComments] = useState(null)


  return(
    <div>
      {/* <Welcome /> */}
      {/* <Newproject data={data} setData={setData} /> */}
      {/* <Login /> */}
      <Router>
        <Routes>
            <Route path="/" element={<Login user={user} setUser={setUser} userIn={userIn} setUserin={setUserin} setProjects={setProjects} projects={projects} setRisks={setRisks} workers={workers} setWorkers={setWorkers} />} />
            
            <Route path="/newProject" element={<Newproject data={data} setData={setData} />} />
            {/* <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> */}
            <Route path="/projects" element={<Projects  projects={projects} setProjects={setProjects} setProject={setProject} project={project} user={user} setUser={setUser} />} />
            <Route path="/project/:projectid" element={<Project  project={project} setProject={setProject} risks={risks} setRisks={setRisks} setProjects={setProjects} user={user} />} />
            <Route path="/project/:projectid/Risk/:riskid" element={<RiskInfo comments={comments} setComments={setComments} user={user} setUser={setUser} project={project} setProject={setProject} />} />
            {/* <Route path="/chat" element={<Chat />} /> */}
            <Route path="/workers" element={<Workers workers={workers} setWorkers={setWorkers} user={user} setUser={setUser} />} />
            <Route path="/newWorker" element={<NewWorker data={data} setData={setData} />} />
        </Routes>
    </Router>

            
    </div>
  )
}



export default App;
