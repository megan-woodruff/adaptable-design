import React, { useState } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

import '../components/adaptableImage.scss'
import Kitchen from "../components/kitchen"
import Bathroom from "../components/bathroom"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const AdaptableFeatures = () => {
  const [areaSelected, setAreaSelected] = useState(null)

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
  <Layout>
    <Seo title="Adaptable Features" />
    <div className="intro">
      <h1>adaptable house tour</h1>
      <p>explore adaptable kitchen and bathroom features developed as part of our work</p>
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
          <Kitchen />  : 
          <Bathroom />}
    
  </Layout>
  )

}

export default AdaptableFeatures
