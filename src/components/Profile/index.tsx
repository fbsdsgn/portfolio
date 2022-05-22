import {
  DownloadSimple,
  GithubLogo,
  LinkedinLogo,
  MessengerLogo,
  Moon,
  WhatsappLogo,
} from "phosphor-react";
import { Container } from "../../styles/global";

import {
  Border,
  Data,
  Image,
  Perfil,
  Name,
  Profession,
  Social,
  Li,
  Link,
  Button,
  Content,
} from "./styles";


export const Profile = () => {
  return (
    <Container>
      <Content>
        <Data>
          <Border>
            <Perfil>
              <Image />
            </Perfil>
          </Border>

          <Name>Felipe B Souza</Name>
          <Profession>Web Developer</Profession>

          <Social>
            <Li>
              <Link href="#" target="_blank">
                <GithubLogo size="24" />
              </Link>
            </Li>

            <Li>
              <Link href="#" target="_blank">
                <LinkedinLogo size="24" />
              </Link>
            </Li>

            <Li>
              <Link href="#" target="_blank">
                <MessengerLogo size="24" />
              </Link>
            </Li>

            <Li>
              <Link href="#" target="_blank">
                <WhatsappLogo size="24" />
              </Link>
            </Li>
          </Social>

          <Button download="#" href="#">
            Download CV <DownloadSimple size={24} />
          </Button>
        </Data>
      </Content>
    </Container>
  );
};
