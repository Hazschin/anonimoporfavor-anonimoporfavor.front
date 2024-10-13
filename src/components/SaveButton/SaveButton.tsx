import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";
import React from "react";
import { fetchPostData } from "../../../utils/fetching";

export default function SaveButton() {
  const [open, setOpen] = useState(false);

  const getText = () => {
    let titleInput = document?.querySelector("#title") as HTMLInputElement;
    let authorInput = document?.querySelector("#author") as HTMLInputElement;

    const note =
      document?.querySelector("#editor")?.firstElementChild?.innerHTML;
    const title = titleInput.value;
    const author = authorInput.value;

    fetchPostData<void>(`/notes/postNote`, { note, title, author })
      .then(() => {
        console.log("Tu nota se ha guardado correctamente");
        handleClose();
        window.location.href = "/1";
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