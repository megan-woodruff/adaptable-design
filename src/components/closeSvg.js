import * as React from "react"

function CloseSvg(props) {
  return (
    <svg
    width={16}
    height={16}
    viewBox="0 0 45 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.5 2l42 42M43.5 2l-42 42"
      stroke="black"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  )
}

export default CloseSvg
