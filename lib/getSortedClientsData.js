import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const clientsDirectory = path.join(process.cwd(), 'data/clients')

export function getSortedClientsData() {
  // Get file names under /data/clients
  const fileNames = fs.readdirSync(clientsDirectory)
  const allClientsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(clientsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      contentHtml: matterResult.content,
      ...matterResult.data
    }
  })
  // Sort posts by date
  return allClientsData.sort((a, b) => {
    if (a.order > b.order) {
      return 1
    } else {
      return -1
    }
  })
}
