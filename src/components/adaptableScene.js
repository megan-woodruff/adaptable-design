import React, { useRef, useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import './adaptableImage.scss'

const getTransitionVideoName = ({ sceneId, to }) => {
  return `${sceneId}_to_${to}`
}

const AdaptableScene = ({ assetData, sceneId, imageName, imageAlt, onTransitionComplete, onTransitionStart, forwardButtons, principles, back }) => {

  const image = assetData.images.edges.filter(image => {
    return image.node.name === imageName
  })[0]
  const imageObj = getImage(image.node)
  
  return (
  <div className="adaptable-container">
    {/* {!!principles &&
      <div className="principles-flyout">
        {principles.map(principle => (
          <div key={principle.name}>
            <h3>{principle.name}</h3>
            <p>{principle.text}</p>
          </div>
        ))}
      </div>} */}
    {forwardButtons.map(forwardButton => 
      <ForwardButtonComponent 
        videoData={assetData.videos}
        key={forwardButton.to} 
        sceneId={sceneId} 
        onTransitionStart={onTransitionStart}
        onTransitionComplete={onTransitionComplete}
        {...forwardButton} />
    )}
    <GatsbyImage 
      imgClassName="adaptable-image"
      image={imageObj}
      alt={imageAlt} />
    {back && 
      <BackButtonComponent 
        back={back}
        sceneId={sceneId} 
        onTransitionStart={onTransitionStart}
        onTransitionComplete={onTransitionComplete}
        videoData={assetData.videos} />}
      
  </div>
)

}

const BackButtonComponent = ({ videoData, sceneId, back, onTransitionComplete, onTransitionStart }) => {
  const videoName = getTransitionVideoName({ sceneId, to: back })
  const video = videoData.edges.filter(video => video.node.name === videoName)[0]
  const videoRef = useRef(null)
  const [zIndex, setZIndex] = useState(2)

  return (
    <>
      <video 
        ref={videoRef}
        onEnded={() => { onTransitionComplete(back) }}
        className="adaptable-video" 
        style={{ 'zIndex': zIndex }}
        muted>
        <source 
          src={video.node.publicURL} 
          type="video/mp4" />
      </video> 
      <button 
        className="backButton"
        onClick={() => { 
          onTransitionStart(back)
          videoRef.current.play()
          setZIndex(5)
           }}>
        Back
      </button>
    </>
  )
}

const ForwardButtonComponent = ({ videoData, sceneId, component, to, top, left, onTransitionStart, onTransitionComplete }) => {
  const videoName = getTransitionVideoName({ sceneId, to })
  const video = videoData.edges.filter(video => video.node.name === videoName)[0]
  const videoRef = useRef(null)
  const [zIndex, setZIndex] = useState(2)

    return (
      <>
        <video 
          ref={videoRef}
          onEnded={() => { onTransitionComplete(to) }}
          className="adaptable-video" 
          style={{ 'zIndex': zIndex }}
          muted>
          <source 
            src={video.node.publicURL} 
            type="video/mp4" />
        </video> 
        <button 
          className="svgButton" 
          style={{ top: top, left: left, 'zIndex': 4 }}
          onClick={() => { 
            onTransitionStart(to)
            videoRef.current.play()
            setZIndex(5)
            // setTimeout(() => , 0)
          }}>
          {component}
        </button>
      </>
    )
}

export default AdaptableScene
