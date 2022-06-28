import { FileCss, FileHtml, FileJs } from "phosphor-react";
import { Container } from "../../styles/global";
import {
  Area,
  Box,
  CheckIcon,
  Content,
  Data,
  Divide,
  Group,
  Level,
  Name,
  Title,
} from "./styles";

import { DATA } from "../../helpers/data";

export const Skills = () => {
  const { front, back } = DATA[0]["skills"];

  return (
    <Container>
      <Content>
        <Area>
          <Title>Frontend Developer</Title>
          <Box>
            <Group>
              {front.colOne.map(({ name, level, icon }) => (
                <Data>
                  <CheckIcon src={icon} alt="Check"/>
                  <Divide>
                    <Name>{name}</Name>
                    <Level>{level}</Level>
                  </Divide>
                </Data>
              ))}
            </Group>

            <Group>
              {front.colTwo.map(({ name, level, icon }) => (
                <Data>
                  <CheckIcon src={icon} alt="Check"/>
                  <Divide>
                    <Name>{name}</Name>
                    <Level>{level}</Level>
                  </Divide>
                </Data>
              ))}
            </Group>
          </Box>
        </Area>

        <Area>
          <Title>Backend Developer</Title>
          <Box>
            <Group>
              {back.colOne.map(({ name, level, icon }) => (
                <Data>
                  <CheckIcon src={icon} alt="Check"/>
                  <Divide>
                    <Name>{name}</Name>
                    <Level>{level}</Level>
                  </Divide>
                </Data>
              ))}
            </Group>

            <Group>
              {back.colTwo.map(({ name, level, icon }) => (
                <Data>
                  <CheckIcon src={icon} alt="Check"/>
                  <Divide>
                    <Name>{name}</Name>
                    <Level>{level}</Level>
                  </Divide>
                </Data>
              ))}
            </Group>
          </Box>
        </Area>
      </Content>
    </Container>
  );
};
