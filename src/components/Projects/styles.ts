import { styled } from "../../styles/config/stitches.config";

export const Content = styled("div", {
  display: "flex",
  columnGap: "$3",
  rowGap: "$3",
  flexWrap: "wrap",
  jc: "center",
});

export const Card = styled("article", {
  position: "relative",
  borderRadius: 4,
  overflow: "hidden",
  "&:hover div": {
    bottom: 0,
  },
});

export const Image = styled("img", {
  size: "250px",
  borderRadius: 4,
});

export const Modal = styled("div", {
  position: "absolute",
  width: "100%",
  height: "100%",
  bottom: "-100%",
  left: 0,
  display: "grid",
  alignItems: "flex-end",
  padding: "$2",

  borderRadius: 4,
  transition: ".3s",
  background:
    "linear-gradient(360deg, #000000 -7.6%, rgba(0, 34, 74, 0.31) 102.14%)",
});

export const Divide = styled("div", {});

export const Group = styled("div", {
  display: "flex",
  columnGap: "$2",
});

export const Wrapper = styled("div", {
  display: "flex",
  jc: "space-between",
  ai: "flex-end",
});

export const Subtitle = styled("h4", {
  color: "$blue12",
  mb: "$1",
  fontWeight: "lighter",
  fontSize: "$2",
});

export const Title = styled("h3", {
  fontSize: "$3",
  color: "$blue12",
  mb: "$2",
});

export const Link = styled("a", {
  size: "$5",
  backgroundColor: "$blue7",
  borderRadius: 4,
  display: "flex",
  jc: "center",
  ai: "center",
  color: "$blue12",

  variants: {
    size: {
      small: {
        size: "$4",
      },
    },

    color: {
      secondary: {
        backgroundColor: "$blue2",
      },
    },
  },
});
