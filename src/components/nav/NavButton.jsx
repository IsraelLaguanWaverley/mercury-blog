import React from 'react'
import BaseButton from '../BaseButton'

const NavButton = ({ color, text, to }) => {
  return (
    <BaseButton
      color={color}
      text={text}
      onClick={() => {
        window.location.href = to
      }}
    >
      {text}
    </BaseButton>
  )
}

export default NavButton
