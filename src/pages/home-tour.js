import React, { useState } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

import '../components/adaptableImage.scss'
import Kitchen from "../components/kitchen"
import Bathroom from "../components/bathroom"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useEffect } from "react/cjs/react.development"

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

  return (
  <Layout pageName={'home-tour'}>
    <Seo title="Adaptable Features" />
    <div className="intro">
      <h1>adaptable home tour</h1>
      <p>explore an interactive walkthrough of adaptable kitchen and bathroom features designed for the adaptable house project</p>
      {screenWidth < 900 && <p style={{ fontStyle: 'italic'}}>(This walkthrough is best viewed on a screen that is 800px or wider)</p>}
    </div>
    { areaSelected === null ?
      <div className="areaSelector">
        <button onClick={() => { setAreaSelected('kitchen') }} className="areaButton">
          <GatsbyImage 
            style={{ marginBottom: 16 }}
            image={getImage(kitchenImg.node)} />
            Kitchen
        </button>
        <button className="areaButton">
          Bathroom
        </button>
      </div> : 
        areaSelected === 'kitchen' ? 
          <Kitchen 
            screenWidth={screenWidth} 
            onBackToOverview={() => { setAreaSelected(null) }} />  : 
          <Bathroom />}
    
  </Layout>
  )

}

export default AdaptableFeatures
