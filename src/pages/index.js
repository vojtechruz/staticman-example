import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import moment from 'moment';

import {rhythm} from '../utils/typography'

class BlogIndex extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title')
        const comments = get(this, 'props.data.allCommentsYaml.edges')

        return (
            <div>
                <Helmet title={siteTitle}/>
                {comments.map(({node}) => {
                    const dateString = moment.unix(node.date).format("DD.MM.YYYY HH:mm")
                    return (
                        <div className="row" key={node._id}>
                            <div className="card">
                                    <div className="card-content">
                                        <div className="card-title">
                                            <span className="name"> {node.name}</span>
                                            <span className="email">&lt;{node.email}&gt;</span>
                                            <span className="date">{dateString}</span>
                                        </div>
                                    </div>
                                <div className="card-action">
                                    <p>{node.message}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div>
                    <form method="POST"
                          action="https://api.staticman.net/v2/entry/vojtechruz/staticman-example/master/comments">
                        <input name="options[redirect]" type="hidden" value="https://staticman-example.netlify.com/"/>

                        <div className="row">
                            <div className="input-field col s12">
                                <input id="name" name="fields[name]" type="text" className="validate"/>
                                <label htmlFor="name">Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" name="fields[email]" type="text" className="validate"/>
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="message" name="fields[message]" type="text" className="validate"/>
                                <label htmlFor="message">Message</label>
                            </div>
                        </div>
                        <div className="row">
                            <button type="submit" className="waves-effect waves-light btn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default BlogIndex

export const pageQuery = graphql`
    query IndexQuery {
        site {
        siteMetadata {
        title
    }
    }
        allCommentsYaml {
        edges {
        node {
        _id
        name
        email
        message
        date
    }
    }
    }
    }
    `
