import { FacebookLogo, InstagramLogo } from "phosphor-react";
import { useState } from "react";

import { Container } from "../../styles/global";
import { Projects } from "../Projects";
import { Skills } from "../Skills";
import { Button, Content, Link, Sections, Social } from "./styles";

export const Main = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <Container>
      <Content>
        <Button
          onClick={() => toggleTab(1)}
          className={toggleState === 1 ? "active" : ""}
        >
          Projects
        </Button>
        <Button
          onClick={() => toggleTab(2)}
          className={toggleState === 2 ? "active" : ""}
        >
          Skills
        </Button>
      </Content>

      <Sections>{toggleState === 1 ? <Projects /> : <Skills />}</Sections>

      <Social>
        <Link href="https://fb.me/fbsdsgn" target="_blank">
          <InstagramLogo size={24} />
        </Link>

        <Link href="https://instagram.com/fbsdsgn" target="_blank">
          <FacebookLogo size={24} />
        </Link>
      </Social>
    </Container>
  );
};
