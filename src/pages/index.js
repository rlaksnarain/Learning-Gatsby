import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">

        <p> I am making this using Gatsby Tutorial to learn</p>
        {/* <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        /> */}
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="../images/clifford2.png"
        />
      </Layout>
    </main>
  )
}
export const Head = () => <Seo title = "Home Page"/>
export default IndexPage