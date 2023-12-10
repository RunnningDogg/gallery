"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit, Document, Paragraph, Text],
    editorProps: {
      attributes: {
        class:
          "prose dark:prose-invert prose-sm sm:prose-base m-5 focus:outline-none",
      },
    },
    content: "<p>Hello World! 🌎️</p>",
  });
  const html = editor?.getHTML();

  return <EditorContent editor={editor} />;
};

export default Tiptap;
