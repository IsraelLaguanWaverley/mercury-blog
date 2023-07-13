import React from 'react'

const BaseButton = ({ color, text }) => {
  return (
    <button
      style={{
        color: color,
        backgroundColor: 'white',
        border: '1px solid #ccc',
        padding: '10px 20px',
      }}
    >
      {text}
    </button>
  )
}

export default BaseButton
