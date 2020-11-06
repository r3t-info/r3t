import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const dataDirectory = path.join(process.cwd(), 'data')

export function getDataByFileName(fileName) {

  const fullPath = path.join(dataDirectory, `${fileName}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');

  const matterResult = matter(fileContents);

  return {
    contentHtml: matterResult.content ? matterResult.content : null, 
    ...matterResult.data
  }

}
