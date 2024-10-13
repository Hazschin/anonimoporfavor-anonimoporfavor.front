"use client";

import "./getNotes.css";
import NoteOverview from "@/components/NoteOverview/NoteOverview";
import SearchInput from "@/components/SearchInput/SearchInput";
import { Add } from "@mui/icons-material";
import { IconButton, Pagination } from "@mui/material";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { ParamsPages } from "../../../types/Params";
import { NoteOverviewType } from "../../../types/Notes";
import { fetchGetData, fetchPostData } from "../../../utils/fetching";

export default function GetPages({ params }: { params: ParamsPages }) {
  useEffect(() => {
    getNotes(postPerPage, page);
    fetchGetData<number>("/notes/countNotes")
      .then((data) => {
        console.log(data);
        setQNotes(data);
      })
      .catch(() => {
        console.error("Error al obtener la cantidad de notes");
        setQNotes(100);
      });
  }, []);

  const router = useRouter();

  const getNotes = (postPerPage: number, page: number) => {
    fetchPostData<NoteOverviewType[]>(`/notes/getNotes`, {
      postPerPage,
      page,
    }).then((data) => {
      setNotes(data);
      console.log(data);
    });
  };

  const searchInput = () => {
    const search = document.querySelector("input")?.value;

    if (search === "") return getNotes(postPerPage, page);

    fetchPostData<NoteOverviewType[]>(`/notes/searchNotes`, { search }).then(
      (data) => {
        setNotes(data);
        console.log(data);
      }
    );
  };

  const rePaginate = (event: ChangeEvent<unknown>, newPage: number) => {
    console.log(newPage);
    getNotes(postPerPage, newPage);
    router.replace(`/${newPage}`);
  };

  const [qNotes, setQNotes] = useState<number>(10);
  const [notes, setNotes] = useState<NoteOverviewType[]>([]);
  const [page, setPage] = useState<number>(parseInt(params.page));
  const [postPerPage, setPostPerPage] = useState<number>(6);

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

      <SearchInput onChange={searchInput} />
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
