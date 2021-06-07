import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

import '../components/adaptableImage.scss'
import Kitchen from "../components/kitchen"
import Bathroom from "../components/bathroom"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const AdaptableFeatures = () => {
  const [areaSelected, setAreaSelected] = useState(null)
  const [screenWidth, setScreenWidth] = useState(null)

  useEffect(() => {
    setScreenWidth(window.innerWidth)

    window.addEventListener('resize', () => {
      setScreenWidth(window.innerWidth)
    })

  return () => {
    window.removeEventListener('resize', () => {})
  }
  }, [])

  const data = useStaticQuery(graphql`
    {
      images: allFile(filter: {
          extension: {eq: "jpg"},
        })
      {
        edges {
          node {
            name,
            childImageSharp {
              gatsbyImageData(
                width: 2000
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      },
      videos: allFile(filter: { extension: { eq: "mp4" }})
      {
        edges {
          node {
            name,
            publicURL
          }
        }
      }
    }
  `)

  const kitchenImg = data.images.edges.filter(image => {
    return image.node.name === 'kitchen'
  })[0]

  const bathroomImg = data.images.edges.filter(image => {
    return image.node.name === 'bathroom'
  })[0]

  return (
  <Layout pageName={'home-tour'}>
    <Seo title="Adaptable Features" />
    <div className="intro">
      <h1>adaptable home tour</h1>
      <p>explore an interactive walkthrough of adaptable kitchen and bathroom features</p>
      {screenWidth < 900 && <p style={{ fontStyle: 'italic'}}>(This walkthrough is best viewed on a screen that is 800px or wider)</p>}
    </div>
    { areaSelected === null ?
      <div className="areaSelector">
        <button onClick={() => { setAreaSelected('kitchen') }} className="areaButton">
          <GatsbyImage 
            alt="An aerial shot of kitchen rendered in 3D. There is a back wall which contains a large cabinet with a microwave installed one quarter of the way up, a large double door fridge, high cabinets and counter space below them. In front of this back wall there is a kitchen island which contains sinks on either end, induction stove tops next to each sink, and a cutting board in the middle. There is also a wheelable chair between the back wall and the kitchen island."
            imgClassName={'areaImage'}
            style={{ marginBottom: 16 }}
            image={getImage(kitchenImg.node)} />
            Kitchen
        </button>
        <button onClick={() => { setAreaSelected('bathroom') }} className="areaButton">
        <GatsbyImage 
          alt="An aerial view of a bathroom. Above everything, three horizontal slats show the support system for a pulley mobility system. The pulley is attached at the right-front of the room, above a zero-entry bathtub. Above the bathtub are two shower heads. Behind the bathtub are two more shower heads and a reclined shower chair that is on wheels. In the center of the room, a slanted wall houses a sink, toilet, and two shower heads."
          imgClassName={'areaImage'}
          style={{ marginBottom: 16 }}
          image={getImage(bathroomImg.node)} />
            Bathroom
        </button>
      </div> : 
        areaSelected === 'kitchen' ? 
          <Kitchen 
            screenWidth={screenWidth} 
            onBackToOverview={() => { setAreaSelected(null) }} />  : 
          <Bathroom
            screenWidth={screenWidth} 
            onBackToOverview={() => { setAreaSelected(null) }}
          />}
    
  </Layout>
  )

}

export default AdaptableFeatures
