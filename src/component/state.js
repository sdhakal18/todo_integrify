// import React from 'react'
// import './popupform.css'
// import {useState} from 'react'


// function Popupform(props) {
//   return (props.trigger)?(
//     <div className='popup'>
//             <div className='popup-inner'>
//                 <button className='close-btn' onClick={()=>props.setTrigger(false)}>Close</button>
//                 {props.children}
//             </div>
//         </div>
//   ):''
// }
import React from 'react'
import Modalform from './modalform'
import Todo from './todo'
import {useState} from 'react'


function State() {
  const[openModal, setOpenModal]=useState(false)
  return (
    <div>
      <Todo openModal={openModal} setOpenModal={setOpenModal} />
      <Modalform openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  )
}

export default State
//export default Popupform