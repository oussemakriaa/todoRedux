import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { filterTask } from "../../JS/Action/TaskAction";
import './Filter.css'

const Filter = () => {


  const [done, setDone] = useState(false);
  const dispatch = useDispatch()

  const Filt = () => {
    dispatch(filterTask(done))
  }
  return (
    <div className="radio-buttons">
      <div>
      <div className='d-flex justify-content-around'>
        <h2 style={{color:'white'}}>Done</h2>
        <input
          id="Done"
          value="Done"
          type="radio"
          onChange={() => setDone(!done)}
        />
      </div>
      <div className='d-flex justify-content-around'>
        <h2 style={{color:'white'}}>Not Done</h2>

        <input
          id="notDone"
          value="notDone"
          type="radio"
          onChange={() => setDone(done)}

        />
      </div>
      </div>
      <Button onClick={Filt}>Filter</Button>
    </div>
    
  )
}

export default Filter
