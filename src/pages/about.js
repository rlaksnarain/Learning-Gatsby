import * as React from 'react';
import Layout from '../components/layout';
const AboutPage = () => {
    return (
 
            <Layout pageTitle="About Me">
            <p>I created this site using Gatsby Tutorial.</p>
            </Layout>
    )
}
export const Head = () => (
<>
<title>About Me</title>
<meta name="descripton" content = "Your description"/>
</>)
export default AboutPage