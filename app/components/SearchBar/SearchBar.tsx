"use client";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const [location, setLocation] = useState("");

  return (
    <>
      <TextField
        id="input-with-icon-textfield"
        placeholder="State, city, or town..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
        sx={{
          width: "815px",
          // To not back background color spill over border with radius applied.
          overflow: "hidden",
          "& .MuiOutlinedInput-root": {
            background: "#fff",
          },
        }}
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <Box pt="16px">
        <Button
          variant="contained"
          sx={{
            width: "192px",
            background: "#2196F3",
            py: 1,
            fontSize: "15px",
            lineHeight: "26px",
            letterSpacing: ".46px",
          }}
          onClick={() => {
            if (location === "") return;

            router.push(`/search?city=${location}`);
            setLocation("");
          }}
        >
          FIND
        </Button>
      </Box>
    </>
  );
}
