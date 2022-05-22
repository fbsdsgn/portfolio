import { FileHtml } from "phosphor-react";
import { Container } from "../../styles/global";
import {
  Area,
  Box,
  Content,
  Data,
  Divide,
  Group,
  Level,
  Name,
  Title,
} from "./styles";

export const Skills = () => (
  <Container>
    <Content>
      <Area>
        <Title>Frontend Developer</Title>
        <Box>
          <Group>
            <Data>
             <FileHtml size={24}/>
              <Divide>
                <Name>HTML</Name>
                <Level>Intermediate</Level>
              </Divide>
            </Data>

            <Data>
             <FileHtml size={24}/>
              <Divide>
                <Name>CSS</Name>
                <Level>Intermediate</Level>
              </Divide>
            </Data>

            <Data>
             <FileHtml size={24}/>
              <Divide>
                <Name>JavaScript</Name>
                <Level>Intermediate</Level>
              </Divide>
            </Data>
          </Group>

          <Group>
            <Data>
             <FileHtml size={24} color="cyan"/>
              <Divide>
                <Name>ReactJS</Name>
                <Level>Intermediate</Level>
              </Divide>
            </Data>

            <Data>
             <FileHtml size={24} color="cyan"/>
              <Divide>
                <Name>Tailwind</Name>
                <Level>Intermediate</Level>
              </Divide>
            </Data>

            <Data>
             <FileHtml size={24} color="cyan"/>
              <Divide>
                <Name>Sass</Name>
                <Level>Intermediate</Level>
              </Divide>
            </Data>
          </Group>
        </Box>
      </Area>

      <Area>
        <Title>Backend Developer</Title>
        <Box>
          <Group>
            <Data>
             <FileHtml size={24}/>
              <Divide>
                <Name>HTML</Name>
                <Level>Intermediate</Level>
              </Divide>
            </Data>

            <Data>
             <FileHtml size={24}/>
              <Divide>
                <Name>CSS</Name>
                <Level>Intermediate</Level>
              </Divide>
            </Data>

            <Data>
             <FileHtml size={24}/>
              <Divide>
                <Name>JavaScript</Name>
                <Level>Intermediate</Level>
              </Divide>
            </Data>
          </Group>

          <Group>
            <Data>
             <FileHtml size={24} color="cyan"/>
              <Divide>
                <Name>ReactJS</Name>
                <Level>Intermediate</Level>
              </Divide>
            </Data>

            <Data>
             <FileHtml size={24} color="cyan"/>
              <Divide>
                <Name>Tailwind</Name>
                <Level>Intermediate</Level>
              </Divide>
            </Data>

            <Data>
             <FileHtml size={24} color="cyan"/>
              <Divide>
                <Name>Sass</Name>
                <Level>Intermediate</Level>
              </Divide>
            </Data>
          </Group>
        </Box>
      </Area>

    </Content>
  </Container>
);
