# Learning React With TypeScript

## Why

Learning JavaScript vs. TypeScript?

* [Should I learn JavaScript before learning TypeScript? - Quora](https://www.quora.com/Should-I-learn-JavaScript-before-learning-TypeScript)
* [[Question] How helpful is it to learn Javascript before Typescript? : typescript](https://www.reddit.com/r/typescript/comments/9kr4e0/question_how_helpful_is_it_to_learn_javascript/)

Is is worth it?

* [How to use TypeScript with React... But should you? - YouTube](https://www.youtube.com/watch?v=ydkQlJhodio&t=15s)

## Roadmap

## Resources

* [React – A JavaScript library for building user interfaces](https://reactjs.org/)
  * [Tutorial: Intro to React – React](https://reactjs.org/tutorial/tutorial.html)
  * [Getting Started – React](https://reactjs.org/docs/getting-started.html)

### Tutorial

* [React Typescript Tutorial - YouTube](https://www.youtube.com/watch?v=Z5iWr6Srsj8): already familiar with React and want to transfer to TypeScript
  * props
  * hooks
  * render props
* [React TypeScript Tutorial for Beginners - YouTube Playlist](https://www.youtube.com/playlist?list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK)

> * [How to Create a Flask + React Project | Python Backend + React Frontend - YouTube](https://www.youtube.com/watch?v=7LNl2JlZKHA)

---

## Visual Studio Code

* [VSCode - Create Files and Folders without using mouse - DEV Community 👩‍💻👨‍💻](https://dev.to/equiman/vscode-create-files-and-folders-on-the-go-2hd6)
* [How to create file in current explorer directory in vs code using only keys? - Stack Overflow](https://stackoverflow.com/questions/48203523/how-to-create-file-in-current-explorer-directory-in-vs-code-using-only-keys)

`keybindings.json`

* [Visual Studio Code Key Bindings](https://code.visualstudio.com/docs/getstarted/keybindings#_advanced-customization)

> open the `keybindings.json` file from the Command Palette (Ctrl+Shift+P) with the Preferences: Open Keyboard Shortcuts (JSON) command

```json
[
  {
    "key": "f",
    "command": "explorer.newFile",
    "when": "explorerViewletFocus && !inputFocus"
  },
  {
    "key": "d",
    "command": "explorer.newFolder",
    "when": "explorerViewletFocus && !inputFocus"
  },
  {
    "key": "x",
    "command": "deleteFile",
    "when": "explorerViewletFocus && !inputFocus"
  },
  {
    "key": "r",
    "command": "renameFile",
    "when": "explorerViewletVisible && filesExplorerFocus && !explorerResourceIsRoot && !explorerResourceReadonly && !inputFocus"
  },
  {
    "key": "enter",
    "command": "list.select",
    "when": "listFocus && !inputFocus"
  },
  {
    "key": "o",
    "command": "list.select",
    "when": "listFocus && !inputFocus"
  }
]
```
