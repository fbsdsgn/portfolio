import { styled } from "../../styles/config/stitches.config";

export const Content = styled("div", {
  display: "flex",
  columnGap: "$2",
  rowGap: "$2",
  jc: "center",
  width: "90vw",
  "@bp1": {
    flexDirection: "column",
  },
});

export const Area = styled("div", {
  display: "flex",
  jc: "center",
  ai: "center",
  flexDirection: "column",
  width: "100%",
  maxWidth: 400,
  padding: "$3",
  backgroundColor: "$blue2",
  borderRadius: 4,
});

export const Title = styled("h3", {
  mb: "$4",
  color: "$blue12",
  fontSize: "$2",
  fontWeight: 400,
});

export const Box = styled("div", {
  display: "flex",
  columnGap: "$4",
  rowGap: "$4",
  flexWrap: "wrap",
  jc: "center",
});

export const Group = styled("div", {
  display: "flex",
  flexDirection: "column",
  rowGap: "$2",
});

export const Data = styled("div", {
  display: "flex",
  columnGap: "$1",
});

export const Divide = styled("div", {});

export const Name = styled("h3", {
  color: "$blue12",
  fontWeight: 300,
  fontSize: "$2",
  mb: 2,
});

export const Level = styled("h3", {
  color: "$gray9",
  fontWeight: 400,
  fontSize: "$2",
});
