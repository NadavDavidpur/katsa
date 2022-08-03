function Newproject() {
    return (
  
      <div className='container'>
        <div className='row'>
            <div className='col-12'>
              <h1>
              פתיחת פרוייקט
              </h1>
            </div>
          <form>
            <div className='row'>
              <div className='col-12 mt-3'>
                <h5 className='bg-light p-1 px-3'>פרטי הפרוייקט:</h5>
              </div>
              <div className='col-12'>
                <div className='form-group'>
                  <label className='form-check-label'>שם פרוייקט:</label>
                  <input type="text" classname="form-control" id="projectname" />
                </div>
              
              </div>
              <div className='col-4'>
                <label className='form-check-label'>שם קבלן:</label>
                <input type="text" classname="form-control" id="name" />
              </div>
            </div>
            <div className='form-group mt-3'>
              <label htmlFor='inspectorname' className='form-check-label'>שם מפקח:</label>
              <input type="text" classname="form-control" id="inspectorname" />
            </div>
            <div className='form-group mt-3'>
              <label htmlFor='project_location' className='form-check-label'>מיקום פרוייקט: </label>
              <input type="text" classname="form-control" id="location_project" />
            </div>
            <div className='form-group mt-3'>
              <label htmlFor='txtfile' className='form-check-label'>הוספת קובץ: </label>
              <input type="file" classname="form-control" id="file" />
            </div>
            <div className='col-12 mt-3'>
                <h5 className='bg-light p-1 px-3'>מפרט:</h5>
            </div>
            <div className='form-group mt-3'>
              <label htmlFor='description' className='form-check-label'>פירוט עבודה: </label>
              <textarea id='description' className='form-control' />
            </div>
            <div className='form-group mt-3'>
              <label htmlFor='dishes' className='form-check-label'>כלים ומכונות: </label>
              <input type="text" classname="form-control" id="dishes" />
            </div>
            <div className='form-group mt-3'>
              <label htmlFor='Risk-Management' className='form-check-label'>ניהול סיכונים: </label>
              <textarea id='Risk-Management' className='form-control' />
            </div>
          
          </form>
  
        </div>
  
      </div>
    );
  }
export default Newproject  