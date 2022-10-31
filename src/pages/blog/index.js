import * as React from 'react';
import Seo from '../../components/seo';
import Layout from '../../components/layout';
import { Link, graphql } from 'gatsby'

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            <ul>
                {
                    data.allMdx.nodes.map((node) => (

                        <article key={node.id}>
                          <h2>
                            <li>
                            <Link to={`/blog/${node.frontmatter.slug}`}>
                                   {node.frontmatter.title}
                                </Link>
                            </li>
                            </h2>
                            <p>Posted: {node.frontmatter.date}</p>
                        
                        </article>
                    ))
                }
            </ul>
        </Layout>
    )
}
export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          slug
        }
        id
      }
    }
  }
`




export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;