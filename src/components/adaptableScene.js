import React, { useEffect, useRef, useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import './adaptableImage.scss'
import PrimaryButton from "./primaryButton"
import SecondaryButton from './secondaryButton'

const getTransitionVideoName = ({ sceneId, to }) => {
  return `${sceneId}_to_${to}`
}

const AdaptableScene = ({ assetData, sceneId, title, imageName, imageAlt, isTransitioning, 
  onTransitionComplete, onTransitionStart, forwardButtons, features, principles, back }) => {

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
    {(features.length > 0 || principles.length > 0) ?
      <ClickThroughs 
        videoData={assetData.videos}
        features={features} 
        isTransitioning={isTransitioning}
        principles={principles} /> : 
      <GatsbyImage 
        imgClassName="adaptable-image"
        image={imageObj}
        alt={imageAlt} /> }
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

const ClickThroughs = ({ features, principles, videoData, isTransitioning }) => {
  const clickThroughs = [...features, ...principles]
  const [clickThroughIndex, setClickThroughIndex] = useState(0)
  const videoRef = useRef(null)

  const currentClickThrough = clickThroughs[clickThroughIndex]
  const currentVideo =  currentClickThrough.videoName ? videoData.edges.filter(video => video.node.name === currentClickThrough.videoName)[0] : null
  const buttonStyle = { marginRight: 12 }

  useEffect(() => {
    if (!isTransitioning) {
      videoRef.current.play()
    } 
  }, [isTransitioning])

  return (
  <>
    {currentVideo && 
     <video
      key={currentClickThrough.videoName} 
      autoPlay={!isTransitioning}
      loop
      ref={videoRef}
      className="adaptable-video" 
      style={{ zIndex: 3 }}
      muted>
      <source 
        key={currentClickThrough.videoName}
        src={currentVideo.node.publicURL} 
        type="video/mp4" />
      </video> }
    {!isTransitioning && <div className="clickthroughFooter">
      
      <div className="clickthroughContent">
      <div className="clickthroughNav">
        <SecondaryButton selected style={buttonStyle}>
          feature
        </SecondaryButton>
        <SecondaryButton style={buttonStyle}>
          design guidelines
        </SecondaryButton>
        <SecondaryButton style={buttonStyle}>
          feedback
        </SecondaryButton>
      </div>
        {currentClickThrough.title && <h5>
          {currentClickThrough.title}
        </h5>}
        <p style={{ fontSize: 18, maxWidth: 800 }}>
          {currentClickThrough.description}
        </p>
      </div>
      
      <div style={{ paddingBottom: 12 }}>
        <div style={{ flexShrink: 0, display: 'flex', margin: 8 }}>
        <PrimaryButton 
          onClick={() => { 
            setClickThroughIndex(clickThroughIndex - 1)
          }} 
          disabled={clickThroughIndex === 0}
          selected 
          style={{ height: 44, width: 48, marginRight: 8 }}>
          {` < `}
        </PrimaryButton>
        <PrimaryButton 
          onClick={() => { 
            setClickThroughIndex(clickThroughIndex + 1)
          }} 
          selected 
          style={{ height: 44, width: 48 }}>
          {` > `}
        </PrimaryButton>
      </div>
      
      </div>
    </div>}
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
