import * as React from 'react';
import Layout from '../components/layout';
const IndexPage = () => {
  return(
    <main>
      <Layout pageTitle="Home Page">
      
      <p> I am making this using Gatsby Tutorial to learn</p>
      </Layout>
    </main>
  )
}
export const Head = () => <title>Home Page</title>
export default IndexPage