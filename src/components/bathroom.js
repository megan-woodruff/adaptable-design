import React, { useState } from "react"

import { useStaticQuery, graphql } from "gatsby"

import '../components/adaptableImage.scss'
import AdaptableScene from "./adaptableScene"

const adaptableScenes = {
  kitchen: {
    sceneId: 'kitchen',
    imageAlt: 'Alt text goes here',
    imageName: 'kitchen',
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
    features: [],
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
  },
  storage_shelf: {
    sceneId: 'storage_shelf',
    imageName: 'storage_shelf',
    imageAlt: 'Close up on storage cabinet',
    forwardButtons: [],
    principles: [],
    back: 'kitchen'
  },

}

const Bathroom = () => {
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
          }, 250)
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
            }, 250)
          }}
          {...adaptableScenes[scenes[1]] } />
    </div>}
    </div>
  )

}

export default Bathroom
