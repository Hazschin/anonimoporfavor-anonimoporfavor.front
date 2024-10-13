import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import "./editorStyles.css";
import CustomToolbar from "./CustomToolbar";

const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>cargando ...</p>,
});

export default function Editor() {
  const modules = {
    toolbar: { container: "#toolbar" },
    clipboard: {
      matchVisual: false,
    },
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
    "image",
    "video",
  ];

  return (
    <>
      <div id="toolbar-container">
        <CustomToolbar />
      </div>
      <div id="editorContainer">
        <input id="title" placeholder="Título (opcional)" />
        <QuillNoSSRWrapper modules={modules} formats={formats} theme="snow" />

        <div className="author">
          <span>Por</span>
          <input id="author" defaultValue={"ANÓNIMO"} />
        </div>
      </div>
    </>
  );
}
