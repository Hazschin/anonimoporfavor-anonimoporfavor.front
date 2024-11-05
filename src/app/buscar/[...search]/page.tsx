"use client";

import "./getNotes.css";
import NoteOverview from "@/components/NoteOverview/NoteOverview";
import { Pagination } from "@mui/material";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { ParamsSearch } from "../../../../types/Params";
import { NoteOverviewType } from "../../../../types/Notes";
import { searchAndCountNotes } from "../../../../utils/fetching";

export default function GetPages({ params }: { params: ParamsSearch }) {
  useEffect(() => {
    SearchAndCountNotes();
  }, []);

  const router = useRouter();
  let searchParam = decodeURIComponent(params.search[0]) || "";
  let pageParam = parseInt(params.search[1]) || 1;

  const SearchAndCountNotes = async () => {
    const data = await searchAndCountNotes(searchParam, postPerPage, page); //"" devuelve todas las notes
    setNotes(data.notes);
    setQNotes(data.qNotes);
  };

  const rePaginate = (event: ChangeEvent<unknown>, newPage: number) => {
    router.push(`/buscar/${searchParam}/${newPage}`);
  };

  const [qNotes, setQNotes] = useState<number>(100);
  const [notes, setNotes] = useState<NoteOverviewType[]>([]);
  const [page /*, setPage*/] = useState<number>(pageParam);
  const [postPerPage /*, setPostPerPage*/] = useState<number>(10);

  return (
    <div>
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

      <div style={{ display: "block", width: "fit-content", margin: "0 auto" }}>
        <Pagination
          count={Math.ceil(qNotes / postPerPage)}
          page={pageParam}
          color="primary"
          sx={{ padding: "1rem" }}
          onChange={rePaginate}
        />
      </div>
    </div>
  );
}
