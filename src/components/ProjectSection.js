
import React from "react"
import Img from "gatsby-image"

const ProjectSection = ({projects}) => {
  const projectsFiltered = projects.map(project => project.nodes[0])
    .filter(project => project.dropboxImage && project.dropboxMarkdown)

  const getName = folderName => {
    const identifier = "project_"
    const startIndex = folderName.indexOf(identifier) + identifier.length
    const name = folderName.substring(startIndex, folderName.length-1)
    return name
  }

  console.log("ProjectSection -> projectsFiltered", projectsFiltered)

  
  return (
    <div id="projects" className="projects">
      {/* <div className="hover-image-wrapper w-clearfix"><img src="images/Bildschirmfoto-2020-02-13-um-09.10.32.png" srcSet="images/Bildschirmfoto-2020-02-13-um-09.10.32-p-500.png 500w, images/Bildschirmfoto-2020-02-13-um-09.10.32.png 560w" sizes="100vw" alt className="preview-image" /><img src="images/Bildschirmfoto-2020-02-13-um-09.10.32.png" srcSet="images/Bildschirmfoto-2020-02-13-um-09.10.32-p-500.png 500w, images/Bildschirmfoto-2020-02-13-um-09.10.32.png 560w" sizes="100vw" alt className="preview-image" /></div> */}
     
      {
        projectsFiltered.map(project => (
          <div data-delay={0} className="dropdown w-dropdown" key={project.name}>
            <div className="dropdown-toggle w-dropdown-toggle">
              <div className="list-wrapper">
                <div className="wrapper-text">
                  <div className="bullet-point" />
                  <div className="projects-wrapper">
                    <div className="tagline-projects">
                      <div className="type">{project.dropboxMarkdown[0].localFile.childMarkdownRemark.frontmatter.type}</div><div className="text-block">/</div>
                      <div className="type">{project.dropboxMarkdown[0].localFile.childMarkdownRemark.frontmatter.client}</div><div className="text-block">/</div>
                      <div className="type">{project.dropboxMarkdown[0].localFile.childMarkdownRemark.frontmatter.location}</div><div className="text-block">/</div>
                      <div className="type">{project.dropboxMarkdown[0].localFile.childMarkdownRemark.frontmatter.year}</div>
                    </div>
                    <h2 className="project-name">{getName(project.name)}</h2>
                  </div>
                </div>
              </div>
            </div>
            <nav className="dropdown-list w-dropdown-list">
              <p className="project-description">Reconstruction of a flat with a long and narrow vestibule and connected rooms into a affordable housing with two private rooms, a small kitchen and still a long vestibule. To realise the project we had to use simple but solid materials and clever storage solutions.<br />‍<br />‍Project partner: Ben Klages, Max Messner</p>
              <div className="horizontal-image-scroll">
                {
                  project.dropboxImage.map(image => (
                    <Img fluid={image.localFile.childImageSharp.fluid} className="project-image" />
                  ))
                }
              </div>
            </nav>
          </div>
        ))
      }
    </div>
  )
}

export default ProjectSection

