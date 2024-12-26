import fs from 'fs'
import yaml from 'js-yaml'
import config from '../config.js'
import blog from './collections/blog.js'
import events from './collections/events.js'

const CMSconfig = {
  "backend": {
    "name": "git-gateway",
    "branch": "main"
  },
  "media_folder": "src/uploads",
  "public_folder":  config.url + "/uploads",
  "collections": [blog, events]
}

fs.writeFileSync('src/admin/config.yml',yaml.dump(CMSconfig))
