import "./Note.css";
import React from "react";

export default function Note({
  title = "Titulo",
  note = "Nota",
  author = "Autor",
}: {
  title?: string;
  note: string;
  author: string;
}) {
  title = title.replace(/<[^>]*>/g, "");
  author = author.replace(/<[^>]*>/g, "");

  return (
    <>
      <script src="https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.js" />

      <div id="editorContainer">
        <input id="title" value={title} disabled />
        <div dangerouslySetInnerHTML={{ __html: note }} />

        <div className="author">
          <span>Por</span>
          <input id="author" value={author} disabled />
        </div>
      </div>
    </>
  );
}
