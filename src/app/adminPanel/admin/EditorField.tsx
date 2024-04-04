"use client";
import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import { Grid } from "@mui/material";
import Paragraph from '@editorjs/paragraph';
import Quote from '@editorjs/quote';
import Table from '@editorjs/table'

export default function EditorField({ onEditorData }: { onEditorData: any }) {
  const editorRef = useRef(null);

  useEffect(() => {
    // Function to initialize the EditorJS instance
    const initializeEditor = async () => {
      try {
        // Create a new instance of EditorJS
        const editorInstance = await new EditorJS({
          /**
           * Id of Element that should contain the Editor
           */
          holder: "editorjs",

          /**
           * Available Tools list.
           * Pass Tool's class or Settings object for each Tool you want to use
           */
          tools: {
            paragraph: {
                class: Paragraph,
                inlineToolbar: true,
              },          
              heading: Header,
              Quote:Quote,
              table: Table,
            list: {
              class: List,
              inlineToolbar: true,
            },
          },
          onChange: async () => {
            let content = await editorInstance.saver.save();
            onEditorData(content)
            console.log(content);
          },
        });

        // Store the EditorJS instance in the ref
        editorRef.current = editorInstance;
      } catch (error) {
        console.error("Error initializing EditorJS:", error);
      }
    };

    // Call the function to initialize the EditorJS instance
    initializeEditor();

    // Clean up function to destroy the EditorJS instance
    return () => {
      if (editorRef.current) {
        // editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, [onEditorData]); // Run effect only once after initial render

  return (
    <div style={{ backgroundColor: "white" }} id="editorjs">
    </div>
  );
}
