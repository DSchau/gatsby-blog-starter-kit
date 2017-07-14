import React from 'react';
import GatsbyLink from 'gatsby-link';
import Home from 'react-icons/lib/fa/home';

import Link from '../components/Link';

import '../css/tags.css';

export default function Tags({ pathContext }) {
  const { posts } = pathContext;
  return (
    <div>
      <h1>Tags</h1>
      <ul className="tags">
        {
          Object.keys(posts)
            .map(tagName => {
              const tags = posts[tagName];
              return (
                <li key={tagName}>
                  {tagName}
                  <ul>
                    {
                      tags
                        .map(tag => {
                          return <li key={tag.id}><GatsbyLink to={tag.frontmatter.path}>{tag.frontmatter.title}</GatsbyLink></li>
                        })
                    }
                  </ul>
                </li>
              );
            })
        }
      </ul>
      <Link to="/"><Home /> All posts</Link>
    </div>
  )
}
