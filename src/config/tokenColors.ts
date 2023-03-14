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


export default function getTokenColors(theme: themeType = 'dark', color: string = 'violet') {
  return {
    "focusBorder": c.transparent,
    "foreground": t[theme].c1,
    "icon.foreground": t[theme].c1,
    "selection.background": t[theme].c5,
    "sash.hoverBorder": c.transparent,

    "textLink.activeForeground": c[color][400],
    "textLink.foreground": c[color][500],
 
    "toolbar.hoverBackground": t[theme].c7,

    "button.background": c[color][500],
    "button.foreground": c[color][200],
    "button.hoverBackground": c[color][400],
    "checkbox.foreground": t[theme].c1,

    "dropdown.background": t[theme].c7,
    "dropdown.listBackground": t[theme].c7,
    "dropdown.foreground": t[theme].c0,

    "input.background": t[theme].c7,
    "inputOption.activeBackground": c[color][500],
    "inputOption.activeBorder": c[color][500],
    "inputOption.activeForeground": c[color][200],
    "inputOption.hoverBackground": t[theme].c5,

    "scrollbar.shadow": c.transparent,
    "scrollbarSlider.activeBackground": t[theme].c6,
    "scrollbarSlider.background": t[theme].c7,
    "scrollbarSlider.hoverBackground": t[theme].c6,

    "badge.foreground": c[color][200],
    "badge.background": c[color][500],

    "progressBar.background": c[color][500],

    "list.activeSelectionBackground": o(t[theme].c0, 20),
    "list.activeSelectionForeground": t[theme].c0,
    "list.activeSelectionIconForeground": t[theme].c0,
    "list.hoverBackground": o(t[theme].c0, 10),
    "list.inactiveSelectionBackground": o(t[theme].c0, 10),

    "activityBar.background": t[theme].c9,
    "activityBar.foreground": c[color][500],
    "activityBar.inactiveForeground": t[theme].c2,
    "activityBar.border": t[theme].c8,
    "activityBarBadge.background": c[color][500],
    "activityBarBadge.foreground": c[color][200],
    "activityBar.activeBorder": c[color][500],

    "sideBar.background": t[theme].c9,
    "sideBar.border": t[theme].c8,
    "sideBarSectionHeader.border": t[theme].c8,

    "editorGroupHeader.border": t[theme].c8,   
    "editorGroupHeader.tabsBackground": t[theme].c9,

    "tab.activeBackground": t[theme].c9,
    "tab.activeForeground": c[color][500],
    "tab.border": t[theme].c8,
    "tab.activeBorder": c[color][500],
    "tab.inactiveBackground": t[theme].c9,
    "tab.inactiveForeground": t[theme].c1,

    "editor.background": t[theme].c9,
    "editorLineNumber.foreground": t[theme].c6,
    "editorLineNumber.activeForeground": t[theme].c1,
    "editor.selectionBackground": o(c[color][100], 20),
    "editor.selectionHighlightBackground": o(c[color][100], 20),
    "editor.wordHighlightStrongBackground": o(c[color][100], 10),
    "editor.lineHighlightBorder": c.transparent,

    "editorWidget.background": t[theme].c8,
    "editorWidget.border": t[theme].c8,
    "editorSuggestWidget.foreground": t[theme].c1,
    "editorSuggestWidget.highlightForeground": c[color][400],
    "editorSuggestWidget.focusHighlightForeground": c[color][300],
    "editorSuggestWidget.selectedForeground": c[color][100],
    "editorSuggestWidget.selectedIconForeground": c[color][300],

    "panel.background": t[theme].c9,
    "panel.border": t[theme].c8,
    "panelTitle.activeBorder": c[color][500],
    "panelTitle.activeForeground": c[color][500],
    "panelTitle.inactiveForeground": t[theme].c1,

    "statusBar.background": t[theme].c9,
    "statusBar.foreground": t[theme].c1,
    "statusBar.border": t[theme].c8,
    "statusBar.debuggingBackground": t[theme].c9,
    "statusBar.debuggingBorder": c['orange'][500],
    "statusBar.noFolderBackground": t[theme].c9,
    "statusBar.noFolderBorder": c['fuchsia'][500],
    "statusBarItem.remoteBackground": c[color][500],
    "statusBarItem.remoteForeground": c[color][200],
    "statusBarItem.hoverBackground": t[theme].c7,

    "titleBar.activeBackground": t[theme].c9,
    "titleBar.activeForeground": t[theme].c1,
    "titleBar.border": t[theme].c8,

    "menu.foreground": t[theme].c1,
    "menu.background": t[theme].c8,
    "menu.border": t[theme].c8,

    "terminal.foreground": t[theme].c1,

    "settings.headerForeground": t[theme].c0,
    "settings.dropdownForeground": t[theme].c0,
    
    "breadcrumb.background": t[theme].c9
  }
}
