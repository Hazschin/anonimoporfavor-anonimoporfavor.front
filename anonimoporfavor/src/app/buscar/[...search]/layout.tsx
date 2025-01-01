"use client";

import SearchInput from "@/components/SearchInput/SearchInput";
import { Add } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { ParamsSearch } from "../../../../types/Params";

export default function GetPages({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: ParamsSearch;
}>) {
  const router = useRouter();
  let search = decodeURIComponent(params.search[0]);

  const SearchNotes = async () => {
    let search = document.querySelector("input")?.value;
    if (!search) search = "";
    router.push(`/buscar/${search}`);
  };

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

      <SearchInput defaultValue={search} onChange={SearchNotes} />
      {children}
    </div>
  );
}
