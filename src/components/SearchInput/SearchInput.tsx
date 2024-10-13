import { Search } from "@mui/icons-material";
import { IconButton, InputBase } from "@mui/material";

export default function SearchInput({
  onChange = () => {},
}: {
  onChange: () => void;
}) {
  const onEnter = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") onChange();
  };

  return (
    <div
      id="searchContainer"
      style={{
        padding: "2px 4px",
        display: "flex",
        alignItems: "center",
        borderRadius: "25px",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Buscar nota..."
        inputProps={{ "aria-label": "Buscar nota" }}
        fullWidth
        onKeyDown={onEnter}
      />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={onChange}
      >
        <Search />
      </IconButton>
    </div>
  );
}
