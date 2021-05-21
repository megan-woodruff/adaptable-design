import React, { useState } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { Video } from 'gatsby-video'

import '../components/adaptableImage.scss'
import CuttingBoardSvg from "../components/cuttingBoardSvg"

const AdaptableFeatures = () => {
  const data = useStaticQuery(graphql`
    query {
      kitchen: file(relativePath: { eq: "kitchen_start.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 2000
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      },
      kitchen_to_cutting: file(relativePath: { eq: "kitchen_to_cutting_board.mp4" }) {
        publicURL
      },
      cutting_to_kitchen: file(relativePath: { eq: "cutting_board_to_kitchen.mp4" }) {
        publicURL
      },
    }
  `)

  const [playVideo, setPlayVideo] = useState(false)

  const image = getImage(data.kitchen)
  const video = data.kitchen_to_cutting
  
  return (
  <Layout>
    <Seo title="Adaptable Features" />
    <h1>Kitchen</h1>
    <div className="adaptable-container">
      <CuttingBoardSvg onClick={() => { setPlayVideo(true) }} />
      <GatsbyImage 
        imgClassName="adaptable-image"
        image={image}
        alt={'Image of kitchen'} />
      {playVideo &&
        <video 
          className="adaptable-video" 
          autoPlay="autoplay" 
          muted>
          <source 
            src={video.publicURL} 
            type="video/mp4" />
        </video>}
    </div>
    {/* <button onClick={() => { setPlayVideo(true) }}>Next</button> */}
  </Layout>
  )

}

export default AdaptableFeatures
