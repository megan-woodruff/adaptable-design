import React, { useState } from "react"

import { useStaticQuery, graphql } from "gatsby"

import '../components/adaptableImage.scss'
import AdaptableScene from "./adaptableScene"

const adaptableScenes = {
  bathroom: {
    sceneId: 'bathroom',
    title: 'Bathroom',
    imageAlt: 'Alt text goes here',
    imageName: 'bathroom_start',
    features: [],
    guidelines: [],
    forwardButtons: [
      {
        top: '60%',
        left: '70%',
        to: 'pulley', 
        quote: 'you know the idea of having something...to give me that extra confidence in case my upper body strength couldn\'t lower me all the way down, that would be extra reassuring.'
      },
      {
        top: '60%',
        left: '59%',
        to: 'tub',
        quote: 'I spent a lot of money on the bathtub because I like baths, but I haven\'t been able to sit down in the tub given I can\'t get down on my knees.'
      },
      {
        top: '45%',
        left: '62%',
        to: 'shower_chair',
        quote: 'I need back support and so I have my chair, and I have a pillow between my back and in the back of the chair to help you know make me sit up straighter'
      },
      {
        top: '63%',
        left: '46%',
        to: 'floor',
        quote: 'I was worried about my balance, I was worried about another fall, because I knew what another fall would mean.'
      },
      {
        top: '57%',
        left: '36%',
        to: 'grab_bars',
        quote: 'There\'s that element, for me, of stability. I mean of course I trust the pulley system, but once I\'m out [of the tub] I don\'t want to just be [standing] there'
      },
    ],
    back: null
  },
  pulley: {
    sceneId: 'pulley',
    imageName: 'pulley',
    imageAlt: 'Close up on',
    title: 'Pulley Mobility System',
    features: [
      {
        description: 'A flexible pulley system provides mobility support throughout the bathroom',
        imageName: 'pulley',
        imageAlt: ''
      }
    ],
    forwardButtons: [],
    guidelines: [
      {
      guidelineIndex: 8,
      description: "The system provides mobility support around the bath, shower, and toilet so that users can care for themselves independently.",
      videoName: 'pulley_independence',
    }, 
    {
      guidelineIndex: 6,
      description: 'The pulley material is sturdy but pliable, so that it won’t hurt if the user bumps into it accidentally',
      imageName: 'pulley'
    },
    {
      guidelineIndex: 2,
      description: 'The pulley stirrups and support bar can be set at the body width that is best for the user and can handle a wide range of body weights.',
      imageName: 'pulley'
    },
    {
      guidelineIndex: 4,
      description: 'The pulley system can be retracted up into the ceiling and stored out of the way when not in use',
      videoName: 'pulley_retracted'
    }
    
    ],
    back: 'bathroom'
  },
  tub: {
    sceneId: 'tub',
    imageName: 'tub',
    imageAlt: 'Close up on a large bathtub whose entrance is flush with the floor. It has an L-shaped seat on one side in front of a shower head and soap dispensers.',
    title: 'Reclining Bathtub',
    features: [
      {
        description: 'A zero-entry bathtub, in conjunction with the bathroom pulley system, provides a low-impact bathing option.',
        imageName: 'tub',
        imageAlt: 'Close up on a large bathtub whose entrance is flush with the floor. It has an L-shaped seat on one side in front of a shower head and soap dispensers.',
      },
    ],
    forwardButtons: [],
    guidelines: [{
      guidelineIndex: 3,
      description: 'A reclining seat allows the user to choose a body angle that is most comfortable during their bath.',
      videoName: 'tub_reclining'
    },
    {
      guidelineIndex: 7,
      description: 'A cover can be pulled over the tub when not in use, giving users the option to use the space as a shower instead.',
      videoName: 'tub_to_cover'
    }],
    feedback: [],
    back: 'bathroom'
  },
  grab_bars: {
    sceneId: 'grab_bars',
    imageName: 'grab_bars',
    imageAlt: '',
    title: 'Multi-functional Grab Bars',
    forwardButtons: [],
    features: [{
      description: 'Grab bars are available throughout the space surrounding the bathtub, toilet, and shower for assistance with entering, exiting and balance.',
      imageName: 'grab_bars'
    }],
    guidelines: [
      {
        guidelineIndex: 3,
        description: 'The grab bars are located in multiple locations along the wall, giving the users options for which side and area of the body they want to use for support.',
        videoName: 'grab_bars_options'
      },
      {
        guidelineIndex: 4,
        description: 'The grab bars can be pulled out for support further away from the half wall, and can also be pushed in when not in use.',
        videoName: 'grab_bars_pull'
      },
      {
        guidelineIndex: 7,
        description: 'Another set of grab bars along the back wall of the bathroom also double as a pull out shower bench.',
        videoName: 'grab_bars_multipurpose',
        playbackRate: .75
      }],
    back: 'bathroom'
  },
  floor: {
    sceneId: 'floor',
    imageName: 'floor',
    imageAlt: '',
    title: 'Rubberized Bathroom Flooring',
    forwardButtons: [],
    features: [],
    guidelines: [{
      guidelineIndex: 5,
      description: 'Rubberized flooring provides support throughout the bathroom, allowing the wet floor space to remain slip-free.',
      imageName: 'floor',
    },
  ],
    back: 'bathroom'
  },
  shower_chair: {
    sceneId: 'shower_chair',
    imageName: 'shower_chair',
    imageAlt: 'Close up on a padded chair set low to the ground',
    title: 'Ergonomic Shower Chair',
    forwardButtons: [],
    features: [{
      description: 'A movable, reclining bathroom chair can be rolled around the bathroom and locked in place as needed',
      imageName: 'shower_chair'
    }],
    guidelines: [
      {
        guidelineIndex: 1,
        description: 'The back and side panels on the chair can be adjusted in order to provide a customized, comfortable experience.',
        videoName: 'shower_chair_custom',
        playbackRate: .75
      },
      {
        guidelineIndex: 9,
        description: 'If other options require too much energy, the user can use voice or touch to lift the walls and transform the back space into a tub around the chair.',
        videoName: 'shower_chair_options'
      }],
    back: 'bathroom'
  },

}

const Bathroom = ({ onBackToOverview, screenWidth }) => {
  const [scenes, setScenes] = useState(['bathroom', null])
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
    <div className="home-tour">
    {scenes[0] && 
      <div className={`adaptable-scene ${sceneInFocus === 1 ? 'invisible' : 'visible'}`}>
        <AdaptableScene 
          screenWidth={screenWidth}
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
            screenWidth={screenWidth}
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

export default Bathroom
