import * as React from "react"
import Layout from "../components/layout"
import '../components/ourApproach.scss'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import ArrowLeftSvg from '../components/arrowLeftSvg'
import ArrowRightSvg from '../components/arrowRightSvg'
import LightBulbSvg from '../components/lightbulbSvg'

const OurApproach = () => { 
  
  const data = useStaticQuery(graphql`
    query {
      sketch1: file(relativePath: { eq: "sketchbook1.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 800
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      sketch2: file(relativePath: { eq: "sketchbook2.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 800
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      sketch3: file(relativePath: { eq: "sketchbook3.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 800
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      sketch4: file(relativePath: { eq: "sketchbook4.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 800
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      sketch5: file(relativePath: { eq: "sketchbook5.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 800
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      sketch6: file(relativePath: { eq: "sketchbook6.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 800
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      hifichair: file(relativePath: { eq: "hifichair.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 800
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      hifigrabbars: file(relativePath: { eq: "hifigrabbars.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 800
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      hifipulley: file(relativePath: { eq: "hifipulley.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 800
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      hifitub: file(relativePath: { eq: "hifitub.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 800
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      hificuttingboard: file(relativePath: { eq: "hificuttingboard.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 800
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      hifigarbage: file(relativePath: { eq: "hifigarbage.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 800
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      hifishelf: file(relativePath: { eq: "hifishelf.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 800
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      hifistool: file(relativePath: { eq: "hifistool.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 800
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      azima: file(relativePath: { eq: "azima.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 200
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      sara: file(relativePath: { eq: "sara.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 200
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      devri: file(relativePath: { eq: "devri.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 200
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      megan: file(relativePath: { eq: "megan.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 200
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)

  return (
  <Layout pageName={'our-approach'}>
    <div className="page-layout">
      <h1 className="title">our approach & process</h1>
      <div style={{ display: 'flex', maxWidth: 800, margin: '0 auto' }}>
        <ol className="twoColumns">
          <li><p>conduct secondary  research</p></li>
          <li><p>conduct co-design research sessions with target users</p></li>
          <li><p>create low-fidelity feature sketches + validate with target users</p></li>
          <li><p>define a set of principles and guidelines for applying adaptable design to the home space</p></li>
          <li><p>iterate on sketches + prototype high-fidelity 3D feature renderings</p></li>
        </ol>
      </div>
      <div className="twoColumnText">
      <div style={{ flexShrink: 0, position: 'relative' }}>
        <h2 className="twoColumnHeader">
          design questions
        </h2>
        <ArrowRightSvg className="arrowRightDesignQuestions" />
      </div>
      <div>
        <p style={{ marginTop: 10 }}>
          how might we design home features that <i>accomodate progressive changes in function to disabilities and aging?</i>
        </p>
        <p>
          how might we design home features such that they also promote <i>positive psychological and social health</i> for their users?
        </p>
        <h3 className="secondaryHeader">
          secondary research
        </h3>
        <p>
          we conducted a literature review, subject matter expert interviews, and a competitive analysis in order to gain a better understanding of the state of inclusive design in the architectural space.
        </p>
        <h3 className="secondaryHeader">
          co-design research sessions
        </h3>
        <p>
          we conducted 5 co-design sessions with individuals over 60 who experience mobility challenges. 
        </p>
        <p>
          Our focus in these sessions was to identify <i>key challenges and advantages</i> of participants’ kitchen and bathroom spaces, and collaboratively design potential features that could help address these challenges.
        </p>
      </div>
      </div>
      <div className="targetUsers">
        <LightBulbSvg />
        <h3 style={{ marginBottom: 12, marginTop: 12 }} className="secondaryHeader">
          key <b>physical</b> challenges
        </h3>
        <p style={{ marginBottom: 0 }}>
          Difficulties with:
       </p>
       <p>
          Bending  |  Turning and Torquing  |  Lifting  |  Standing for long periods of time  |  Low energy levels
       </p>
      </div>
      <div className="targetUsers">
        <h3 style={{ marginBottom: 12 }} className="secondaryHeader">
          key <b>emotional</b> challenges
        </h3>
        <p style={{ marginBottom: 0 }}>
        Concerns about:
       </p>
       <p>
          Psychological identity  |  Aging in place / needing to move  |  Finding community  |  Physical safety
       </p>
      </div>
      <div className="conceptSketches" style={{ position: 'relative' }}>
        <ArrowLeftSvg className="arrowLeftSketches" />
        <h3 className="secondaryHeader">
          early sketches & concepts
        </h3>
        <p>
          Fueled with findings and ideas from co-design sessions, we created low-fidelity concept sketches in Procreate and conducted short concept evaluation follow-up sessions with 3 of our target users.
        </p>
      </div>
      <div className="conceptSketchImages">
        <div className="conceptSketch">
          <GatsbyImage
            className="conceptSketch" 
            imgClassName="conceptSketchImg"
            alt="A sketch of a movable kitchen island on wheels and a swivel cutting board on top. On the side of the island are openings for compost and garbage."
            image={getImage(data.sketch1)}
          />
        </div>
        <div className="conceptSketch">
          <GatsbyImage 
            className="conceptSketch"
            imgClassName="conceptSketchImg"
            alt="A sketch of a large kitchen island with a top-loading dishwasher, push to open storage, and a pull-out microwave."
            image={getImage(data.sketch2)}
          />
        </div>
        <div className="conceptSketch">
          <GatsbyImage 
            className="conceptSketch"
            imgClassName="conceptSketchImg"
            alt="A sketch of a movable kitchen island with recycling and trash bins that can be pulled forward"
            image={getImage(data.sketch3)}
          />
        </div>
        <div className="conceptSketch">
          <GatsbyImage 
            className="conceptSketch"
            imgClassName="conceptSketchImg"
            image={getImage(data.sketch4)}
            alt="A sketch of an ergonomic shower chair that can be moved around. Also pictured are a detachable shower head on the wall, and storage that doubles as a grab hold"
          />
        </div>
        <div className="conceptSketch">
          <GatsbyImage 
          className="conceptSketch"
            imgClassName="conceptSketchImg"
            image={getImage(data.sketch5)}
            alt="A sketch of a set of pulleys above a bathtub. It indicates that the pulleys can be moved up and down and be used to help get into the bathtub"
          />
        </div>
        <div className="conceptSketch">
          <GatsbyImage 
            className="conceptSketch"
            imgClassName="conceptSketchImg"
            image={getImage(data.sketch6)}
            alt="A sketch of a zero-entry shower that has a foldable bench with foldout arms."
          />
        </div>

      </div>
      <div style={{ position: 'relative' }}>
        <ArrowRightSvg className="arrowRightPrinciples" />
        <div className="principleDevelopment">
          <h3 className="secondaryHeader">
            adaptable design principles
          </h3>
          <p>
            In order to make our work actionable beyond the scope of our project, we also defined a set of principles and guidelines that synthesize our most important learnings from our process. 
          </p>
          <p>
            We worked to connect our high-fidelity prototypes to the guidelines developed, so that other practioners can understand how to apply them.
          </p>
          <p>
            You can view these principles + guidelines on the <Link className="link" to='/defining-adaptable-design'>adaptable design page</Link> and see how they are exemplifed by our designs in the <Link className="link" to="/home-tour">home tour</Link>.
          </p>
        </div>
      </div>
      <div className="conceptSketches" style={{ position: 'relative' }}>
        <ArrowLeftSvg className="arrowLeftSketches" />
        <h3 className="secondaryHeader">
        high-fidelity concepts
        </h3>
        <p>
          Based on our evaluation sessions, we iterated on our concept sketches and created 3D prototypes using SketchUp, resulting in the renderings below. 
        </p>
        <p>
          Check out an interactive walkthrough of these features on the <Link className="link" to="/home-tour">home tour page</Link>.
        </p>
        
      </div>
      <h2 style={{ textAlign: 'center', marginTop: 36 }}>Kitchen</h2>
      <div style={{ justifyContent: 'center'}} className="conceptSketchImages">
        <div>
          <GatsbyImage
            className="hiFiConceptSketch" 
            imgClassName="hiFiConceptSketchImg"
            image={getImage(data.hificuttingboard)}
            alt="Close up on a 3D rendered cutting board that is attached to the top of a small, movable kitchen island. There are carrots and a knife on the cutting board."
          />
          <p className="hiFiName">Movable island + pullout cutting board</p>

        </div>
        <div>
          <GatsbyImage 
            className="hiFiConceptSketch"
            imgClassName="hiFiConceptSketchImg"
            image={getImage(data.hifistool)}
            alt="A close up on a kitchen stool that has four wheels, a foot rest, and a rounded back. The stool is located between the kitchen\'s back wall and central island."
          />
          <p className="hiFiName">Stowable kitchen stool</p>
        </div>
        <div>
          <GatsbyImage 
            className="hiFiConceptSketch"
            imgClassName="hiFiConceptSketchImg"
            image={getImage(data.hifishelf)}
            alt="A close up on an overhead storage cabinet with the cabinet opened. The shelves are pulled forward and down so that they can be accessed below the height of the cabinet."
          />
          <p className="hiFiName">Retractable cabinet shelves</p>
        </div>
        <div>
          <GatsbyImage 
            className="hiFiConceptSketch"
            imgClassName="hiFiConceptSketchImg"
            alt="Close up on rollable island with trash bins installed on the side and a pull out cutting board above. The garbage bins are pulled out and a side opening is opened on one of the bins."
            image={getImage(data.hifigarbage)}
          />
        <p className="hiFiName">Minimal-lift trash bins</p>
        </div>
      </div>
      <h2 style={{ textAlign: 'center', marginTop: 36, marginBottom: 24 }}>Bathroom</h2>
      <div style={{ justifyContent: 'center'}} className="conceptSketchImages">
        <div>
          <GatsbyImage
            className="hiFiConceptSketch" 
            imgClassName="hiFiConceptSketchImg"
            image={getImage(data.hifitub)}
            alt="Close up on a large bathtub whose entrance is flush with the floor. It has an L-shaped seat on one side in front of a shower head and soap dispensers."
          />
          <p className="hiFiName">Zero entry tub and reclining panel</p>
        </div>
        <div>
          <GatsbyImage 
            className="hiFiConceptSketch"
            imgClassName="hiFiConceptSketchImg"
            atl="A close up on a padded, reclined chair set low to the ground. The chair is on wheels and has a side table attached on either side. There is a neck pillow on the chair."
            image={getImage(data.hifichair)}
          />
          <p className="hiFiName">Ergonomic shower chair</p>
        </div>
        <div>
          <GatsbyImage 
            className="hiFiConceptSketch"
            imgClassName="hiFiConceptSketchImg"
            alt="A close up on a half wall with a sink, toilet, and two shower heads. On either side of the toilet and on the far end of the last shower head, there are large grab bars. The grab bars are installed in the walls and have rounded edges. They vary in height, the tallest one being as high as the shower head."
            image={getImage(data.hifigrabbars)}
          />
          <p className="hiFiName">Multi-functional integrated grab bars</p>
        </div>
        <div>
          <GatsbyImage 
            className="hiFiConceptSketch"
            imgClassName="hiFiConceptSketchImg"
            alt="A close up on a 3D model of a pulley system for mobility support. The mobility component is attached to the ceiling track system, and contains two stirrup-like handles that face one another as well as an attached support swing between them."
            image={getImage(data.hifipulley)}
          />
        <p className="hiFiName">Pulley mobility system</p>
        </div>
      </div>
      <div style={{ maxWidth: 900, margin: '80px auto', textAlign: 'center' }}>
        <h3 style={{ marginBottom: 32 }} className="secondaryHeader">
          about our team
        </h3>
        <div className="team-images">
          <div className="teamMember">
            <GatsbyImage 
              className="team-image"
              imgClassName="team-image"
              image={getImage(data.azima)}
              alt={'Photo of Azima, woman with dark hair standing against a tan backdrop'} />
              <p className="memberName">
                Azima Mansuri
              </p>
              <p>
                Designer
              </p>
          </div>
          <div className="teamMember">
          <GatsbyImage 
            className="team-image"
            imgClassName="team-image"
            image={getImage(data.sara)}
            alt={'Photo of Sara, woman with dark hair standing in front of water'} />
            <p className="memberName">
                Sara Clayton
              </p>
              <p>
                Designer
              </p>
          </div>
          <div className="teamMeber">
          <GatsbyImage 
            className="team-image"
            imgClassName="team-image"
            image={getImage(data.devri)}
            alt={'Photo of Devri, woman with dark straight hair standing in front of trees'} />
            <p className="memberName">
                Devri McNeal
              </p>
              <p>
                Researcher
              </p>
          </div>
          <div className="teamMember">
          <GatsbyImage 
            className="team-image"
            imgClassName="team-image"
            image={getImage(data.megan)}
            alt={'Photo of Megan, woman with short dark hair standing in front of water'} />
            <p className="memberName">
                Megan Woodruff
              </p>
              <p>
                UX Engineer
              </p>
            </div>
        </div>
      </div>
      <div className="resources">
        <h3 className="secondaryHeader">where to learn more</h3>
        <p>If you want to learn more about how to practice inclusive + universal design, our team recommends the following resources:</p>
        <div className="resourceList">
          <div>
            <a href="https://www.microsoft.com/design/inclusive/" rel="noreferrer" target="_blank">The Microsoft Inclusive Design Toolkit</a>
            <p>A design toolkit for enabling and drawing on the full range of human diversity.</p>
          </div>
          <div>
            <a href="http://universaldesign.ie/" rel="noreferrer" target="_blank">The Centre for Excellence in Universal Design</a>
            <p>Dedicated to enabling the design of environments that can be accessed, understood and used regardless of a person's age, size, ability or disability. </p>
          </div>
          <div>
            <a href="https://universaldesign.org/" rel="noreferrer" target="_blank">The Universal Design Project</a>
            <p>A distributed team working to develop a surplus of universally accessible homes.</p>
          </div>
        </div>
        <p>
          If you want to learn more about how this work is continued for The Adaptable House Project, visit <a href="https://www.theadaptablehouseproject.com" rel="noreferrer" target="_blank">theadaptablehouseproject.com</a>
        </p>
      </div>
      <div className="conceptSketches" style={{ marginBottom: 80 }}>
        <h3 className="secondaryHeader">
        acknowledgements
        </h3>
        <p style={{ maxWidth: 400, margin: '0 auto' }}>
          A big thank you to the following people for their knowledge and support on our project
        </p>
        <div className="acknowledgements">
        <div className="acknowledgement">
          <p style={{ marginBottom: 0 }}>Stan Chiu</p>
          <p>Project Advisor</p>
        </div>
        <div className="acknowledgement">
          <p style={{ marginBottom: 0 }}>Mary Meyer</p>
          <p>Project Sponsor</p>
        </div>
        <div className="acknowledgement">
          <p style={{ marginBottom: 0 }}>Ruth Kikin-Gil</p>
          <p>UW Capstone Advisor</p>
        </div>
        </div>
      </div>
    </div>
  </Layout>
)
}

export default OurApproach
