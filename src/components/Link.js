import React from 'react';
import GatsbyLink from 'gatsby-link';

import '../css/link.css';

export default function Link({
  children,
  to
}) {
  return (
    <GatsbyLink className="link" to={to}>{children}</GatsbyLink>
  )
}
