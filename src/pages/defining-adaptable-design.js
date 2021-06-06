import * as React from "react"
import Layout from "../components/layout"
import '../components/designPrinciples.scss'
import adaptableDesignGuidelines from "../components/adaptableDesignContent"
import { Link } from "gatsby"

const DefiningAdaptableDesign = () =>  (
  <Layout pageName={'defining-adaptable-design'}>
    <div className="page-layout">
      <h1 className="title">what is adaptable design?</h1>
      <div className="text-wrapper">
        <p className="subtitle">
          Though the term “adaptable” was embedded in our project from the beginning, part of our work as researchers and designers was to define adaptable design and how it is connected to and differentiated from other design methodologies in the home design space.
        </p>
        <p className="subtitle">
          Our team determined that while application of adaptable design is highly contextual to an environment’s intended function and layout, it is always centered on an understanding of human ability and can be facilitated by a set of principles and guidelines.
          We believe the following is true of Adaptable Design:
        </p>
      </div>
      <div className="primary-point">
        <p>It goes beyond <b>“accessible”</b></p>
      </div>
      <div className="text-wrapper">
        <p>
        In practice, “accessible” building features are widely considered to be those that are in compliance with ADA Standards for Accessible Design. These standards represent the minimum required characteristics for a feature to be legally classified as accessible. 
        </p>
        <p>
        In our research and discussions with experts in the space, we found that accessible home features are unfortunately often implemented and installed in static, ad-hoc, and aesthetically incompatible ways in order to “check a box”. From a user experience standpoint, this is far from ideal. Thus, while all adaptable designs are accessible, the reverse is not always true.
        </p>
      </div>
      <div className="primary-point">
        <p>It is grounded in the functional principles of <b>universal design</b></p>
      </div>
      <div className="text-wrapper">
        <p>
        Universal design is a robust body of design work that promotes principles of equitable use, low physical effort, and intuitive design. It advocates for environments that are designed intentionally so that all individuals can use them, and posits that such designs benefit all people.
        </p>
        <p>
        Universal design is a strongly related, necessary component of adaptable design. It provides adaptable design with a functional foundation onto which it adds a human-centered emphasis.
        </p>
      </div>
      <div className="primary-point">
        <p>It couples an emphasis on the <b>social and psychological</b> aspects of design with the notion that users’ abilities are <b>varied and dynamic</b>.</p>
      </div>
      <div className="text-wrapper">
        <p>
        Adaptable Design’s unique addition to this landscape is its recognition of the complex, dynamic, and multi-dimensional nature of humans and their abilities. 
        </p>
        <p>
        Drawing from research on aging, disability, and assistive technologies, Adaptable Design emphasizes the connection between the physiological, psychological, and social aspects of human interaction with their living environment. It recognizes that individuals who are experiencing changes in physical function are often also experiencing shifts in their identity and new social challenges. Rather than recommending modifications or features that further emphasize these shifts, it highlights the importance of a design’s aesthetic impact and promotion of positive self-identity.
        </p>
        <p>
        Related to this idea, Adaptable Design is also centered on the conviction that a user’s abilities will enevitably change, sometimes gradually over a life time, and other times suddenly for a short period. Adaptable designs, rather than providing patchwork reactions to these changes, will have proactively considered how to accommodate them seamlessly.
        </p>
      </div>
      <h1 className="title mt-5" style={{ marginBottom: 20, marginTop: 100 }}>
        adaptable design principles
      </h1>
      <div className="text-wrapper subtitle" style={{ marginBottom: 20, textAlign: 'center' }}>
        <p className="subtitle">
          Working from this definition, we developed a set of design principles that we believe are central to creating an adaptable design.
        </p>
        
      </div>
      <table style={{ maxWidth: 800, margin: '36px auto 12px', borderTop: '1px solid lightgray' }}>
        <tr className="designPrincipleRow">
          <td className="designPrincipleName">Positive self-identity</td>
          <td className="designPrincipleDescription">My home is a space where I can feel secure in my identity, nurture positive relationships with my family and community, and motivate myself to take on physical challenges and activities.</td>
        </tr>
        <tr className="designPrincipleRow">
          <td className="designPrincipleName">Independence</td>
          <td className="designPrincipleDescription">I am able to care for myself and engage in activities that are meaningful to me, even as my abilities change.</td>
        </tr>
        <tr className="designPrincipleRow">
          <td className="designPrincipleName">Harmony with the home</td>
          <td className="designPrincipleDescription">My home’s features reflect my design preferences and use space effectively.</td>
        </tr>
        <tr className="designPrincipleRow">
          <td className="designPrincipleName">Safety and control</td>
          <td className="designPrincipleDescription">I feel like I’m in control and, if things go wrong, that I’ll be able to quickly and gracefully recover to avoid injuring myself.</td>
        </tr>
        <tr className="designPrincipleRow">
          <td className="designPrincipleName">Intuitive, flexible use</td>
          <td className="designPrincipleDescription">The features in my home are easy to use, offer options for operation, and adapt to my functional needs over time.</td>
        </tr>
      </table>
      <h1 className="title mt-5" style={{ marginTop: 100, marginBottom: 20 }}>
        adaptable design guidelines
      </h1>
      <div className="text-wrapper subtitle" style={{ marginBottom: 20, textAlign: 'center' }}>
        <p className="subtitle">
          We also developed a set of design guidelines for applying these principles to the design of home features.
        </p>
        
      </div>
      <ol style={{ maxWidth: 600, margin: '64px auto 64px' }}>
        {adaptableDesignGuidelines.map(guideline => (
          <li className="designGuideline">
            <p className="title" style={{ fontWeight: 600 }}>{guideline.title}</p>
            <p className="description">{guideline.description}</p>
            <span className="principleTags">{guideline.principles.map(principle => <span className="designGuidelinePrincipleTag">{principle}</span>)}</span>
          </li>
        ))}
      </ol>
      <div className="text-wrapper subtitle" style={{ textAlign: 'center'}}>
        <p style={{ fontSize: 24 }}>
          To see these guidelines in action, check out the <Link className="home-tour-link" to="/home-tour">home tour</Link>.
        </p>
      </div>
    </div>
  </Layout>
)

export default DefiningAdaptableDesign
