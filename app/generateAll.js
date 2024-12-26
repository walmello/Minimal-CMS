import fs from 'fs';
//import parser from "./tree-parser/index.js";

const base = "https://minimal-cms-tests.netlify.app"
const entries = fs.readdirSync('./public').filter(entry => {
  return !['admin', 'index.html'].includes(entry)
})

entries.forEach(entry => {
  const result = []

  const subentries = fs.readdirSync(`./public/${entry}`).filter(entry => {
  return !['index.json'].includes(entry)
})
  subentries.forEach(subentry => {
    const [slug , type] = subentry.split('.')

    if(type === 'json'){
      const content = JSON.parse(fs.readFileSync(`./public/${entry}/${subentry}`, 'utf-8'))
      result.push({path: subentry, slug , ...content})
      //console.log(subentry)
    } else {
      result.push(subentry)
    }
  })
  fs.writeFileSync(`./public/${entry}/index.json`, JSON.stringify(result, null, 2))
})