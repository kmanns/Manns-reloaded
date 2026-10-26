// biome-ignore lint/suspicious/noShadowRestrictedNames: mdast's toString, same as the other remark plugins
import { toString } from 'mdast-util-to-string'

/*
 * The post page renders the title as the page's only <h1>, so:
 * - drop a leading "# Title" that repeats the frontmatter title;
 * - demote any other "# Heading" in the body to "## Heading".
 */
export function remarkDropTitleHeading() {
  return (tree, file) => {
    const title = file.data.astro?.frontmatter?.title
    const first = tree.children.find(node => node.type !== 'yaml')
    if (
      title &&
      first?.type === 'heading' &&
      first.depth === 1 &&
      toString(first).trim() === String(title).trim()
    ) {
      tree.children.splice(tree.children.indexOf(first), 1)
    }
    for (const node of tree.children) {
      if (node.type === 'heading' && node.depth === 1) node.depth = 2
    }
  }
}
