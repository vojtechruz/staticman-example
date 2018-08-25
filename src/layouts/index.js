import React from 'react'
import Link from 'gatsby-link'

import { rhythm, scale } from '../utils/typography'
import "./index.scss";
import "materialize-css/dist/js/materialize.min"

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

      header = (
          <nav>
              <div className="nav-wrapper">
                  <span className="brand-logo center">Staticman Comments</span>
              </div>
          </nav>
      );

    return (
      <div>
        {header}
          <div style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: rhythm(24),
              padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}>{children()}</div>
      </div>
    )
  }
}

export default Template
