import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import favicon from '../images/gatsby-icon.ico'

function SEO({title, siteName, keywords, description, author, lang, ogImage}) {

  return (
    <Helmet
      htmlAttributes={{
        language: lang,
      }}
      title={siteName}
      titleTemplate={title && `%s | ${title}`}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          name: `keywords`,
          content: keywords,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:image`,
          content: ogImage,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ]}
    >
      <link rel="icon" href={favicon} />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
