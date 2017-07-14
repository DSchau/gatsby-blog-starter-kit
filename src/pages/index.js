import React from 'react';
import GatsbyLink from 'gatsby-link';
import Helmet from 'react-helmet';

import Link from '../components/Link';

import '../css/index.css';

export default function Index({
  data
}) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div className="blog-posts">
      {posts
        .sort((a, b) => {
          const getDate = post => new Date(post.node.frontmatter.date);

          return getDate(a) - getDate(b);
        })
        .reverse()
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <div className="blog-post-preview" key={post.id}>
              <h1 className="title">
                <GatsbyLink to={post.frontmatter.path}>{post.frontmatter.title}</GatsbyLink>
              </h1>
              <h2 className="date">{post.frontmatter.date}</h2>
              <p>{post.excerpt}</p>
              <Link to={post.frontmatter.path}>Read more</Link>
            </div>
          );
        })}
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;