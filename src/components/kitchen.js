import React, { useState } from "react"

import { useStaticQuery, graphql } from "gatsby"

import '../components/adaptableImage.scss'
import AdaptableScene from "../components/adaptableScene"

const adaptableScenes = {
  kitchen: {
    sceneId: 'kitchen',
    title: 'Kitchen',
    imageAlt: 'An aerial shot of kitchen rendered in 3D. There is a back wall which contains a large cabinet with a microwave installed one quarter of the way up, a large double door fridge, high cabinets and counter space below them. In front of this back wall there is a kitchen island which contains sinks on either end, induction stove tops next to each sink, and a cutting board in the middle. There is also a wheelable chair between the back wall and the kitchen island.',
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
        quote: 'It\'s difficult for me to [use kitchen appliances] because I have to bend over to use them.'
      },
    ],
    back: null
  },
  cutting_board: {
    sceneId: 'cutting_board',
    imageName: 'cutting_board',
    imageAlt: 'Close up on a 3D rendered cutting board that is attached to the top of a small, movable kitchen island. There are carrots and a knife on the cutting board.',
    title: 'Movable island + pull out cutting board',
    features: [
      {
        description: 'A height-adjustable island and attached pull-out cutting board allows its user to sit, stand, and change positions while preparing food.',
        videoName: 'cutting_board_positions',
        videoAlt: 'A close up on a cutting board attached to a movable island. The video pans to show the cutting board extended out off the island, revealing two trash chutes. When the cutting board is extended, a rollable kitchen chair appears to show that the cutting board can be used while sitting.'
      },
      {
        description: 'This prep space is connected to a small movable kitchen island, which can be used to transfer food or utensils to various parts of the kitchen without requiring lifting.',
        videoName: 'cutting_board_transfer',
        videoAlt: 'A small 3D rendered island moves out from between two surrounding kitchen islands. The island is loaded up with a pot from the nearby stove, to show that the island can be used to transfer food and tools during cooking.',
        playbackRate: 2
      }
    ],
    forwardButtons: [],
    guidelines: [{
      title: "Individuality",
      guidelineIndex: 1,
      description: "This feature is designed to adapt to an individual’s needs while performing tasks in the kitchen, offering various orientations.",
      videoName: 'cutting_board_positions',
      videoAlt: 'A close up on a cutting board attached to a movable island. The video pans to show the cutting board extended out off the island, revealing two trash chutes. When the cutting board is extended, a rollable kitchen chair appears to show that the cutting board can be used while sitting.'
    }, {
      title: 'User Options',
      guidelineIndex: 3,
      description: 'This feature can be activated with voice or touch commands - tapping twice on the  counter triggers the top to extend for more comfortable use and added counter space. The same can be triggered by a voice command or by pulling.',
      videoName: 'cutting_board_options',
      videoAlt: 'Two black circles appear on the 3D-rendered cutting board to simulate two taps on the counter. The cutting board then slowly slides out from the island. The cutting board then slids back into its original position.',
      playbackRate: 2
    },
    {
      title: 'Form + Function',
      guidelineIndex: 4,
      description: 'The movable island is designed to seamlessly fit into the space and act as an invisible-until-needed part of the kitchen.',
      videoAlt: 'A slow pan that transitions between a side and top view of the 3D rendered cutting board and island.',
      videoName: 'cutting_board_formfunction'
    },
    {
      title: 'Multipurposing',
      guidelineIndex: 7,
      description: 'The cutting board can be used as extra counter space when hosting, can handle hot pots and pans coming off the stove top, and complements the movable kitchen stool for longer meal prep days.',
      videoName: 'cutting_board_multipurpose',
      videoAlt: 'A 3D rendered movable island is moved forward toward the serving space of the kitchen, then moves backward and has a pot place on top of it',
      playbackRate: 2
    }],
    back: 'kitchen'
  },
  trash: {
    sceneId: 'trash',
    imageName: 'trash',
    imageAlt: 'Close up on rollable island with trash bins installed on the side and a pull out cutting board above.',
    title: 'Minimal-Lift Trash Bins',
    features: [
      {
        description: 'Trash bins are located within the movable island in order to elegantly minimize the moving, bending and lifting usually required to throw items away and take out the trash',
        videoName: 'trash',
        videoAlt: 'A 3D rendered island is centered between two kitchen islands with small stovetops. A cutting board on top of the island is moved out to reveal two trash inserts below. The cutting board is pushed in, and the lower section of the island is pulled out to show two small trash bins within.'
      },
    ],
    forwardButtons: [],
    guidelines: [{
      title: 'User Options',
      guidelineIndex: 3,
      description: 'Countertop inserts and an interior track system give users options for how they choose to throw items away during prep or cleanup. The bins can be brought forward along this track system with either a push in at the top of the drawer, or by pushing into a kick stand at the bottom.',
      videoName: 'trash_useroptions',
      videoAlt: 'A cutting board on top of a movable island is moved back to reveal one option for throwing away items: a countertop insert. Then, a push button on the top of the front face of the island and a foot press at the bottom of the island are each highlighted. The trash bins are then rolled forward from the front face of the island to reveal the bins inside.',
      playbackRate: 1.5
    },
    {
      title: 'Form + Function',
      guidelineIndex: 4,
      description: 'Trash stays hidden from view but is still easily accessible at any point during food prepration.',
      videoName: 'trash_formfunction',
      videoAlt: 'A 3D rendered island is centered between two kitchen islands with small stovetops. A cutting board on top of the island is moved out to reveal two trash inserts below. The cutting board is pushed in, and the lower section of the island is pulled out to show two small trash bins within.'
    },
    {
      title: 'Minimize Discomfort',
      guidelineIndex: 5,
      description: 'With the cutting board connected above, users can easily relocate the trash bins to wherever they are prepping food. The interior trash bins feature sliding side openings that eliminate the need for users to pull a heavy trash bag all the way up and out of the bin.',
      videoName: 'trash_discomfort',
      videoAlt: 'The movable island which includes the trash bins is rolled forward into the kitchen prep space. The trash bins are pulled open from the front of the island. A side opening is opened on the trash bin nearest the camera, revealing an easy option to grab a trash bag without having to lift.',
      playbackRate: 1
    }],
    feedback: [],
    back: 'kitchen'
  },
  storage_shelf: {
    sceneId: 'storage_shelf',
    imageName: 'storage_shelf',
    imageAlt: 'A close up on storage cabinet',
    title: 'Retractable Overhead Storage',
    forwardButtons: [],
    features: [{
      description: 'Retractable cabinet shelves allow a user to raise and lower overhead shelves when storing and retrieving items',
      videoName: 'storage_shelf',
      videoAlt: 'The video starts zoomed in on high-set cabinets on the back wall of the kitchen. A cabinet is opened to reveal two shelves. The shelves are then pulled forward and down so that they can be accessed below the height of the cabinet.'
    }],
    guidelines: [
      {
        title: 'User Options',
        guidelineIndex: 3,
        description: 'The shelves can be raised and lowered either by holding a button on the kitchen counter, pulling on the handle under the lower shelf, or using a voice command. Their  height when lowered is adjustable using these same inputs.',
        videoName: 'storage_shelf_options',
        videoAlt: 'The video starts with a view of high-set cabinets on the back wall of the kitchen, with a countertop below. It zooms in to highlight a small button on countertop and then zooms up to highlight a handle below each shelf in the cabinet. The shelves are then lowered, to show what happens when the button is pressed.'
      },
      {
        title: 'Form + Function',
        guidelineIndex: 4,
        description: 'The shelves blend into the kitchen cabinets and match the aesthetic of the overall space.',
        videoName: 'storage_shelf_pan',
        videoAlt: 'A slow pan shows a set of standard cabinet shelves inside a high-set cabinet. The shelves are then brought out and down to be accessed at a lower height.'
      },
      {
        title: 'User Independence',
        guidelineIndex: 8,
        description: 'A slide-resistant surface and edge rails guard against items falling or moving around while the shelves are transitioning, making the feature safe to use independently by any member of the household.',
        videoName: 'storage_shelf_independence',
        videoAlt: 'The first shot shows the retractable shelves pulled out. The camera zooms in to show small edge rails around each shelf, as well as slide-resistant surface on each shelf.',
      },
      {
        title: 'Longterm Spectrum of Abilities',
        guidelineIndex: 9,
        description: 'When not lowered, the feature functions as a set of standard cabinet shelves, meeting the individual at their level of ability at any point in time.',
        videoName: 'storage_shelf_pan',
        videoAlt: 'A slow pan shows a set of standard cabinet shelves inside a high-set cabinet. The shelves are then brought out and down to be accessed at a lower height.'
      }],
    back: 'kitchen'
  },
  stool: {
    sceneId: 'stool',
    imageName: 'stool',
    imageAlt: 'A close up on a kitchen stool that has four wheels, a foot rest, and a rounded back. The stool is located between the kitchen\'s back wall and central island.',
    title: 'Stowable Kitchen Stool',
    forwardButtons: [],
    features: [{
      description: 'A height-adjustable, rollable kitchen stool offers a flexible seating option during food preparation',
      imageName: 'stool',
      imageAlt: 'A close up on a kitchen stool that has four wheels, a foot rest, tractor seat, and a rounded back. The stool is located between the kitchen\'s back wall and central island.',
    }],
    guidelines: [{
      title: 'Body Variance',
      guidelineIndex: 2,
      description: 'The chair is height adjustable from its base and along its back to accommodate different user heights. It provides a supportive rounded back, but does not include enclosing arms, which would limit its use to certain body widths.',
      videoName: 'stool_bodyvariance',
      videoAlt: 'The kitchen stool is raised and lowered from its base. A quick pan around the stool shows its curved, non-limiting back.',
      playbackRate: 1.75
    },
    {
      title: 'User Options',
      guidelineIndex: 3,
      description: 'The chair has wheels that make it easy for users to roll it to a desired position for use. It also features both foot and hand controls which can be configured on either side of the chair, giving its user options for how to operate and secure the chair.',
      videoName: 'stool_options',
      videoAlt: 'The kitchen stool is moved forward to sit in front of the stove top, then moved back. A zoom in on the stool\'s base highlights food brakes on the wheels and a hand control bar underneath the seat.'
    },
    {
      title: 'Form + Function',
      guidelineIndex: 4,
      description: 'Unlike other chairs that offer similar adjustable and portable features, this chair matches the aesthetics of a modern kitchen.',
      videoName: 'stool_formfunction',
      videoAlt: 'A quick pan on the left and right of the stool shows its wheels, foot rest, tractor seat and rounded back'
    },
    {
      title: 'Minimize Discomfort',
      guidelineIndex: 5,
      description: 'In order to ensure users feel safe and in control, the chair allows the user to lock the wheels and lower the seat before transferring on and off the chair.',
      videoName: 'stool_discomfort',
      videoAlt: 'The kitchen stool is moved forward toward the kitchen island. It is then locked and lowered significantly so that someone could step off the chair.',
      playbackRate: 1.5
    },
    {
      title: 'Uplift During Error',
      guidelineIndex: 6,
      description: 'The chair’s design avoids the use of fabric so that kitchen spills are easy to clean up and do not cause longterm damage.',
      videoName: 'stool_formfunction',
      videoAlt: 'A quick pan on the left and right of the stool shows its wheels, foot rest, tractor seat and rounded back'
    },
    {
      title: 'Longterm Spectrum of Abilities',
      guidelineIndex: 9,
      description: 'The chair can be easily compressed and stowed in kitchen spaces, allowing the user to use it when needed, but keep it out of their way when not.',
      videoName: 'stool_longtermspectrum',
      videoAlt: 'The stool is collapsed from both the base and the back to be less than 2 feet tall. It is then shown being stored in this compressed shape underneath a countertop behind the chair.'
    },
  ],
    back: 'kitchen'
  },

}

const Kitchen = ({ onBackToOverview, screenWidth }) => {
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

export default Kitchen
