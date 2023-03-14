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


export default function getColors(theme: themeType = 'dark', color: string = 'violet') {

  const config = [
    {
      "scope": [
        "punctuation",
        "meta.brace",
        "storage.type.function.arrow",
        "keyword.operator",
        "meta.block",
        "punctuation.definition.entity.css",
        "punctuation.definition.entity.begin.bracket.square.css",
        "punctuation.definition.entity.end.bracket.square.css"
      ],
      "settings": {
        "foreground": t[theme].c2
      }
    },
    {
      "scope": [
        "keyword.control",
        "storage.type",
        "storage.modifier",
        "constant.language",
        "variable.language",
        "keyword.operator.new",
        "keyword.operator.expression",
        "keyword.other.important.css"
      ],
      "settings": {
        "foreground": "#C975AF"
      }
    },
    {
      "scope": [
        "meta.definition.variable",
        "variable.other.readwrite",
        "variable.other.object",
        "meta.embedded.expression",
        "entity.other.attribute-name.class.css",
        "entity.name.tag.css",
        "entity.other.attribute-name.css"
      ],
      "settings": {
        "foreground": "#A889C7"
      }
    },
    {
      "scope": [
        "constant.numeric",
      ],
      "settings": {
        "foreground": "#61AD86"
      }
    },
    {
      "scope": [
        "string",
        "punctuation.definition.string",
        "variable.css"
      ],
      "settings": {
        "foreground": "#1AA38F"
      }
    },
    {
      "scope": [
        "comment",
        "punctuation.definition.comment"
      ],
      "settings": {
        "foreground": t[theme].c4
      }
    },
    {
      "scope": [
        "entity.name.function",
        "entity.name.type.class",
        "meta.property-value.css"
      ],
      "settings": {
        "foreground": "#7A89F0"
      }
    },
    {
      "scope": [
        "variable.parameter",
        "entity.other.keyframe-offset.css",
        "entity.other.keyframe-offset.percentage.css"
      ],
      "settings": {
        "foreground": "#C7814C"
      }
    },
    {
      "scope": [
        "meta.object-literal.key",
        "variable.other.property",
        "support.variable.property",
        "meta.object-binding-pattern-variable",
        "meta.interface",
        "meta.type",
        "variable.other.enummember",
        "variable.other.constant.property",
        "support.type.property-name.css",
        "support.type.property-name.media.css",
        "support.type.vendored.property-name.css",
        "entity.other.attribute-name.pseudo-element.css"
      ],
      "settings": {
        "foreground": "#2E9AD0"
      }
    },
    {
      "scope": [
        "entity.name.tag",
      ],
      "settings": {
        "foreground": "#D97189"
      }
    },
    {
      "scope": [
        "support.type.primitive",
        "entity.name.type",
        "meta.parameters",
        "entity.other.attribute-name.pseudo-class.css"
      ],
      "settings": {
        "foreground": "#BF8286"
      }
    },
    {
      "scope": [
        "entity.other.attribute-name",
      ],
      "settings": {
        "foreground": t[theme].c2
      }
    },
    {
      "scope": [
        "text.html.derivative",
        "meta.jsx.children"
      ],
      "settings": {
        "foreground": t[theme].c0
      }
    },
    {
      "scope": [
        "punctuation.definition.entity",
        "constant.character.entity",
      ],
      "settings": {
        "foreground": '#6FA125'
      }
    },
    {
      "scope": [
        "support.class",
        "variable.other.constant.object",
      ],
      "settings": {
        "foreground": "#BA936E"
      }
    },
    {
      "scope": [
        "support.class.component"
      ],
      "settings": {
        "foreground": "#689FC4"
      }
    }
  ]
  return config

}