"use client";

import React from "react";
import "./note.css";
import Note from "@/components/Note/Note";
import { useEffect, useState } from "react";
import { ParamsNote } from "../../../../types/Params";
import { Notes } from "../../../../types/Notes";
import { fetchPostData } from "../../../../utils/fetching";

export default function GetNote({ params }: { params: ParamsNote }) {
  console.log(params.note);
  useEffect(() => {
    fetchPostData<Notes>(`/notes/getNote`, {
      noteId: parseInt(params.note),
    }).then((data) => {
      setNote(data);
      console.log(data);
    });
  }, []);

  const [note, setNote] = useState<Notes>({ author: "", note: "" });

  return (
    <>
      <Note
        title={note.title ? note.title : "(Sin título)"}
        author={note.author ? note.author : "Autor"}
        note={note.note ? note.note : "Nota"}
      />
    </>
  );
}
