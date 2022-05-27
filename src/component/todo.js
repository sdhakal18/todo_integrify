import React from 'react'
import '../App.css'
//import Popupform from './popupform'
import {useState} from 'react'
import Modalform from './modalform'
import './modalform.css'
import './todo.css'

//

function Todo() {
     const[openModal, setOpenModal]=useState(false)
  return (
  <>
      <div className='todo'>
                <button className='openModalBtn' onClick={()=>setOpenModal(true)}>Add a new todo</button>
                {openModal && <Modalform openModal={openModal} setOpenModal={setOpenModal} />}
                {/* <Modalform trigger={openModal} setTrigger={setOpenModal}>
                    <h3>My popup</h3>
                    <p>This is my button triggered popup.</p>
                </Modalform> */}

     </div>
     <div>
    {/* <div>
                <button onClick={()=>setButtonPopup(true)}>Add a new todo</button>
                <Popupform trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <h3>My popup</h3>
                    <p>This is my button triggered popup.</p>
                </Popupform>
     </div>
     <div> */}
     </div>
     {/* <Modalform openModal={openModal} setOpenModal={setOpenModal} /> */}
     </>
  )
}

export default Todo