import * as React from "react"
import PropTypes from "prop-types"
import "./splash.scss"
import { useStaticQuery, graphql } from "gatsby"

const Splash = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="splash">
      <h1>{data.site.siteMetadata.title}</h1>
      <h3>A human-centered approach to designing inclusive home features</h3>
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
