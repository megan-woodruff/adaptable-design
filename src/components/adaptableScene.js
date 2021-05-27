import React, { useRef, useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import './adaptableImage.scss'

const getTransitionVideoName = ({ sceneId, to }) => {
  return `${sceneId}_to_${to}`
}

const AdaptableScene = ({ assetData, sceneId, title, imageName, imageAlt, isTransitioning, onTransitionComplete, onTransitionStart, forwardButtons, principles, back }) => {

  const image = assetData.images.edges.filter(image => {
    return image.node.name === imageName
  })[0]
  const imageObj = getImage(image.node)
  const [backZIndex, setBackZIndex] = useState(2)
  const backVideoRef = useRef(null)

  return (
    <>
    <div className="header">
      {!isTransitioning &&
        <>
          <h3 style={{ marginBottom: 0 }}>{title}</h3>
          {back && 
            <button 
            className="backButton"
            onClick={() => { 
              onTransitionStart(back)
              backVideoRef.current.play()
              setBackZIndex(5)
            }}>{`<`}
            <span style={{ marginLeft: 12 }}>back to {back}</span>
            </button>}
        </>}
    </div>
  <div className="adaptable-container">
    {forwardButtons.map(forwardButton => 
      <ForwardButtonComponent 
        videoData={assetData.videos}
        key={forwardButton.to} 
        sceneId={sceneId} 
        isTransitioning={isTransitioning}
        onTransitionStart={onTransitionStart}
        onTransitionComplete={onTransitionComplete}
        {...forwardButton} />
    )}
    <GatsbyImage 
      imgClassName="adaptable-image"
      image={imageObj}
      alt={imageAlt} />
    {back && 
    <BackButtonTransition
      back={back}
      sceneId={sceneId} 
      videoRef={backVideoRef}
      zIndex={backZIndex}
      onTransitionComplete={onTransitionComplete}
      videoData={assetData.videos} />}
  </div>
  </>
)

}

const BackButtonTransition = ({ videoData, videoRef, sceneId, back, onTransitionComplete, zIndex }) => {
  const videoName = getTransitionVideoName({ sceneId, to: back })
  const video = videoData.edges.filter(video => video.node.name === videoName)[0]

  return (
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
  )
}

const ForwardButtonComponent = ({ videoData, sceneId, quote, isTransitioning, component, to, top, left, onTransitionStart, onTransitionComplete }) => {
  const videoName = getTransitionVideoName({ sceneId, to })
  const video = videoData.edges.filter(video => video.node.name === videoName)[0]
  const videoRef = useRef(null)
  const [zIndex, setZIndex] = useState(2)
  const [isHovering, setIsHovering] = useState(false)

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
          onMouseLeave={() => { setIsHovering(false) }}
          onMouseEnter={() => { setIsHovering(true) }}
          style={{ top: top, left: left, 'zIndex': 4 }}
          onClick={() => { 
            onTransitionStart(to)
            videoRef.current.play()
            setZIndex(5)
          }}>
          {component}
        </button>
        {(quote && !isTransitioning) && 
        <div 
          className="quoteFooter" 
          style={{ opacity: isHovering ? 1 : 0 }}>
          "{quote}"
        </div>}
      </>
    )
}

export default AdaptableScene
