import { styled } from "../../styles/config/stitches.config";

import profile from "../../assets/img/profile.png";

export const Content = styled("div", {
  position: "relative",
  mt: "$9",

  '& .moon': {
    position: "absolute",
    right: 0,
    top: "1rem"
  }
});

export const Data = styled("div", {
  display: "grid",
  textAlign: "center",
  justifyContent: "center",
});

export const Border = styled("div", {
  display: "grid",
  size: "$16",
  border: "2px solid $blue11",
  justifySelf: "center",
  borderRadius: "50%",
  placeItems: "center",
  mb: "$2",
});

export const Perfil = styled("div", {
  display: "grid",
  size: "$14",
  borderRadius: "50%",
  overflow: "hidden",
  alignItems: "flex-center",
  justifyContent: "center",
});

export const Image = styled("div", {
  width: "$14",
  backgroundImage: `url(${profile})`,
  backgroundPosition: "center",
  backgroundSize: "112px",
  backgroundRepeat: "no-repeat",
});

export const Name = styled("h2", {
  fontSize: "$3",
  mb: "$1",
  color: "$blue12",
  fontWeight: "500",
});

export const Profession = styled("h3", {
  fontSize: "$2",
  mb: "$4",
  color: "$blue11",
  fontWeight: "lighter",
});

export const Social = styled("ul", {
  display: "flex",
  jc: "center",
  columnGap: "$3",
  mb: "$4",
});

export const Li = styled("li", {
  display: "flex",
  jc: "center",
  ai: "center",
  borderRadius: 4,
  transition: "0.3s",
  background: "$blue2",
  "&:hover": {
    background: "$blue3",
  },
});

export const Link = styled("a", {
  color: "$blue12",
  transition: "0.3s",
  padding: 4,
  "&:hover": {
    color: "$blue11",
  },
});

export const Button = styled("a", {
  display: "flex",
  jc: "center",
  ai: "center",
  m: "0 auto",

  fontSize: "$2",
  padding: "$2 $3",
  columnGap: "$1",

  borderRadius: 4,

  color: "$blue12",
  backgroundColor: "$blue8",
  transition: "0.3s",
  "&:hover": {
    backgroundColor: "$blue7",
  },
});
