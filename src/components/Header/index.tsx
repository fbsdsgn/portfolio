import { Moon } from "phosphor-react";
import { Container } from "../../styles/global";
import { Profile } from "../Profile";

export const Header = () => {
  return (
    <Container>
      <Moon className="moon" size={24}/>
      <Profile />
    </Container>
  );
};
