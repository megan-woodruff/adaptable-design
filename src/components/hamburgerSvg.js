import * as React from "react"

function Hamburger(props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 30 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 1h28M1 12h28M1 23h28"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Hamburger
