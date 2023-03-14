import fs from 'fs'
import path from 'path'

import getThemeConfig from ".";

function dev(){
  const filePath = path.join(process.env.USERPROFILE, "/AppData/Roaming/Code/User/settings.json");

  const settings = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  
  settings["editor.tokenColorCustomizations"] = {
    "textMateRules": getThemeConfig('dark', {}, 'violet').tokenColors
  }
  settings["workbench.colorCustomizations"] = getThemeConfig('dark', {}, 'teal').colors;
  settings["editor.semanticTokenColorCustomizations"] = {
    "enabled": true,
    "rules": getThemeConfig('dark', {}, 'violet').getSemanticTokenColors
  }
  
  fs.writeFileSync(path.join(filePath), JSON.stringify(settings, null, 4), 'utf-8');
}

dev()
