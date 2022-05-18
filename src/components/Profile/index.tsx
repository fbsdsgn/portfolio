import {
  GithubLogo,
  LinkedinLogo,
  MessengerLogo,
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

import profile from "../../assets/img/profile.png";

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
          <Profession>UI Designer • Front-end</Profession>

          <Social>
            <Li>
              <Link href="#" target="_blank">
                <GithubLogo />
              </Link>
            </Li>

            <Li>
              <Link href="#" target="_blank">
                <LinkedinLogo />
              </Link>
            </Li>

            <Li>
              <Link href="#" target="_blank">
                <MessengerLogo />
              </Link>
            </Li>

            <Li>
              <Link href="#" target="_blank">
                <WhatsappLogo />
              </Link>
            </Li>
          </Social>

          <Button download="#">Download CV</Button>
        </Data>
      </Content>
    </Container>
  );
};
