"use client";

import {
  BlockNoteEditor,
  BlockSchema,
  PartialBlock,
  defaultBlockSchema,
  defaultProps,
  getDefaultSlashMenuItems,
} from "@blocknote/core";

import {
  BlockNoteView,
  InlineContent,
  createReactBlockSpec,
  useBlockNote,
  ReactSlashMenuItem,
} from "@blocknote/react";
import "@blocknote/core/style.css";
import { AlertTriangle, ArrowRight, Lightbulb, Workflow } from "lucide-react";
import { useTheme } from "next-themes";


import { useEdgeStore } from "@/lib/edgestore";

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
}

const Editor = ({ onChange, initialContent, editable }: EditorProps) => {
  const { resolvedTheme } = useTheme();
  const { edgestore } = useEdgeStore();

  const handleUpload = async (file: File) => {
    const response = await edgestore.publicFiles.upload({
      file,
    });

    return response.url;
  };

  /* Create a step block */
  const stepBlock = createReactBlockSpec({
    type: "step",
    propSchema: {
      ...defaultProps,
    },
    containsInlineContent: true,
    render: ({ block }) => (
      <div className="my-4 p-4 rounded-md shadow-lg flex space-x-8">
        <div className="flex-none flex justify-center items-center rounded-full w-10 h-10 bg-gray-200">
          <ArrowRight />
        </div>
        <div className="flex-1 my-2">
          <InlineContent />
        </div>
      </div>
    ),
  });

  const tipBlock = createReactBlockSpec({
    type: "tip",
    propSchema: {
      ...defaultProps,
    },
    containsInlineContent: true,
    render: ({ block }) => (
      <div className="my-4 p-4 py-8 rounded-md shadow-lg flex space-x-8 bg-amber-100">
        <div className="flex-none flex justify-center items-center rounded-full w-10 h-10  bg-amber-500 text-white">
          <Lightbulb />
        </div>
        <div className="flex-1 my-2 text-amber-800">
          <InlineContent placeholder="Tip!" />
        </div>
      </div>
    ),
  });

  const alertBlock = createReactBlockSpec({
    type: "alert",
    propSchema: {
      ...defaultProps,
    },
    containsInlineContent: true,
    render: ({ block }) => (
      <div className="my-4 px-4 py-8 rounded-md shadow-lg flex space-x-8 bg-rose-100">
        <div className="flex-none flex justify-center items-center rounded-full w-10 h-10  bg-rose-500 text-white ">
          <AlertTriangle />
        </div>
        <div className="flex-1 my-2 text-rose-800">
          <InlineContent />
        </div>
      </div>
    ),
  });

  // The custom schema, which includes the default blocks and the custom image
  // block.
  const customSchema = {
    // Adds all default blocks.
    ...defaultBlockSchema,
    // Adds the custom image block.
    step: stepBlock,
    tip: tipBlock,
    alert: alertBlock,
  } satisfies BlockSchema;

  const insertStep: ReactSlashMenuItem<typeof customSchema> = {
    name: "Step",
    execute: (editor) => {
      editor.insertBlocks(
        [
          {
            type: "step",
          },
        ],
        editor.getTextCursorPosition().block,
        "after"
      );
    },
    aliases: ["instance"],
    group: "Flows",
    icon: <Workflow />,
    hint: "Insert a step",
  };

  const insertTip: ReactSlashMenuItem<typeof customSchema> = {
    name: "Tip",
    execute: (editor) => {
      editor.insertBlocks(
        [
          {
            type: "tip",
          },
        ],
        editor.getTextCursorPosition().block,
        "after"
      );
    },
    aliases: ["tip"],
    group: "Flows",
    icon: <Lightbulb />,
    hint: "Insert a tip",
  };
  const insertAlert: ReactSlashMenuItem<typeof customSchema> = {
    name: "Alert",
    execute: (editor) => {
      editor.insertBlocks(
        [
          {
            type: "alert",
          },
        ],
        editor.getTextCursorPosition().block,
        "after"
      );
    },
    aliases: ["alert"],
    group: "Flows",
    icon: <AlertTriangle />,
    hint: "Insert a tip",
  };

  const editor: BlockNoteEditor = useBlockNote({
    editable,
    blockSchema: customSchema,
    slashMenuItems: [
      insertStep,
      insertTip,
      insertAlert,
      ...getDefaultSlashMenuItems(customSchema),
    ],
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[])
      : undefined,
    onEditorContentChange: (editor) => {
      onChange(JSON.stringify(editor.topLevelBlocks, null, 2));
    },
    uploadFile: handleUpload,
  });

  return (
    <div>
      <BlockNoteView
        editor={editor}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
      />
    </div>
  );
};

export default Editor;
