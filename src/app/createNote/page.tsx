"use client";

import React from "react";
import Editor from "@/components/TextEditor/Editor";
import SaveButton from "@/components/SaveButton/SaveButton";

export default function CreateNote() {
  return (
    <>
      <Editor />
      <SaveButton />
    </>
  );
}
