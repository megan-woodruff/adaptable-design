import React from 'react'
import './secondaryButton.scss'

const SecondaryButton = ({ style, onClick, selected = false, children }) => {

  const classNames = ['secondaryButton']
  if (selected) {
    classNames.push('selected')
  }

  return (
    <button 
      style={style} 
      onClick={onClick} 
      className={classNames.join(' ')}>
      {children}
    </button>
  )
}

export default SecondaryButton