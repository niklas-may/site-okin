
import React, { useState } from "react"
import Img from "gatsby-image"

const ProjectSection = ({projects}) => {

  const getName = folderName => {
    const identifier = "Project "
    const startIndex = folderName.indexOf(identifier) + identifier.length
    const name = folderName.substring(startIndex, folderName.length)
    return name
  }

  const [selected, setSelected] = useState(null)

  const handleSelect = name => {
    const newSelected = name !== selected ? name : null 
    setSelected(newSelected)
  }

  const renderProject = project => (
    <section className="project-wrapper" style={{ marginBottom: "3vw"}} key={project.name}>
      <header style={{marginTop: "10px"}}>
      <div className="wrapper-text">
        <div className="bullet-point" />
        <div className="projects-wrapper">
          <div className="tagline-projects">
            <div className="type">{project.dropboxMarkdown[0].localFile.childMarkdownRemark.frontmatter.type}</div><div className="text-block">/</div>
            <div className="type">{project.dropboxMarkdown[0].localFile.childMarkdownRemark.frontmatter.client}</div><div className="text-block">/</div>
            <div className="type">{project.dropboxMarkdown[0].localFile.childMarkdownRemark.frontmatter.location}</div><div className="text-block">/</div>
            <div className="type">{project.dropboxMarkdown[0].localFile.childMarkdownRemark.frontmatter.year}</div>
          </div>
          <h2
            data-name={project.name}
            className="project-name"
            onClick={() => handleSelect(project.name)}
          >
            {getName(project.name)}
          </h2>
        </div>
      </div>
      </header>
      <div className="project-content" style={{ paddingTop: "3vw", paddingLeft: "8.75vw", display: selected === project.name ? "block" : "none" }}>
        <span className="project-description" dangerouslySetInnerHTML={{__html: project.dropboxMarkdown[0].localFile.childMarkdownRemark.html}}/>
          <div style={{display: "block", overflow: "scroll", whiteSpace: "nowrap", height: "33.5vw"}}>
            {
              project.dropboxImage.sort((a, b) => b.localFile.childImageSharp.fluid.originalName > a.localFile.childImageSharp.fluid.originalName  ? -1 : 1).map(image => (
                <Img
                  fluid={image.localFile.childImageSharp.fluid}
                  style={{width: `${image.localFile.childImageSharp.fluid.aspectRatio * 33}vw`, height: "33vw", display: "inline-block", marginRight: "10vw"}}
                  key={image.localFile.childImageSharp.fluid.originalName}
                  backgroundColor="#f5bdbd"
                />
              ))
            }
        </div>
      </div>
    </section>
  )

  return (
    <div id="projects" className="projects">
      {/* <div className="hover-image-wrapper w-clearfix"><img src="images/Bildschirmfoto-2020-02-13-um-09.10.32.png" srcSet="images/Bildschirmfoto-2020-02-13-um-09.10.32-p-500.png 500w, images/Bildschirmfoto-2020-02-13-um-09.10.32.png 560w" sizes="100vw" alt className="preview-image" /><img src="images/Bildschirmfoto-2020-02-13-um-09.10.32.png" srcSet="images/Bildschirmfoto-2020-02-13-um-09.10.32-p-500.png 500w, images/Bildschirmfoto-2020-02-13-um-09.10.32.png 560w" sizes="100vw" alt className="preview-image" /></div> */} 
      {
        projects.map(project => renderProject(project))
      }
    </div>
  )
}

export default ProjectSection

