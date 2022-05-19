import { styled } from "../../styles/config/stitches.config";

import profile from "../../assets/img/profile.png";

export const Content = styled("div", {
  position: "relative",
  mt: "$18",
});

export const Data = styled("div", {
  display: "grid",
  textAlign: "center",
  justifyContent: "center",
});

export const Border = styled("div", {
  display: "grid",
  size: "$20",
  border: "4px solid $blue11",
  justifySelf: "center",
  borderRadius: "50%",
  placeItems: "center",
  mb: "$4",
});

export const Perfil = styled("div", {
  display: "grid",
  size: "$18",
  borderRadius: "50%",
  overflow: "hidden",
  alignItems: "flex-center",
  justifyContent: "center",
});

export const Image = styled("div", {
  backgroundImage: `url(${profile})`,
  width: "$18",
  backgroundPosition: "center",
  backgroundSize: "160px",
  backgroundRepeat: "no-repeat",
});

export const Name = styled("h2", {
  fontSize: "$4",
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
  width: 280,
  jc: "space-between",
  columnGap: ".75rem",
  mb: "$4",
});

export const Li = styled("li", {
  size: "$6",
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
  padding: "$1",
  transition: "0.3s",
  "&:hover": {
    color: "$blue11",
  },
});

export const Button = styled("a", {
  display: "flex",
  jc: "center",
  ai: "center",
  m: "0 auto",

  fontSize: "$3",
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
