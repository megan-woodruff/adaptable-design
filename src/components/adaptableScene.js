import React, { useEffect, useRef, useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import ReactTooltip from 'react-tooltip';

import './adaptableImage.scss'
import PrimaryButton from "./primaryButton"
import adaptableDesignGuidelines from "./adaptableDesignContent";

const getTransitionVideoName = ({ sceneId, to }) => {
  return `${sceneId}_to_${to}`
}

const AdaptableScene = ({ assetData, sceneId, title, imageName, imageAlt, isTransitioning, 
  onBackToOverview, onTransitionComplete, onTransitionStart, forwardButtons, features, 
  feedback = [], guidelines, back, screenWidth }) => {

  const image = assetData.images.edges.filter(image => {
    return image.node.name === imageName
  })[0]
  const imageObj = getImage(image.node)
  const [backZIndex, setBackZIndex] = useState(2)
  const backVideoRef = useRef(null)
  const onClickBack = () => { 
    onTransitionStart(back)
    backVideoRef.current.play()
    setBackZIndex(5)
   }

  return (
    <>
    <div className="header">
      {!isTransitioning &&
        <>
          <h3 style={{ marginBottom: 0 }}>{title}</h3>
          {/* {forwardButtons.length > 0 && <p style={{ fontStyle: 'italic', marginBottom: 0 }}>Hover over a feature to learn about its inspiration. Click to see its attributes and relevant design guidelines</p>} */}
          {back ? 
            <button 
              aria-label="back to kitchen"
              className="backButton"
              onClick={onClickBack}>{`<`}
              <span style={{ marginLeft: 12 }}>back to {back}</span>
            </button> :
            <button 
            className="backButton"
            onClick={onBackToOverview}>{`<`}
            <span style={{ marginLeft: 12 }}>back to overview</span>
          </button>}
        </>}
    </div>
  <div className="adaptable-container">
    {forwardButtons.map(forwardButton => 
      <ForwardButtonComponent 
        videoData={assetData.videos}
        key={forwardButton.to} 
        sceneId={sceneId} 
        title={title}
        isTransitioning={isTransitioning}
        onTransitionStart={onTransitionStart}
        onTransitionComplete={onTransitionComplete}
        {...forwardButton} />
    )}
    {(features.length > 0 || guidelines.length > 0) ?
      <ClickThroughs 
        onClickBack={onClickBack}
        back={back}
        screenWidth={screenWidth}
        videoData={assetData.videos}
        imageData={assetData.images}
        features={features} 
        feedback={feedback}
        isTransitioning={isTransitioning}
        guidelines={guidelines} /> : 
      <GatsbyImage 
        imgClassName="adaptable-image"
        image={imageObj}
        alt={imageAlt} /> }
    {back && 
      <BackButtonTransition
        back={back}
        title={title}
        sceneId={sceneId} 
        videoRef={backVideoRef}
        zIndex={backZIndex}
        onTransitionComplete={onTransitionComplete}
        videoData={assetData.videos} />}
  </div>
  </>
)

}

const ClickThroughs = ({ screenWidth, features, guidelines, feedback, imageData, videoData, isTransitioning }) => {
  const clickThroughs = [...features, ...guidelines, ...feedback]
  const [clickThroughIndex, setClickThroughIndex] = useState(0)
  const videoRef = useRef(null)

  const currentClickThrough = clickThroughs[clickThroughIndex]
  const currentVideo =  currentClickThrough.videoName ? videoData.edges.filter(video => video.node.name === currentClickThrough.videoName)[0] : null
  const currentImage = currentClickThrough.imageName ? imageData.edges.filter(image => {
    return image.node.name === currentClickThrough.imageName
  })[0] : null

  const guidelinesStart = features.length
  const feedbackStart = features.length + guidelines.length
  
  let fullGuideline = {}
  let playbackRate = currentClickThrough.playbackRate || 1

  if (currentClickThrough.guidelineIndex) fullGuideline = adaptableDesignGuidelines[currentClickThrough.guidelineIndex - 1]
  if (currentClickThrough.playbackRate) playbackRate = currentClickThrough.playbackRate

  const setPlayBack = () => {
    if (videoRef.current) videoRef.current.playbackRate = playbackRate
  }

  useEffect(() => {
    if (!isTransitioning) {
      if (videoRef.current) videoRef.current.play()
    } 
  }, [isTransitioning])

  return (
  <>
    {currentVideo && 
     <video
      key={currentClickThrough.videoName} 
      autoPlay={!isTransitioning}
      loop
      onCanPlay={() => setPlayBack()}
      ref={videoRef}
      alt={currentClickThrough.videoAlt}
      className="adaptable-video" 
      style={{ zIndex: 3 }}
      muted>
      <source 
        key={currentClickThrough.videoName}
        src={currentVideo.node.publicURL} 
        type="video/mp4" />
      </video> }
    {currentImage &&
      <GatsbyImage 
        imgClassName="adaptable-image"
        image={getImage(currentImage.node)}
        alt={currentClickThrough.imageAlt} />}
    {!isTransitioning && 
    <div className="clickthroughFooter">
      <div className="clickthroughContent" style={{ fontSize: 18, maxWidth: 1000, marginTop: 8 }}>
        {currentClickThrough.guidelineIndex && 
        <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 4 }}>
          <h3 style={{ fontSize: screenWidth < 1100 ? 18 : 22, marginBottom: 0, border: 'none', fontWeight: 400 }}>
            {fullGuideline.title}
          </h3>
          <button
            tabIndex="0"
            className="guidelineTooltipEntry"
            data-tip
            data-for='guideline'> 
              i
            </button>
          <ReactTooltip 
            clickable
            delayHide={500}
            id="guideline"
            className='guidelineTooltip'
            type="light"
            effect='solid'>
              <p style={{ fontWeight: 500, fontSize: 16 }}>{fullGuideline.title }</p>
              <p style={{ fontSize: 14 }}>{ fullGuideline.description }</p>
              <a 
                style={{ fontSize: 14 }} 
                tabIndex="0" 
                href="https://adaptablehome.design/defining-adaptable-design/#guidelines" 
                rel="noreferrer"
                target="_blank">View all design guidelines</a>
          </ReactTooltip>
        </div>}
        {clickThroughIndex >= guidelinesStart &&
        <p style={{ marginBottom: 8, fontSize: 14 }}>
          {clickThroughIndex >= guidelinesStart && clickThroughIndex < feedbackStart ? 
            'Design Guideline' : 'Participant Design Feedback'}
        </p>}
        <p style={{ fontSize: screenWidth < 900 ? 14 : 16, marginBottom: 12, fontStyle: clickThroughIndex >= feedbackStart ? 'italic' : 'unset' }}>
          {currentClickThrough.description}
        </p>
      </div>
      <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
      <div style={{  display: 'flex', marginLeft: 20, alignItems: 'center' }}>
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
    </div>}
  </> 
  )
}

const BackButtonTransition = ({ videoData, videoRef, sceneId, title, back, onTransitionComplete, zIndex }) => {
  const videoName = getTransitionVideoName({ sceneId, to: back })
  const video = videoData.edges.filter(video => video.node.name === videoName)[0]

  return (
      <video 
        ref={videoRef}
        onEnded={() => { onTransitionComplete(back) }}
        className="adaptable-video" 
        alt={`The scene transitions from a close up on the ${title} to the original view of the ${back}`}
        style={{ 'zIndex': zIndex }}
        muted>
        <source 
          src={video.node.publicURL} 
          type="video/mp4" />
      </video> 
  )
}

const ForwardButtonComponent = ({ videoData, sceneId, title, quote, isTransitioning, component, to, top, left, onTransitionStart, onTransitionComplete }) => {
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
          alt={`The scene transitions from an aerial view of the ${title} to a close up on the ${to}`}
          style={{ 'zIndex': zIndex }}
          muted>
          <source 
            src={video.node.publicURL} 
            type="video/mp4" />
        </video> 
        <button 
          className="svgButton" 
          onBlur={() => { setIsHovering(false) }}
          onFocus={() => { setIsHovering(true) }}
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
            <p style={{ marginBottom: 4 }}>"{quote}"</p>
          </div>}
      </>
    )
}

export default AdaptableScene
