"use client";

import React, { useState } from "react";
import { useEffect } from "react";
import { ParamsSearch } from "../../../../types/Params";
import { fetchPostData } from "../../../../utils/fetching";
import { NoteOverviewType } from "../../../../types/Notes";
import NoteOverview from "@/components/NoteOverview/NoteOverview";

export default function Search({ params }: { params: ParamsSearch }) {
  const { search } = params;
  useEffect(() => {
    fetchPostData<NoteOverviewType[]>(`/notes/searchNotes`, { search }).then(
      (data) => {
        setNotes(data);
        console.log(data);
      }
    );
  }, []);

  const [notes, setNotes] = useState<NoteOverviewType[]>([]);

  return (
    <div id="notes" style={{ padding: "0px 15px" }}>
      {notes.map((note, i) => {
        return (
          <NoteOverview
            id={note.id}
            title={note.title}
            note={note.noteOverview}
            author={note.author}
            key={i}
          ></NoteOverview>
        );
      })}
    </div>
  );
}
