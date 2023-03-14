import { colors as c, applyColorOpacity as o } from "./utils/getColors"
import { themeType } from "./utils/getColors"

import getTokenColors from "./config/tokenColors"
import getColors from "./config/colors"
import getSemanticTokenColors from "./config/semanticTokenColors"


export default function getThemeConfig(theme: themeType = 'dark', property: any = {}, color: string = 'violet') {

  return {
    ...property,
    "colors": getTokenColors(theme, color),
    "tokenColors": getColors(theme, color)
  }
}