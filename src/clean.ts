import fs from 'fs'
import path from 'path'

import getThemeConfig from "./index";

function clean(){
  const filePath = path.join(process.env.USERPROFILE, "/AppData/Roaming/Code/User/settings.json");

  const settings = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  
  settings["editor.tokenColorCustomizations"] = {
    "textMateRules": []
  }
  settings["workbench.colorCustomizations"] = {}
  settings["editor.semanticTokenColorCustomizations"] = {
    "enabled": false,
    "rules": {}
  }
  
  fs.writeFileSync(path.join(filePath), JSON.stringify(settings, null, 4), 'utf-8');
}

clean()
