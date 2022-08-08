import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

export default function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  function deleteHandler(){
    setModalIsOpen(true)
  }

  function closeModalHander(){
    setModalIsOpen(false)
  }
  
  return (
    <div>
      <div className="card">
        <h2>{props.title}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>Delete</button>
        </div>
      </div>
      {modalIsOpen && <Modal closeModalHander = {closeModalHander}/>}
      {modalIsOpen && <Backdrop/>}
    </div>
  )
}
