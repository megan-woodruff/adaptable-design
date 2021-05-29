import React, { useState } from "react"

import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"

import '../components/adaptableImage.scss'
import AdaptableScene from "../components/adaptableScene"

const adaptableScenes = {
  kitchen: {
    sceneId: 'kitchen',
    title: 'Kitchen',
    imageAlt: 'Alt text goes here',
    imageName: 'kitchen',
    features: [],
    guidelines: [],
    forwardButtons: [
      {
        top: '46%',
        left: '51%',
        to: 'cutting_board',
        quote: 'if I’m standing for more than 10 minutes, I’m starting to feel pain'
      },
      {
        top: '56%',
        left: '45%',
        to: 'pod_storage'
      },
      {
        top: '16%',
        left: '55%',
        to: 'storage_shelf'
      },
    ],
    back: null
  },
  cutting_board: {
    sceneId: 'cutting_board',
    imageName: 'cutting_board',
    imageAlt: 'Close up on cutting board',
    title: 'Movable island + pull out cutting board',
    features: [
      {
        description: 'A height-adjustable island and attached pull-out cutting board allows its user to sit, stand, and change positions while preparing food.',
        videoName: 'cutting_board_positions'
      },
      {
        description: 'This prep space is connected to a small movable kitchen island, which can be used to transfer food or utensils to various parts of the kitchen without requiring lifting.',
        videoName: 'cutting_board_transfer'
      }
    ],
    forwardButtons: [],
    guidelines: [{
      title: "Individuality",
      number: '1',
      description: "The movable cutting board is designed to adapt to an individual’s needs while performing tasks in the kitchen, offering various orientations. It also serves as top cover for the trash feature.",
      imageName: 'cutting_board'
    }, {
      title: 'User Options',
      number: '3',
      description: 'This feature can be activated with voice or touch commands - tapping twice on the  counter triggers the top to extend for more comfortable use and added counter space.',
      imageName: 'cutting_board'
    }],
    back: 'kitchen'
  },
  pod_storage: {
    sceneId: 'pod_storage',
    imageName: 'pod_storage',
    imageAlt: 'Close up on island with pod storage underneath',
    title: 'Configurable storage pods',
    forwardButtons: [],
    features: [],
    guidelines: [],
    back: 'kitchen'
  },
  storage_shelf: {
    sceneId: 'storage_shelf',
    imageName: 'storage_shelf',
    imageAlt: 'Close up on storage cabinet',
    title: 'Retractable overhead storage',
    forwardButtons: [],
    features: [],
    guidelines: [],
    back: 'kitchen'
  },

}

const Kitchen = () => {
  const [scenes, setScenes] = useState(['kitchen', null])
  const [isTransitioning, setIsTransitioning] = useState(false)
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
    <div className="home-tour">
    {scenes[0] && 
      <div className={`adaptable-scene ${sceneInFocus === 1 ? 'invisible' : 'visible'}`}>
        <AdaptableScene 
          assetData={data} 
          isTransitioning={isTransitioning}
          onTransitionStart={(sceneId) => { 
            let newScenes = scenes.slice()
            newScenes[1] = sceneId
            setScenes(newScenes) 
            setIsTransitioning(true)
          }}
          onTransitionComplete={() => { 
            setSceneInFocus(1) 
            setTimeout(() => { 
              let newScenes = scenes.slice()
              newScenes[0] = null
              setScenes(newScenes)
              setIsTransitioning(false)
            }, 0)
          }}
          {...adaptableScenes[scenes[0]] } />
          </div>}
      {scenes[1] && 
        <div className={`adaptable-scene ${sceneInFocus === 0 ? 'invisible' : 'visible'}`}>
          <AdaptableScene 
            assetData={data} 
            isTransitioning={isTransitioning}
            onTransitionStart={(sceneId) => { 
              setIsTransitioning(true)
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
                setIsTransitioning(false)
              }, 0)
            }}
            {...adaptableScenes[scenes[1]] } />
    </div>}
    </div>
  </Layout>
  )

}

export default Kitchen
