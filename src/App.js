import logo from './logo.svg';
import './App.css';
// import Login from './login';
import Newproject from './componets/newproject';








function App() {
  return (
    <div className='body-l'>
      {/* <form>
        <div className='form-group'>
          <label for="nameproject">name project</label>
          <input type='text' id='name_project' className='form-control' />  
          
        </div>  
        
      </form>                     */}

        <Newproject />
        <div className='katsa-img'>
          <img src='http://localhost:3004/eapc-logo.png' alt='katsa-img' />
        </div>

    </div>
  );
}

export default App;
