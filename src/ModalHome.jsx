import React, {useState} from 'react'
import ModalCopy from './ModalCopy.jsx'


const ModalHome = () => {
  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    setShowModal(true)
  }

  return (
    <div>
      <button className="button" onClick={handleClick}>
        Click me
      </button>

      {showModal ? <ModalCopy showModal={setShowModal} /> : ''}
    </div>
  )
}

export default ModalHome;
