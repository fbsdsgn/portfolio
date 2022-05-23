import { styled } from "../../styles/config/stitches.config";

export const Filters = styled("ul", {});

export const Button = styled("button", {
  width: "$19",
  fontSize: "$2",
  padding: "$2",
  borderRadius: 4,
  border: "none",
  backgroundColor: "transparent",
  color: "$blue12",
  transition: "0.3s",

  "&.active": {
    backgroundColor: "$blue1",
  },

  "&:hover": {
    backgroundColor: "$blue1",
  },

  "@bp1": {
    width: "$14",
    fontSize: "$2",
    padding: "$1",
  },
});

export const Content = styled("div", {
  display: "flex",
  columnGap: "$1",
  m: "$6 auto",
  padding: "$1",
  backgroundColor: "$blue2",
  borderRadius: 4,
});

export const Sections = styled("div", {
  mb: "$4",
});

export const Social = styled("div", {
  textAlign: "center",
  mb: "$8",
});

export const Link = styled("a", {
  color: "$blue12",
  padding: 2,
  margin: 2,
  transition: "0.3s",

  "&:hover": {
    color: "$blue9",
  },
});
