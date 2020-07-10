const path = require(`path`)
const visit = require("unist-util-visit")

module.exports = ({markdownAST, markdownNode, getNodes, getNode}) => {

  // Fix images in markdown body
  visit(markdownAST, "image",  node => {
    const { url } = node
    const baseName = path.basename(url) 

    // Find the original node implemented by the gatsby-source-dropbox
    const rootNode = getNodes().filter(node => node.internal.type === 'dropboxMarkdown' && node.localFile___NODE === markdownNode.parent)[0]

    if(rootNode) {
      const { directory } = rootNode

      // Find the image node that matches the basename and that was stored in the same directory on the dropbox
      const dropboxImageNode = getNodes().filter(node => node.internal.type === 'dropboxImage' && node.directory === directory && node.name === baseName)[0]

      if(dropboxImageNode) {
        const { localFile___NODE } = dropboxImageNode
  
        const localFile = getNode(localFile___NODE)
        const { absolutePath } = localFile
  
        // chang the path to be relative and make it point one level up
        const urlModified = `..${absolutePath.split("gatsby-source-dropbox").pop()}`
        node.url = urlModified
      } else {
        console.warn(`gatsby-remark-dropbox-images: Can't find dropboxImage for ${node.url} in ${rootNode.path}`)
      }
    }
  })

  return markdownAST
}
