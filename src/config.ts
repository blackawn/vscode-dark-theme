import { colors as c, appalyColorOpacity as o } from "./colors"

export declare type themeType = 'slate' | 'gray' | 'zinc' | 'stone' | 'neutral'


const themes = {
  "slate": {
    "c9": c.slate[900],
    "c8": c.slate[800],
    "c7": c.slate[700],
    "c6": c.slate[600],
    "c5": c.slate[500],
    "c4": c.slate[400],
    "c3": c.slate[300],
    "c2": c.slate[200],
    "c1": c.slate[100],
    "c0": c.slate[50]
  },
  "gray": {
    "c9": c.gray[900],
    "c8": c.gray[800],
    "c7": c.gray[700],
    "c6": c.gray[600],
    "c5": c.gray[500],
    "c4": c.gray[400],
    "c3": c.gray[300],
    "c2": c.gray[200],
    "c1": c.gray[100],
    "c0": c.gray[50]
  },
  "zinc": {
    "c9": c.zinc[900],
    "c8": c.zinc[800],
    "c7": c.zinc[700],
    "c6": c.zinc[600],
    "c5": c.zinc[500],
    "c4": c.zinc[400],
    "c3": c.zinc[300],
    "c2": c.zinc[200],
    "c1": c.zinc[100],
    "c0": c.zinc[50]
  },
  "stone": {
    "c9": c.stone[900],
    "c8": c.stone[800],
    "c7": c.stone[700],
    "c6": c.stone[600],
    "c5": c.stone[500],
    "c4": c.stone[400],
    "c3": c.stone[300],
    "c2": c.stone[200],
    "c1": c.stone[100],
    "c0": c.stone[50]
  },
  "neutral": {
    "c9": c.neutral[900],
    "c8": c.neutral[800],
    "c7": c.neutral[700],
    "c6": c.neutral[600],
    "c5": c.neutral[500],
    "c4": c.neutral[400],
    "c3": c.neutral[300],
    "c2": c.neutral[200],
    "c1": c.neutral[100],
    "c0": c.stone[50]
  }
}

export default function getThemeConfig(theme: themeType = 'zinc', property: any = {}, color: string = 'violet') {

  return {
    ...property,
    "colors": {

      "titleBar.activeBackground": themes[theme].c9,
      "titleBar.border": themes[theme].c8,

      "activityBar.background": themes[theme].c9,
      "activityBar.border": themes[theme].c8,
      "activityBar.activeBorder": c[color][500],
      "activityBar.foreground": c[color][500],
      "activityBarBadge.foreground": c[color][50],
      "activityBar.inactiveForeground": themes[theme].c4,
      "activityBarBadge.background": c[color][500],

      "sideBar.background": themes[theme].c9,
      "sideBar.border": themes[theme].c8,
      "sideBarSectionHeader.border": themes[theme].c8,

      "editorGroupHeader.tabsBackground": themes[theme].c9,
      "editorGroupHeader.border": themes[theme].c8,

      "tab.border": themes[theme].c8,
      "tab.activeBackground": themes[theme].c9,
      "tab.activeBorder": c[color][500],
      "tab.activeForeground": c[color][500],
      "tab.inactiveForeground": themes[theme].c4,
      "tab.inactiveBackground": themes[theme].c9,

      "breadcrumb.background": themes[theme].c9,

      "scrollbar.shadow": c.transparent,

      "editor.background": themes[theme].c9,
      "editor.selectionBackground": o(c[color][100], 20),
      "editor.wordHighlightStrongBackground": o(c[color][100], 10),
      "editor.selectionHighlightBackground": o(c[color][100], 20),
      "editorLineNumber.foreground": themes[theme].c6,
      "editorLineNumber.activeForeground": themes[theme].c4,
      "editor.lineHighlightBorder": c.transparent,

      "panel.background": themes[theme].c9,
      "panel.border": themes[theme].c8,

      "panelTitle.activeBorder": c[color][500],
      "panelTitle.activeForeground": c[color][500],
      "panelTitle.inactiveForeground": themes[theme].c4,

      "statusBar.background": themes[theme].c9,
      "statusBar.border": themes[theme].c8,
      "statusBarItem.remoteBackground": c[color][500],
      "statusBarItem.remoteForeground": c[color][50],

      "scrollbarSlider.background": themes[theme].c7,
      "scrollbarSlider.hoverBackground": themes[theme].c7,
      "scrollbarSlider.activeBackground": themes[theme].c7,

      "menu.selectionBackground": o(c.white as string, 10),
      "menu.background": themes[theme].c8,
      "menu.border": themes[theme].c7,
      "menu.foreground": themes[theme].c4,

      "list.activeSelectionBackground": o(c.white as string, 10),
      "list.inactiveSelectionBackground": o(c.white as string, 10),
      "list.hoverBackground": o(c.white as string, 10),
      "list.errorForeground": c.pink[600],

      "sash.hoverBorder": c.transparent,

      "focusBorder": c.transparent,

      "input.background": themes[theme].c7,

      "dropdown.listBackground": themes[theme].c7,
      "dropdown.background": themes[theme].c7
    },
    "tokenColors": [
      {
        "name": "symbol",
        "scope": [
          "",
          "punctuation.separator",
          "keyword.operator",
          "storage.type.function.arrow",
          "meta.embedded",
          "punctuation.definition.tag",
          "meta.brace.square",
          "invalid.illegal.character-not-allowed-here.html"
        ],
        "settings": {
          "foreground": themes[theme].c5
        }
      },
      {
        "name": "variable",
        "scope": [
          "variable.other.readwrite",
          "variable.other.constant",
          "variable.object.property",
          "variable.other.object"
        ],
        "settings": {
          "foreground": o(c.violet[400], 85)
        }
      },
      {
        "name": "variable property",
        "scope": [
          "variable.other.property",
          "variable.other.constant.property",
          "support.variable.property",
          "variable.other.object.property",
          "meta.object-literal.key",
          "variable.other.enummember"
        ],
        "settings": {

          "foreground": o(c.sky[500], 90)
        }
      },
      {
        "name": "variable parameter",
        "scope": [
          "variable.parameter",
          "variable.other.jsdoc"
        ],
        "settings": {
          "foreground": o(c.cyan[500], 90)
        }
      },
      {
        "name": "function name",
        "scope": [
          "entity.name.function"
        ],
        "settings": {
          "foreground": o(c.blue[500], 90)
        }
      },
      {
        "name": "lib function",
        "scope": [
          "support.function",
        ],
        "settings": {
          "foreground": o(c.orange[400], 85)
        }
      },
      {
        "name": "number",
        "scope": [
          "constant.numeric",
        ],
        "settings": {
          "foreground": o(c.emerald[500], 90)
        }
      },
      {
        "name": "string",
        "scope": [
          "string",
        ],
        "settings": {
          "foreground": o(c.teal[500], 90)
        }
      },
      {
        "name": "string character",
        "scope": [
          "constant.character"
        ],
        "settings": {
          "foreground": o(c.lime[500], 85)
        }
      },
      {
        "name": "regexp",
        "scope": [
          "string.regexp"
        ],
        "settings": {
          "foreground": o(c.amber[500], 85)
        }
      },
      {
        "name": "regexp group",
        "scope": [
          "punctuation.definition.group.regexp",
        ],
        "settings": {
          "foreground": themes[theme].c5
        }
      },
      {
        "name": "regexp escape",
        "scope": [
          "punctuation.definition.character-class.regexp",
        ],
        "settings": {
          "foreground": themes[theme].c5
        }
      },
      {
        "name": "regexp anchor",
        "scope": [
          "keyword.control.anchor.regexp",
        ],
        "settings": {
          "foreground": o(c.rose[500], 85)
        }
      },
      {
        "name": "regexp character",
        "scope": [
          "constant.character.escape",
        ],
        "settings": {
          "foreground": o(c.fuchsia[500], 90)
        }
      },
      {
        "name": "regexp or",
        "scope": [
          "keyword.operator.or.regexp"
        ],
        "settings": {
          "foreground": themes[theme].c5
        }
      },
      {
        "name": "regexp class",
        "scope": [
          "constant.other.character-class.regexp",
        ],
        "settings": {
          "foreground": o(c.lime[500], 85)
        }
      },
      {
        "name": "regexp quantifier",
        "scope": [
          "keyword.operator.quantifier.regexp"
        ],
        "settings": {
          "foreground": o(c.sky[500], 90)
        }
      },
      {
        "name": "regexp set",
        "scope": [
          "constant.other.character-class.set.regexp"
        ],
        "settings": {
          "foreground": o(c.emerald[500], 90)
        }
      },
      {
        "name": "string template symbol",
        "scope": [
          "punctuation.definition.template-expression.begin",
          "punctuation.definition.template-expression.end",
          "punctuation.section.embedded.begin",
          "punctuation.section.embedded.end"
        ],
        "settings": {
          "foreground": o(themes[theme].c4, 85)
        }
      },
      {
        "name": "comment",
        "scope": [
          "comment",
        ],
        "settings": {
          "foreground": themes[theme].c5
        }
      },
      {
        "name": "keyword",
        "scope": [
          "keyword.control",
          "storage.type",
          "storage.modifier",
          "variable.language",
          "constant.language",
          "keyword.operator.expression",
          "keyword.operator.new"
        ],
        "settings": {
          "foreground": o(c.pink[400], 80)
        }
      },
      {
        "name": "support type",
        "scope": [
          "support.type",
          "entity.name.type",
          "entity.name.type.interface",
          "entity.other.inherited-class"
        ],
        "settings": {
          "foreground": o(c.fuchsia[300], 70)
        }
      },
      {
        "name": "support function",
        "scope": [
          "support.class"
        ],
        "settings": {
          "foreground": o(c.fuchsia[300], 70)
        }
      },
      {
        "name": "tag",
        "scope": [
          "entity.name.tag",
          "support.class.component"
        ],
        "settings": {
          "foreground": o(c.rose[400], 80)
        }
      },
      {
        "name": "tag attribute",
        "scope": [
          "punctuation.separator.key-value.html",
          "text.html.derivative",
          "meta.jsx.children",
          "entity.other.attribute-name",
        ],
        "settings": {
          "foreground": o(themes[theme].c3, 75)
        }
      },
      {
        "name": "tag attribute value",
        "scope": [
          "string.quoted.double.html",
          "string.quoted.single.html"
        ],
        "settings": {
          "foreground": o(c.cyan[500], 90)
        }
      }
    ]
  }
}