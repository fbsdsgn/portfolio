import { Container } from "../../styles/global";

import { api } from "../../api/config";

api.get("/profile").then((res) => console.log(res));

import {
  Card,
  Image,
  Modal,
  Divide,
  Subtitle,
  Title,
  Link,
  Wrapper,
  Content,
  Group,
} from "./styles";
import { FigmaLogo, GithubLogo, LinkSimple } from "phosphor-react";

import { DATA } from "../../helpers/data";

const projects = DATA[0]["projects"];

export const Projects = () => (
  <Container>
    <Content>
      {projects.map(
        ({ title, subtitle, deployURL, githubURL, figmaURL, imageURL }) => (
          <Card key={title}>
            <Image src={imageURL} />
            <Modal>
              <Divide>
                <Subtitle>{subtitle}</Subtitle>
                <Title>{title}</Title>
                <Wrapper>
                  <Link href={deployURL}>
                    <LinkSimple size={32} />
                  </Link>
                  <Group>
                    <Link color="secondary" size="small" href={githubURL}>
                      <GithubLogo size={24} />
                    </Link>

                    <Link color="secondary" size="small" href={figmaURL}>
                      <FigmaLogo size={24} />
                    </Link>
                  </Group>
                </Wrapper>
              </Divide>
            </Modal>
          </Card>
        )
      )}
    </Content>
  </Container>
);
