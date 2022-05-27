import React from 'react'
import './modalform.css'

function Modalform({openModal, setOpenModal}) {
  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        {/* <div>
          <button>Cancel</button>
          <button>Add</button>
        </div> */}
        <div className='title'>
          <h1>Add new todo</h1>
        </div>
        <div className='body'>
        <label><input type="text" placeholder='Title'/></label>
        <label><input type="text" placeholder='Deadline'/></label>
        {/* <label><input type="text" placeholder='Status'/></label> */}
          <label>
              <select id='status' placeholder='Status'>
                <option value='notstarted'>Not Started</option>
                <option value='inprogress'>In Progress</option>
                <option value='done'>Done</option>
              </select>
          </label>
        </div>
        <div className='footer'>
          <button className='CancelBtn' id='CancelBtn' 
          onClick={()=>setOpenModal(false)}
          onKeyDown={()=>setOpenModal(false)}
            >Cancel</button>
          <button>Add</button>
        </div>
      </div>
    </div>
  )
}

export default Modalform