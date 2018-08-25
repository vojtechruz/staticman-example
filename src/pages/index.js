import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import {rhythm} from '../utils/typography'

class BlogIndex extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title')
        const comments = get(this, 'props.data.allCommentsYaml.edges')


        return (
            <div>
                <Helmet title={siteTitle}/>
                {comments.map(({node}) => {
                    return (
                        <div key={node._id}>
                            <p>{node.name}</p>
                            <p>{node.email}</p>
                            <p>{node.message}</p>
                        </div>
                    )
                })}
                <div>
                    <form method="POST"
                          action="https://api.staticman.net/v2/entry/vojtechruz/staticman-example/master/comments">
                        <label><input name="fields[name]" type="text"/>Name</label>
                        <label><input name="fields[email]" type="email"/>E-mail</label>
                        <label><textarea name="fields[message]"></textarea>Message</label>

                        <button type="submit">Submit</button>
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
