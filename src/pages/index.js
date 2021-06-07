import React, { useState } from "react"

import Splash from "../components/splash"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Fade from 'react-reveal/Fade'


import '../components/index.scss'
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import CountUp from "react-countup"

const IndexPage = () => {

  const [countup, setCountup] = useState(0)

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
          <Fade bottom onReveal={() => { setCountup(2) }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', maxWidth: 1100 }}>
              <div className="stat">
              <CountUp delay={0} start={8000} duration={countup} separator="," end={10000}>
                {({ countUpRef }) => (
                  <p className="stat-header">
                    <span ref={countUpRef} />+</p>
                )}
              </CountUp>
                <p>people in the U.S. turn 65 each day. By 2050, <strong>88 million</strong> will be elderly. </p>
              </div>
              <div className="stat">
                <CountUp delay={0} start={0} duration={countup + 1} separator="," end={26}>
                  {({ countUpRef }) => (
                    <p className="stat-header">
                      <span ref={countUpRef} />%</p>
                  )}
                </CountUp>
                <p>of adults in america – more than 1 in 4 – are living with a disability</p>
              </div>
              <div className="stat">
              <CountUp delay={0} start={0} duration={countup + 1} decimals={2} end={0.15}>
                  {({ countUpRef }) => (
                    <p className="stat-header">
                      <span ref={countUpRef} />%</p>
                  )}
                </CountUp>
                <p>of U.S. housing units are universally accessible</p>
              </div>
            </div>
        </Fade>
        </div>
        <Fade>
          <div className="indexSection">
            <h1 style={{ maxWidth: 800 }}>
              the adaptable house project is working to reshape this narrative
            </h1>
            <p className="subtitle" style={{ maxWidth: 800, margin: '0 auto' }}>
              Our team conducted human-centered research to identify key challenges among aging individuals with mobility limitations and designed potential features for adaptable kitchens and bathrooms.
            </p>
              <iframe style={{ marginTop: 48, marginBottom: 48, maxWidth: 800, maxHeight: 460, width: '90vw', height: '50.6vw' }} src="https://www.youtube.com/embed/eYKK1nmdp0U" title="Mary Meyer Adaptable House Project" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </Fade>
        <Fade>
        <div className="indexSection">
          <h1 style={{ maxWidth: 800 }}>
            what is adaptable design?
          </h1>
          <p className="subtitle" style={{ maxWidth: 600, margin: '0 auto', padding: 12 }}>
            we used our research to define this approach to design and outlined principles and guidelines for broader use
          </p>
          <div className="adaptableDesignPoints">
            <ol className="adaptableDesignList" style={{ textAlign: 'left' }}>
              <li><p>It goes beyond <b>“accessible”</b></p></li>
              <li><p>It is grounded in the functional principles of <b>universal design</b></p></li>
              <li><p>It couples an emphasis on the <b>social and psychological</b> aspects of design with the notion that users’ abilities are <b>varied and dynamic</b></p></li>
            </ol>
          </div>
          <Link 
            className="primaryLinkIndex"
            activeClassName="active"
            to="/defining-adaptable-design">learn more about adaptable design
          </Link>
        </div>
        </Fade>
        <Fade>
        <div className="indexSection">
          <h1 style={{ maxWidth: 800 }}>
            our approach
          </h1>
          <div className="teamImages">
            <GatsbyImage 
              className="team-image"
              imgClassName="team-image"
              image={getImage(data.azima)}
              alt={'Photo of Azima, woman with dark hair standing against a tan backdrop'} />
            <GatsbyImage 
              className="team-image"
              imgClassName="team-image"
              image={getImage(data.sara)}
              alt={'Photo of Sara, woman with dark hair standing in front of water'} />
            <GatsbyImage 
              className="team-image"
              imgClassName="team-image"
              image={getImage(data.devri)}
              alt={'Photo of Devri, woman with dark straight hair standing in front of trees'} />
            <GatsbyImage 
              className="team-image"
              imgClassName="team-image"
              image={getImage(data.megan)}
              alt={'Photo of Megan, woman with short dark hair standing in front of water'} />
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
      </Fade>
      </div>
    </Layout>
  )
}

export default IndexPage
