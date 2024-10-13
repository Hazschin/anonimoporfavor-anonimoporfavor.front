"use client";

import React from "react";
import { useEffect } from "react";
import "./textEditor.css";
import SaveButton from "../SaveButton/SaveButton";

export default function TextEditor() {
  useEffect(() => {
    init ? initQuill() : (init = !init);
  }, []);

  let init = false;
  const initQuill = () => {
    const quill = new Quill("#editor", {
      modules: {
        syntax: true,
        toolbar: "#toolbar",
      },
      placeholder: "Lorem ipsum dolor sit amet",
      theme: "snow",
    });
    console.log("Hola Mundo");
  };

  return (
    <>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.js" />
      <link
        href="https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.snow.css"
        rel="stylesheet"
      />

      <div id="toolbar-container">
        <div id="toolbar">
          <span className="ql-formats">
            <select className="ql-font"></select>
            <select className="ql-size"></select>
          </span>
          <span className="ql-formats">
            <button className="ql-bold"></button>
            <button className="ql-italic"></button>
            <button className="ql-underline"></button>
            <button className="ql-strike"></button>
          </span>
          <span className="ql-formats">
            <select className="ql-color"></select>
            <select className="ql-background"></select>
          </span>
          <span className="ql-formats">
            <button className="ql-script" value="sub"></button>
            <button className="ql-script" value="super"></button>
          </span>
          <span className="ql-formats">
            <button className="ql-blockquote"></button>
          </span>
          <span className="ql-formats">
            <button className="ql-list" value="ordered"></button>
            <button className="ql-list" value="bullet"></button>
            <button className="ql-indent" value="-1"></button>
            <button className="ql-indent" value="+1"></button>
          </span>
          <span className="ql-formats">
            <button className="ql-direction" value="rtl"></button>
            <select className="ql-align"></select>
          </span>
          <span className="ql-formats">
            <button className="ql-link"></button>
            <button className="ql-formula"></button>
          </span>
        </div>
      </div>

      <div id="editorContainer">
        <input id="title" placeholder="Título (opcional)" />
        <div id="editor"></div>

        <div className="author">
          <span>Por</span>
          <input id="author" defaultValue={"ANÓNIMO"} />
        </div>
      </div>

      <SaveButton />
    </>
  );
}
