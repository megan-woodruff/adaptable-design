import * as React from "react"
import PropTypes from "prop-types"
import "./splash.scss"
import { Link } from "gatsby"

const Splash = () => {
  return (
    <div className="splash">
      <h1>adaptable design</h1>
      <h3>a human-centered approach to designing inclusive home features</h3>
      <Link 
        className="start-tour"
        activeClassName="active"
        to="/home-tour">start home tour</Link> <br />
    </div>
  )
}

Splash.propTypes = {
  siteTitle: PropTypes.string,
}

Splash.defaultProps = {
  siteTitle: ``,
}

export default Splash
