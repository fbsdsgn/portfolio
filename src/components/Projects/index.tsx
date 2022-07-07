import { Container } from "../../styles/global";

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

export const Projects = () => {
  const projects = DATA[0]["projects"];
  return (
    <Container>
      <Content>
        {projects.map(
          ({
            id,
            title,
            subtitle,
            deployURL,
            githubURL,
            figmaURL,
            imageURL,
          }) => (
            <Card key={id}>
              <Image src={imageURL} />
              <Modal>
                <Divide>
                  <Subtitle>{subtitle}</Subtitle>
                  <Title>{title}</Title>
                  <Wrapper>
                    <Link href={deployURL} target="_blank">
                      <LinkSimple size={32} />
                    </Link>
                    <Group>
                      <Link
                        color="secondary"
                        target="_blank"
                        size="small"
                        href={githubURL}
                      >
                        <GithubLogo size={24} />
                      </Link>

                      <Link
                        color="secondary"
                        target="_blank"
                        size="small"
                        href={figmaURL}
                      >
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
};
