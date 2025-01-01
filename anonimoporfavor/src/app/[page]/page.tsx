"use client";

import "./getNotes.css";
import NoteOverview from "@/components/NoteOverview/NoteOverview";
import SearchInput from "@/components/SearchInput/SearchInput";
import { Add } from "@mui/icons-material";
import { IconButton, Pagination } from "@mui/material";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { NoteOverviewType } from "../../../types/Notes";
import { searchAndCountNotes } from "../../../utils/fetching";
import { ParamsPages } from "../../../types/Params";

export default function GetPages({ params }: { params: ParamsPages }) {
  useEffect(() => {
    SearchAndCountNotes();
  }, []);

  const router = useRouter();
  let searchParam = "";
  let pageParam = parseInt(params.page);

  const SearchAndCountNotes = async () => {
    const data = await searchAndCountNotes(searchParam, postPerPage, page); //"" devuelve todas las notes
    setNotes(data.notes);
    setQNotes(data.qNotes);
  };

  const rePaginate = (event: ChangeEvent<unknown>, newPage: number) => {
    router.push(`/${newPage}`);
  };

  const searchInput = () => {
    let search = document.querySelector("input")?.value;
    router.push(`/buscar/${search}`);
  };

  const [qNotes, setQNotes] = useState<number>(100);
  const [notes, setNotes] = useState<NoteOverviewType[]>([]);
  const [page /*, setPage*/] = useState<number>(pageParam);
  const [postPerPage /*, setPostPerPage*/] = useState<number>(10);

  return (
    <div>
      <a href={"/createNote"}>
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
          style={{
            position: "fixed",
            top: "20px",
            left: "10px",
            background: "aliceblue",
            zIndex: "1",
            color: "#121212",
            boxShadow: "0px 0px 15px 2px black",
          }}
        >
          <Add />
        </IconButton>
      </a>

      <SearchInput defaultValue={""} onChange={searchInput} />
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
          page={parseInt(params.page)}
          color="primary"
          sx={{ padding: "1rem" }}
          onChange={rePaginate}
        />
      </div>
    </div>
  );
}
