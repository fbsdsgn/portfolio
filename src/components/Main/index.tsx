import { Container } from "../../styles/global";
import { Projects} from "../Projects" 
import { Skills } from "../Skills";
import { Button, Content, Sections } from "./styles";

export const Main = () => {
  return (
    <Container>
      <Content>
        <Button>Projects</Button>
        <Button>Skills</Button>
      </Content>

      <Sections>
        <Projects />
        <Skills />
      </Sections>
    </Container>
  );
};
