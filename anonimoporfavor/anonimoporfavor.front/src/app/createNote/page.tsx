"use client";

import React from "react";
import Editor from "@/components/TextEditor/Editor";
import SaveButton from "@/components/SaveButton/SaveButton";
import "./createNote.css";

export default function CreateNote() {
  return (
    <>
      <Editor />
      <SaveButton />
    </>
  );
}
