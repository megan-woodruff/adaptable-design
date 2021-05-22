import React, { useState } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

import '../components/adaptableImage.scss'
import CuttingBoardSvg from "../components/cuttingBoardSvg"
import AdaptableScene from "../components/adaptableScene"
import PodStorageSvg from "../components/PodStorageSvg"

const transitions = {
  kitchen: {
    cuttingBoard: 'kitchen_to_cutting_board',
    storageShelf: 'kitchen_to_storage_shelf',
    storageIsland: 'kitchen_to_storage_island',
    stool: 'kitchen_to_stool'
  },
  cuttingBoard: {
    kitchen: 'cutting_board_to_kitchen'
  }
}

const adaptableScenes = {
  kitchen: {
    sceneId: 'kitchen',
    imageAlt: 'Alt text goes here',
    imageName: 'kitchen_start',
    forwardButtons: [
      {
        component: <CuttingBoardSvg />,
        top: '37%',
        left: '46%',
        to: 'cutting_board'
      },
      {
        component: <PodStorageSvg />,
        top: '43%',
        left: '37%',
        to: 'pod_storage'
      }
    ],
    back: null
  },
  cutting_board: {
    sceneId: 'cutting_board',
    imageName: 'cutting_board',
    imageAlt: 'Close up on cutting board',
    forwardButtons: [],
    principles: [{
      name: "Individuality",
      text: "The movable cutting board is designed to adapt to an individual’s needs while performing tasks in the kitchen, offering various orientations. It also serves as top cover for the trash feature."
    }],
    back: 'kitchen'
  },
  pod_storage: {
    sceneId: 'pod_storage',
    imageName: 'pod_storage',
    imageAlt: 'Close up on island with pod storage underneath',
    forwardButtons: [],
    principles: [],
    back: 'kitchen'
  }

}

const AdaptableFeatures = () => {
  const [scenes, setScenes] = useState(['kitchen', null])
  const [sceneInFocus, setSceneInFocus] = useState(0)

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

  return (
  <Layout>
    <Seo title="Adaptable Features" />
    <h1>Kitchen</h1>
    <div className="home-tour">
    {scenes[0] && 
    <div className={`adaptable-scene ${sceneInFocus === 1 ? 'invisible' : 'visible'}`}>
      <AdaptableScene 
        assetData={data} 
        onTransitionStart={(sceneId) => { 
          let newScenes = scenes.slice()
          newScenes[1] = sceneId
          setScenes(newScenes) 
        }}
        onTransitionComplete={() => { 
          setSceneInFocus(1) 
          setTimeout(() => { 
            let newScenes = scenes.slice()
            newScenes[0] = null
            setScenes(newScenes)
          }, 1000)
        }}
        {...adaptableScenes[scenes[0]] } />
        </div>}
    {scenes[1] && 
      <div className={`adaptable-scene ${sceneInFocus === 0 ? 'invisible' : 'visible'}`}>
        <AdaptableScene 
          assetData={data} 
          onTransitionStart={(sceneId) => { 
            let newScenes = scenes.slice()
            newScenes[0] = sceneId
            setScenes(newScenes) 
          }}
          onTransitionComplete={() => { 
            setSceneInFocus(0) 
            setTimeout(() => { 
              let newScenes = scenes.slice()
              newScenes[1] = null
              setScenes(newScenes)
            }, 1000)
          }}
          {...adaptableScenes[scenes[1]] } />
    </div>}
    </div>
  </Layout>
  )

}

export default AdaptableFeatures
