"use client";
// import Document from "@tiptap/extension-document";
// import Paragraph from "@tiptap/extension-paragraph";
// import Text from "@tiptap/extension-text";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ToolBar from "./ToolBar";
import Heading from "@tiptap/extension-heading";
import BulletList from "@tiptap/extension-bullet-list";
import OrderList from "@tiptap/extension-ordered-list";
import BlockQuote from "@tiptap/extension-blockquote";
import CodeBlock from "@tiptap/extension-code-block";
type Props = {
  value: string;
  onChange: (...event: any[]) => void;
};

const Tiptap = ({ value, onChange }: Props) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Heading.configure({
        HTMLAttributes: {
          class: "pb-2 text-3xl font-semibold tracking-tight first:mt-0",
          level: 2,
        },
      }),

      BulletList.configure({
        HTMLAttributes: {
          class: "my-6 ml-6 list-disc [&>li]:mt-2",
        },
      }),
      OrderList.configure({
        HTMLAttributes: {
          class: "list-decimal my-6 ml-6 [&>li]:mt-2",
        },
      }),
      BlockQuote.configure({
        HTMLAttributes: {
          class: "mt-6 border-l-2 pl-6 italic",
        },
      }),
      CodeBlock.configure({
        HTMLAttributes: {
          class:
            // copilot style
            // github coding codeblock style
            "my-6 p-4 bg-gray-800 text-gray-100 rounded-md shadow-inner",
        },
      }),
    ],
    content: value,
    editorProps: {
      attributes: {
        class:
          "p-2 rounded-md border min-h-[150px] border-input ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        // prose dark:prose-invert prose-sm sm:prose-base  focus:outline-none
      },
    },

    onUpdate({ editor }) {
      onChange(editor.getHTML());
      // console.log(editor.getHTML());
    },
  });

  const html = editor?.getHTML();

  return (
    <div className="flex min-h-[250px] flex-col justify-stretch gap-3">
      <ToolBar editor={editor} />
      <EditorContent editor={editor} value={value} onChange={onChange} />

      {editor?.getHTML()}

      <p> {editor?.getText()} </p>
    </div>
  );
};

export default Tiptap;
