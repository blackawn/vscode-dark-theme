import fs from 'fs'
import path from 'path'

import getThemeConfig from "./index";

function writeFile() {

  ['violet', 'indigo', 'blue'].forEach((color) => {
    fs.writeFileSync(
      `./themes/theme-${color}.json`,
      `${JSON.stringify(getThemeConfig('dark', {
        name: `Theme ${color.charAt(0).toUpperCase() + color.slice(1)}`,
        type: 'dark'
      }, color), null, 2)}\n`,
    )
  })
}

writeFile()