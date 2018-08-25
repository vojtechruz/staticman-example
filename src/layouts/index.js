import React from 'react'
import { rhythm, scale } from '../utils/typography'
import "./index.scss";

class Template extends React.Component {

    componentDidMount() {
        try {
            require("materialize-css/dist/js/materialize");
        } catch (e) {
            console.error(e);
        }
    }

    render() {
    const { location, children } = this.props
    let header = (
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
