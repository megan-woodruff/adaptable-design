import * as React from "react"

import Splash from "../components/splash"
import Layout from "../components/layout"
import Seo from "../components/seo"

import '../components/index.scss'
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query {
      azima: file(relativePath: { eq: "azima.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 100
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      sara: file(relativePath: { eq: "sara.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 100
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      devri: file(relativePath: { eq: "devri.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 100
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      megan: file(relativePath: { eq: "megan.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 100
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)

  return (
    <Layout pageName={'index'} showNav={false}>
      <Seo title="Adaptable Design" />
      <Splash />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <div className="indexSection" style={{ paddingTop: 0 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', maxWidth: 1100 }}>
          <div className="stat">
            <p className="stat-header">10,000+</p>
            <p>people in the U.S. turn 65 each day. By 2050, <strong>88 million</strong> will be elderly. </p>
          </div>
          <div className="stat">
            <p className="stat-header">26%</p>
            <p>of adults in america – more than 1 in 4 – are living with a disability</p>
          </div>
          <div className="stat">
            <p className="stat-header">0.15%</p>
            <p>of U.S. housing units are universally accessible</p>
          </div>
        </div>
        </div>
        <div className="indexSection">
          <h1 style={{ maxWidth: 800 }}>
            the adaptable house project is working to reshape this narrative
          </h1>
          <p className="subtitle" style={{ maxWidth: 800, margin: '0 auto' }}>
            we conducted human-centered research to identify key challenges among aging individuals with functional limitations and designed potential features for adaptable kitchen and bathroom spaces
          </p>
          <div style={{ marginTop: 48, width: '100%', border: '1px solid black', height: 460, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p>video</p>
          </div>
        </div>
        <div className="indexSection">
          <h1 style={{ maxWidth: 800 }}>
            what is adaptable design?
          </h1>
          <p className="subtitle" style={{ maxWidth: 800, margin: '0 auto', padding: 12 }}>
            we also used our research to define this approach to design and outlined principles and guidelines for broader use
          </p>
          <div className="adaptableDesignPoints">
            <ol className="adaptableDesignList" style={{ textAlign: 'left' }}>
              <li><span>It goes beyond <b>“accessible”</b></span></li>
              <li><span>It is grounded in the functional principles of <b>universal design</b></span></li>
              <li><span>It couples an emphasis on the <b>social and psychological</b> aspects of design with the notion that users’ abilities are <b>varied and dynamic</b></span></li>
            </ol>
          </div>
          <Link 
            className="primaryLinkIndex"
            activeClassName="active"
            to="/defining-adaptable-design">learn more about adaptable design
          </Link>
        </div>
        <div className="indexSection">
          <h1 style={{ maxWidth: 800 }}>
            our approach
          </h1>
          <div className="teamImages">
            <GatsbyImage 
              className="team-image"
              imgClassName="team-image"
              image={getImage(data.azima)}
              alt={'Photo of Azima'} />
            <GatsbyImage 
              className="team-image"
              imgClassName="team-image"
              image={getImage(data.sara)}
              alt={'Photo of Sara'} />
            <GatsbyImage 
              className="team-image"
              imgClassName="team-image"
              image={getImage(data.devri)}
              alt={'Photo of Devri'} />
            <GatsbyImage 
              className="team-image"
              imgClassName="team-image"
              image={getImage(data.megan)}
              alt={'Photo of Megan'} />
          </div>
          <p className="subtitle" style={{ maxWidth: 800, margin: '0 auto', padding: 12 }}>
            we are a team of Masters students at the University of Washington Department of Human Centered Design + Engineering who partnered with sponsor Mary Meyer for our capstone project.
          </p>
          <Link 
            className="primaryLinkIndex"
            activeClassName="active"
            to="/our-approach">learn more about our approach
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
