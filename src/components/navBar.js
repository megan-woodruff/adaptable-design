import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./navBar.scss"

const NavBar = ({ siteTitle, pageName }) => {

  console.log(pageName)

  const getClassNames = (linkName) => {
    let classNames = ['navLink']
    if (linkName === pageName) classNames.push('selected')
    return classNames.join(' ')
  }

  return (
    <header
      className="navBar">
      <div className="navBarContentContainer">
        <h2>
          <Link to="/" className="link">
            {siteTitle}
          </Link>
        </h2>
        <div className="navBarButtons">
          <Link to="/home-tour" className={getClassNames('home-tour')}>
            home tour
          </Link>
          <Link to="/defining-adaptable-design" className={getClassNames('defining-adaptable-design')}>
            what is adaptable design?
          </Link>
          <Link to="/our-approach" className={getClassNames('our-approach')}>
            our approach
          </Link>
        </div>
      </div>
    </header>
  )
}

NavBar.propTypes = {
  siteTitle: PropTypes.string,
  pageName: PropTypes.string
}

NavBar.defaultProps = {
  siteTitle: ``,
}

export default NavBar
