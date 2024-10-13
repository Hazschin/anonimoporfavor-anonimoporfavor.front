import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";
import React from "react";
import { fetchPostData } from "../../../utils/fetching";

export default function SaveButton() {
  const [open, setOpen] = useState(false);

  const getText = () => {
    const titleInput = document?.querySelector("#title") as HTMLInputElement;
    const authorInput = document?.querySelector("#author") as HTMLInputElement;

    const note = document?.querySelector("div#editorContainer div.ql-editor")
      ?.firstElementChild?.innerHTML;
    const title = titleInput.value;
    const author = authorInput.value;
    console.log({ note, title, author });

    fetchPostData<void>(`/notes/postNote`, { note, title, author })
      .then(() => {
        console.log("Tu nota se ha guardado correctamente");
        handleClose();
        //window.location.href = "/1";
      })
      .catch(() => {
        alert("Ha habido un problema al guardar tu nota");
        handleClose();
      });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        onClose={handleClose}
        open={open}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "#e0e0e0",
          },
        }}
      >
        <DialogTitle>Una vez enviado no podrás modificarlo</DialogTitle>

        <DialogContent>
          <Button
            className="saveButton"
            variant="contained"
            onClick={getText}
            sx={{ marginBottom: "15px" }}
          >
            Confirmar
          </Button>
        </DialogContent>
      </Dialog>
      <Button className="saveButton" variant="contained" onClick={handleOpen}>
        Guardar
      </Button>
    </>
  );
}
