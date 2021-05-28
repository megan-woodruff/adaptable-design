import React from 'react'
import './primaryButton.scss'

const PrimaryButton = ({ style, disabled, onClick, selected = false, children }) => {

  const classNames = ['primaryButton']
  if (selected) classNames.push('selected')
  if (disabled) classNames.push('disabled')

  return (
    <button 
      style={style} 
      disabled={disabled}
      onClick={onClick} 
      className={classNames.join(' ')}>
      {children}
    </button>
  )
}

export default PrimaryButton