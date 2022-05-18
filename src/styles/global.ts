import { globalCss, styled } from "./config/stitches.config";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "'Ubuntu', sans-serif",
  },
  ul: {
    textDecoration: "none",
    listStyle: "none",
  },
});

export const Container = styled("div", {
  maxWidth: 1416,
  margin: "0 auto",
  border: "1px solid red",

  display: "grid",
  gap: "1.5rem",
  justifyContent: "center"
});
