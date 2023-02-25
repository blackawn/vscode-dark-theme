import fs from 'fs'
import path from 'path'

import getThemeConfig from "./config";
import { colors } from "./colors";

function writeFile() {
  fs.writeFileSync(
    './themes/slate-theme.json',
    `${JSON.stringify(getThemeConfig('slate', {
      name: 'Slate Theme',
      type: 'dark'
    }), null, 2)}\n`,
  )

  fs.writeFileSync(
    './themes/gray-theme.json',
    `${JSON.stringify(getThemeConfig('gray', {
      name: 'Gray Theme',
      type: 'dark'
    }), null, 2)}\n`,
  )

  fs.writeFileSync(
    './themes/zinc-theme.json',
    `${JSON.stringify(getThemeConfig('zinc', {
      name: 'Zinc Theme',
      type: 'dark'
    }), null, 2)}\n`,
  )

  fs.writeFileSync(
    './themes/stone-theme.json',
    `${JSON.stringify(getThemeConfig('stone', {
      name: 'Stone Theme',
      type: 'dark'
    }), null, 2)}\n`,
  )

  fs.writeFileSync(
    './themes/neutral-theme.json',
    `${JSON.stringify(getThemeConfig('neutral', {
      name: 'Neutral Theme',
      type: 'dark'
    }), null, 2)}\n`,
  )
}

function dev(){
  const filePath = path.join(process.env.USERPROFILE, "/AppData/Roaming/Code/User/settings.json");

  const settings = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  
  settings["editor.tokenColorCustomizations"]["textMateRules"] = getThemeConfig().tokenColors;
  //settings["workbench.colorCustomizations"] = getThemeConfig('zinc', 'purple').colors;
  
  fs.writeFileSync(path.join(filePath), JSON.stringify(settings, null, 4), 'utf-8');
}





//dev()
writeFile()