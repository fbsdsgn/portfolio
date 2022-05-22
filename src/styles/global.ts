import { globalCss, styled } from "./config/stitches.config";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "'Ubuntu', sans-serif",
  },
  ul: {
    listStyle: "none",
  },
  a: {
    textDecoration: "none",
  },
  body: {
    backgroundColor: "$blue1",
  },
});

export const Container = styled("div", {
  position: "relative",
  maxWidth: 916,
  m: "0 auto",

  display: "grid",
  gap: "1.5rem",
  justifyContent: "center",

  '& .moon': {
    position: "absolute",
    right: "$4",
    top: "$4",
    color: "$blue12"
  }
});


