import React from 'react'
import './cuttingBoardSvg.scss'

function CuttingBoardSvg({ fill, className, onClick }) {
  return (
    <button 
      onClick={onClick}
      className="svgButton">
      <svg
        width={155}
        height={196}
        viewBox="0 0 155 196"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="cuttingBoard"
      >
        <path
          d="M75.5 1l-74 18.5 74 74.5v100.5l72.5-22 6-97L75.5 1z"
        />
      </svg>
    </button>
  )
}

export default CuttingBoardSvg