import React, { useEffect, useRef, useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import ReactTooltip from 'react-tooltip';

import './adaptableImage.scss'
import PrimaryButton from "./primaryButton"
import SecondaryButton from './secondaryButton'
import MoreSvg from './moreSvg'
import { Link } from "gatsby";

const getTransitionVideoName = ({ sceneId, to }) => {
  return `${sceneId}_to_${to}`
}

const AdaptableScene = ({ assetData, sceneId, title, imageName, imageAlt, isTransitioning, 
  onTransitionComplete, onTransitionStart, forwardButtons, features, guidelines, back }) => {

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
    {(features.length > 0 || guidelines.length > 0) ?
      <ClickThroughs 
        videoData={assetData.videos}
        features={features} 
        isTransitioning={isTransitioning}
        guidelines={guidelines} /> : 
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

const ClickThroughs = ({ features, guidelines, videoData, isTransitioning }) => {
  const clickThroughs = [...features, ...guidelines]
  const [clickThroughIndex, setClickThroughIndex] = useState(0)
  const videoRef = useRef(null)

  const currentClickThrough = clickThroughs[clickThroughIndex]
  const currentVideo =  currentClickThrough.videoName ? videoData.edges.filter(video => video.node.name === currentClickThrough.videoName)[0] : null
  const buttonStyle = { height: 36, paddingBottom: 0, paddingTop: 0, fontSize: 12, marginTop: 4, marginBottom: 4 }
  const featuresStart = 0
  const guidelinesStart = features.length
  const feedbackStart = features.length + guidelines.length

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
    {!isTransitioning && 
    <div className="clickthroughFooter">
      <div className="clickthroughContent" style={{ fontSize: 18, maxWidth: 800, marginTop: 8 }}>
        {currentClickThrough.title && 
        <>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
          <h3 style={{ marginBottom: 0, border: 'none', fontWeight: 400 }}>
            {currentClickThrough.title}
          </h3>
          <a 
            tabindex="0"
            className="guidelineTooltipEntry"
            data-tip
            data-for='guideline'> 
              i
            </a>
          <ReactTooltip 
            clickable
            delayHide={500}
            id="guideline"
            className='guidelineTooltip'
            type="light"
            effect='solid'>
              <p style={{ fontWeight: 500, fontSize: 16 }}>Think about the individual rather than the collective</p>
              <p style={{ fontSize: 14 }}>Do not assume one solution fits all - allow flexibility and adaptability in the functionality so that many users find comfort in the solution.</p>
              <a 
                style={{ fontSize: 14 }} 
                // onFocus={}
                tabIndex="0" 
                href="http://localhost:8001/defining-adaptable-design" 
                target="_blank">View all design guidelines</a>
          </ReactTooltip>
        </div>
        <p style={{ marginBottom: 8, fontSize: 12 }}>Design Guideline</p>
        </>}
        <p>
          {currentClickThrough.description}
        </p>
        <div style={{ flexShrink: 0, display: 'flex', marginBottom: 8, alignItems: 'center' }}>
          <PrimaryButton 
            tabIndex={-1}
            onClick={() => {  setClickThroughIndex(clickThroughIndex - 1) }} 
            disabled={clickThroughIndex === 0}
            selected 
            style={{ height: 44, width: 48 }}>
            {` < `}
          </PrimaryButton>
          <p style={{ marginBottom: 0, marginLeft: 12, marginRight: 12 }}>{clickThroughIndex + 1} of {clickThroughs.length}</p>
          <PrimaryButton 
            onClick={() => { setClickThroughIndex(clickThroughIndex + 1)}} 
            disabled={clickThroughIndex === clickThroughs.length - 1}
            selected 
            style={{ height: 44, width: 48 }}>
            {` > `}
          </PrimaryButton>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'stretch', marginRight: 8 }}>
        <PrimaryButton 
          onClick={() => { setClickThroughIndex(featuresStart)}}
          selected={clickThroughIndex < guidelinesStart}
          style={buttonStyle}>
          feature
        </PrimaryButton>
        <PrimaryButton 
         onClick={() => { setClickThroughIndex(guidelinesStart)}}
          selected={clickThroughIndex >= guidelinesStart}
          style={buttonStyle}>
          design guidelines
        </PrimaryButton>
        <PrimaryButton style={buttonStyle}>
          user feedback
        </PrimaryButton>
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
