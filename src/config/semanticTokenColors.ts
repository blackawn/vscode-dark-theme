import { colors as c, applyColorOpacity as o } from "../utils/getColors"
import { themeType } from "../utils/getColors"


const t = {
  'dark': {
    "c9": '#2a2b2a',
    "c8": '#3a3b3a',
    "c7": '#4a4b4a',
    "c6": '#5a5b5a',
    "c5": '#6a6b6a',
    "c4": '#7a7b7a',
    "c3": '#8a8b8a',
    "c2": '#9a9b9a',
    "c1": '#aaabaa',
    "c0": '#bababa',
  }
}


export default function getSemanticTokenColors(theme: themeType = 'dark', color: string = 'violet') {
  return {
    "newOperator": "#C586C0",
    "stringLiteral": "#ce9178",
    "customLiteral": "#DCDCAA",
    "numberLiteral": "#b5cea8",
    "component": "#ff00ff",
  }
}
