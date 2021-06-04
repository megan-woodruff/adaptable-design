import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import "./navBar.scss"
import CloseSvg from './closeSvg'
import Hamburger from "./hamburgerSvg"

const NavBar = ({ siteTitle, pageName }) => {
  const getClassNames = (linkName) => {
    let classNames = ['navLink']
    if (linkName === pageName) classNames.push('selected')
    return classNames.join(' ')
  }

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const pageTitles = {
    'home-tour': 'home tour',
    'defining-adaptable-design': 'what is adaptable design?',
    'our-approach': 'our approach'
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      setScreenWidth(window.innerWidth)
    })

  return () => {
    window.removeEventListener('resize', () => {})
  }
  }, [])

  let navBarClassNames = ['navBarContentContainer']
  if (screenWidth < 760) navBarClassNames.push('mobile')
  const mobileLinkStyle = { display: 'block', padding: '12px 16px' }

  return (
    <header
      className="navBar">
      <div className={navBarClassNames.join(' ')}>
        <h2>
          <Link to="/" className="link">
            {siteTitle}
          </Link>
        </h2>
        {screenWidth > 760 ? 
          <div className="navBarButtons">
            <Link to="/home-tour" className={getClassNames('home-tour')}>
              {pageTitles['home-tour']}
            </Link>
            <Link to="/defining-adaptable-design" className={getClassNames('defining-adaptable-design')}>
            {pageTitles['defining-adaptable-design']}
            </Link>
            <Link to="/our-approach" className={getClassNames('our-approach')}>
              {pageTitles['our-approach']}
            </Link>
          </div> : 
          <div>
            <button className="mobileNavControl" onClick={ () => { setMobileNavOpen(!mobileNavOpen) }}>
              {mobileNavOpen ? <CloseSvg /> : <Hamburger /> }
            </button>
          </div>}
      </div>
      {mobileNavOpen &&
        <div style={{ paddingBottom: 16 }}>
          <Link style={mobileLinkStyle} to="/home-tour" className={getClassNames('home-tour')}>
            {pageTitles['home-tour']}
          </Link>
          <Link style={mobileLinkStyle} to="/defining-adaptable-design" className={getClassNames('defining-adaptable-design')}>
          {pageTitles['defining-adaptable-design']}
          </Link>
          <Link style={mobileLinkStyle} to="/our-approach" className={getClassNames('our-approach')}>
            {pageTitles['our-approach']}
          </Link>
        </div>}
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
