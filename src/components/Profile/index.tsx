import {
  DownloadSimple,
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

import { DATA } from "../../helpers/data";

const { fullname, profession } = DATA[0]["profile"];

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

          <Name>{fullname}</Name>
          <Profession>{profession}</Profession>

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

          <Button download="./src/assets/pdf/cv.pdf" href="./src/assets/pdf/cv.pdf">
            Download CV <DownloadSimple size={24} />
          </Button>
        </Data>
      </Content>
    </Container>
  );
};
