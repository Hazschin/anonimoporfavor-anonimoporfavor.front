import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function NoteOverview({
  id = 0,
  title = "Titulo",
  note = "Nota",
  author = "Autor",
}: {
  id?: number;
  title?: string;
  note: string;
  author?: string;
}) {
  const router = useRouter();
  const getNote = () => {
    router.push(`/note/${id}`);
  };

  title = title.replace(/<[^>]*>/g, "");
  note = note.replace(/<[^>]*>/g, "");
  author = author.replace(/<[^>]*>/g, "");

  return (
    <CardActionArea onClick={getNote}>
      <Card sx={{ background: "#FEF4DB" }}>
        <CardContent>
          <Typography variant="h5" component="div" marginBottom={"10px"}>
            {title ? title : "(Sin título)"}
          </Typography>
          <Typography variant="body1" marginBottom={"10px"}>
            {note}...
          </Typography>
          <Typography variant="caption" sx={{ display: "block" }} align="right">
            Por: {author}
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
}
