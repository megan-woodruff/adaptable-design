import React, { useState } from "react"

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
        top: '47%',
        left: '52%',
        to: 'cutting_board',
        quote: 'I wish I had a huge island that had at least one, if not two, prep spaces that I could roll around or move around'
      },
      {
        top: '20%',
        left: '49.5%',
        to: 'storage_shelf', 
        quote: 'Right now, my storage is all overhead, but if I was in a wheelchair that wouldn\'t work.'
      },
      {
        top: '40%',
        left: '44.5%',
        to: 'stool',
        quote: 'Since I have difficulties with my back, I’m always trying to sit. If I stood for more than 10 minutes, I’m beginning to be very uncomfortable, I\'m in pain.'
      },
      {
        top: '57%',
        left: '56%',
        to: 'trash',
        quote: 'It\'s difficult for me to empty out the dishwasher because I have to bend over to do it.'
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
        videoName: 'cutting_board_transfer',
        playbackRate: 2
      }
    ],
    forwardButtons: [],
    guidelines: [{
      title: "Individuality",
      guidelineIndex: 1,
      description: "This feature is designed to adapt to an individual’s needs while performing tasks in the kitchen, offering various orientations.",
      videoName: 'cutting_board_positions',
    }, {
      title: 'User Options',
      guidelineIndex: 3,
      description: 'This feature can be activated with voice or touch commands - tapping twice on the  counter triggers the top to extend for more comfortable use and added counter space. The same can be triggered by a voice command or by pulling.',
      videoName: 'cutting_board_options',
      playbackRate: 2
    },
    {
      title: 'Form + Function',
      guidelineIndex: 4,
      description: 'The movable island is designed to seamlessly fit into the space and act as an invisible-until-needed part of the kitchen.',
      videoName: 'cutting_board_formfunction'
    },
    {
      title: 'Multipurposing',
      guidelineIndex: 7,
      description: 'The cutting board can be used as extra counter space when hosting, can handle hot pots and pans coming off the stove top, and complements the movable kitchen stool for longer meal prep days.',
      videoName: 'cutting_board_multipurpose',
      playbackRate: 2
    }],
    feedback: [
    //   {
    //   description: '"It is versatile - I like the options, it can be this or that depending on what your needs are." -Participant 1'
    // }
  ],
    back: 'kitchen'
  },
  trash: {
    sceneId: 'trash',
    imageName: 'trash',
    imageAlt: 'Close up on rollable island with trash bins installed in the side',
    title: 'Minimal-Lift Trash Bins',
    features: [
      {
        description: 'Trash bins are located within the movable island in order to elegantly minimize the moving, bending and lifting usually required to throw items away and take out the trash',
        videoName: 'trash'
      },
    ],
    forwardButtons: [],
    guidelines: [{
      title: 'User Options',
      guidelineIndex: 3,
      description: 'Countertop inserts and an interior track system give users options for how they choose to throw items away during prep or cleanup. The bins can be brought forward along this track system with either a push in at the top of the drawer, or by pushing into a kick stand at the bottom.',
      videoName: 'trash_useroptions',
      playbackRate: 5
    },
    {
      title: 'Form + Function',
      guidelineIndex: 4,
      description: 'Trash stays hidden from view but is still easily accessible at any point during food prepration.',
      videoName: 'trash_formfunction'
    },
    {
      title: 'Minimize Discomfort',
      guidelineIndex: 5,
      description: 'With the cutting board connected above, users can easily relocate the trash bins to wherever they are prepping food. The interior trash bins feature sliding side openings that eliminate the need for users to pull a heavy trash bag all the way up and out of the bin.',
      videoName: 'trash_discomfort',
      playbackRate: 2
    }],
    feedback: [],
    back: 'kitchen'
  },
  storage_shelf: {
    sceneId: 'storage_shelf',
    imageName: 'storage_shelf',
    imageAlt: 'Close up on storage cabinet',
    title: 'Retractable Overhead Storage',
    forwardButtons: [],
    features: [{
      description: 'Retractable cabinet shelves allow a user to raise and lower overhead shelves when storing and retrieving items',
      videoName: 'storage_shelf'
    }],
    guidelines: [
      {
        title: 'User Options',
        guidelineIndex: 3,
        description: 'The shelves can be raised and lowered either by holding a button on the kitchen counter, pulling on the handle under the lower shelf, or using a voice command. Their  height when lowered is adjustable using these same inputs.',
        videoName: 'storage_shelf_options'
      },
      {
        title: 'Form + Function',
        guidelineIndex: 4,
        description: 'The shelves blend into the kitchen cabinets and match the aesthetic of the overall space.',
        videoName: 'storage_shelf_pan'
      },
      {
        title: 'User Independence',
        guidelineIndex: 8,
        description: 'A slide-resistant surface and edge rails guard against items falling or moving around while the shelves are transitioning, making the feature safe to use independently by any member of the household.',
        videoName: 'storage_shelf_independence'
      },
      {
        title: 'Longterm Spectrum of Abilities',
        guidelineIndex: 9,
        description: 'When not lowered, the feature functions as a set of standard cabinet shelves, meeting the individual at their level of ability at any point in time.',
        videoName: 'storage_shelf_pan'
      }],
    back: 'kitchen'
  },
  stool: {
    sceneId: 'stool',
    imageName: 'stool',
    imageAlt: 'Close up on a kitchen stool with wheels',
    title: 'Stowable Kitchen Stool',
    forwardButtons: [],
    features: [{
      description: 'A height-adjustable, rollable kitchen stool offers a flexible seating option during food preparation',
      imageName: 'stool'
    }],
    guidelines: [{
      title: 'Body Variance',
      guidelineIndex: 2,
      description: 'The chair is height adjustable from its base and along its back to accommodate different user heights. It provides a supportive rounded back, but does not include enclosing arms, which would limit its use to certain body widths.',
      videoName: 'stool_bodyvariance',
      playbackRate: 1.75
    },
    {
      title: 'User Options',
      guidelineIndex: 3,
      description: 'The chair has wheels that make it easy for users to roll it to a desired position for use. It also features both foot and hand controls which can be configured on either side of the chair, giving its user options for how to operate and secure the chair.',
      videoName: 'stool_options'
    },
    {
      title: 'Form + Function',
      guidelineIndex: 4,
      description: 'Unlike other chairs that offer similar adjustable and portable features, this chair matches the aesthetics of a modern kitchen.',
      videoName: 'stool_formfunction'
    },
    {
      title: 'Minimize Discomfort',
      guidelineIndex: 5,
      description: 'In order to ensure users feel safe and in control, the chair allows the user to lock the wheels and lower the seat before transferring on and off the chair.',
      videoName: 'stool_discomfort',
      playbackRate: 1.5
    },
    {
      title: 'Uplift During Error',
      guidelineIndex: 6,
      description: 'The chair’s design avoids the use of fabric so that kitchen spills are easy to clean up and do not cause longterm damage.',
      videoName: 'stool_formfunction'
    },
    {
      title: 'Longterm Spectrum of Abilities',
      guidelineIndex: 9,
      description: 'The chair can be easily compressed and stowed in kitchen spaces, allowing the user to use it when needed, but keep it out of their way when not.',
      videoName: 'stool_longtermspectrum'
    },
  ],
    back: 'kitchen'
  },

}

const Kitchen = ({ onBackToOverview }) => {
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
            publicURL,
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
          onBackToOverview={onBackToOverview}
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
            onBackToOverview={onBackToOverview}
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
  )

}

export default Kitchen
