import { styled } from "../../styles/config/stitches.config";

import profile from "../../assets/img/profile.png";

export const Content = styled("div", {
  position: "relative",
  paddingTop: "3.5rem",
});

export const Data = styled("div", {
  display: "grid",
  textAlign: "center",
});

export const Border = styled("div", {});

export const Perfil = styled("div", {
  width: 100,
  height: 100,
  borderRadius: "50%",
  overflow: "hidden",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
});

export const Image = styled("div", {
  backgroundImage: `url(${profile})`,
  width: 105,
  height: 105,
  backgroundPosition: "center",
  backgroundSize: "105px",
  backgroundRepeat: "no-repeat",
});

export const Name = styled("h2", {});

export const Profession = styled("h3", {});

export const Social = styled("ul", {});

export const Li = styled("li", {});

export const Link = styled("a", {});

export const Button = styled("a", {});
