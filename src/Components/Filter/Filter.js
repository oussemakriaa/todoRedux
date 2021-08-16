import React, { useState } from 'react'
import { Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { filterTask } from "../../JS/Action/TaskAction";

const Filter = () => {


    const [done, setDone] = useState(false);
    const dispatch = useDispatch()

    const Filt = () => {
        dispatch(filterTask(done))
    }
    return (
             <div className="radio-buttons">
        Done
        <input
          id="Done"
          value="Done"
          type="radio"
          onChange={setDone(true)}
        />
        Not Done
        <input
          id="notDone"
          value="notDone"
          type="radio"
          onChange={setDone(false)}

        />
    
            <Button onClick={Filt}>Filter</Button>
        </div>
    )
}

export default Filter
