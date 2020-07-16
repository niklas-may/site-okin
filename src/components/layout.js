import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import SEO from "../components/seo"
import Header from "./header"
import "../css/normalize.css"
// import "../css/webflow.css"
import "../css/layout.css"
// import webflow from "../webflow.js"

const Layout = ({ children, title, nav, className }) => {
  const data = useStaticQuery(graphql`
    {
      allSite {
        nodes {
          siteMetadata {
            description
            keywords
            author
            siteName
          }
        }
      }
      allFile(filter: {childImageSharp: {fixed: {originalName: {eq: "og-Image.png"}}}}) {
        nodes {
          childImageSharp {
            fixed {
              src
            }
          }
        }
      }
    }
  `)

  const {
    siteName,
    keywords,
    description,
    author,
  } = data.allSite.nodes[0].siteMetadata

  const {src} = data.allFile.nodes[0].childImageSharp.fixed

  return (
    <div className="main-wrapper">
      <SEO
        title={title}
        siteName={siteName}
        keywords={keywords}
        description={description}
        author={author}
        ogImage={src}
        lang="de"
      />
      <main className={className} >
        {children}
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
