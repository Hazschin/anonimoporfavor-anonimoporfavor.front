import dynamic from "next/dynamic";
import "quill/dist/quill.snow.css";
import "./Note.css";
import React from "react";

const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p></p>,
});

export default function Note({
  title = "Titulo",
  note = "",
  author = "Autor",
}: {
  title?: string;
  note: string;
  author: string;
}) {
  title = title.replace(/<[^>]*>/g, "");
  author = author.replace(/<[^>]*>/g, "");

  const modules = {
    toolbar: false,
  };
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "color",
    "background",
    "align",
    "direction",
    "script",
    "formula",
  ];

  return (
    <>
      <div id="editorContainer">
        <input id="title" value={title} disabled />

        <QuillNoSSRWrapper
          modules={modules}
          formats={formats}
          theme="snow"
          value={note}
          readOnly={true}
        />

        <div className="author">
          <span>Por</span>
          <input id="author" value={author} disabled />
        </div>
      </div>
    </>
  );
}
