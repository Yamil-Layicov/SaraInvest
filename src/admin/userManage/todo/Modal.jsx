import React from 'react'

const Modal = ({data,name,close}) => {
  return (
    <div>
            <h1>Modal ici</h1>
            <button onClick={close}>Close</button>
    </div>
  )
}

export default Modal 