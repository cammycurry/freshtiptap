import { useEditor, EditorContent } from "@tiptap/react"
// import Document from "@tiptap/extension-document"
// import Paragraph from "@tiptap/extension-paragraph"
import Text from "@tiptap/extension-text"

import Heading from "@tiptap/extension-heading"
import ListItem from "@tiptap/extension-list-item"
import BulletList from "@tiptap/extension-bullet-list"
import OrderedList from "@tiptap/extension-ordered-list"

import History from "@tiptap/extension-history"
import HardBreak from "@tiptap/extension-hard-break"
import Dropcursor from "@tiptap/extension-dropcursor"
import Gapcursor from "@tiptap/extension-gapcursor"

import { Document } from "./extensions/doc"
import { Paragraph } from "./extensions/paragraph"
import { DBlock } from "./extensions/dBlock"

import MenuBar from "./MenuBar"

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      Document,
      DBlock,
      Paragraph,
      Text,

      Gapcursor,
      Dropcursor.configure({
        width: 2,
        class: "notitap-dropcursor",
        color: "skyblue",
      }),

      History,
      HardBreak,

      Heading.configure({
        levels: [1, 2, 3],
      }),
      ListItem,
      BulletList,
      OrderedList,
    ],
    content: "<p>Example Text</p>",
    autofocus: "end",
    editable: true,
    injectCSS: false,
    editorProps: {
      attributes: {
        class: "max-w-none w-full focus:outline-none",
      },
    },
  })

  return (
    <>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </>
  )
}

export default Tiptap
