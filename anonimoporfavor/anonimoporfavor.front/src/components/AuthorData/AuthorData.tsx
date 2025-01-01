"use client";

import {
  Accordion,
  AccordionSummary,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import "./authorData.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function AuthorData() {
  return (
    <>
      <Container
        sx={{
          width: "95%",
          margin: "0 auto",
        }}
      >
        <Accordion id="authorDataAccordion">
          <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
            <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
              ¿Quieres añadir datos extra (Autor, Título y tags) ?
            </Typography>
          </AccordionSummary>

          <TextField
            id="author"
            className="authorData"
            label="Autor (opcional)"
            defaultValue={"Anónimo"}
            fullWidth
          />
          <TextField
            id="title"
            className="authorData"
            label="Título (opcional)"
            fullWidth
          />

          <TextField
            id="tags"
            className="authorData"
            label="Tags (opcional)"
            helperText="Los tags deben estar separados por una , (coma)"
            fullWidth
          />
        </Accordion>
      </Container>
    </>
  );
}
