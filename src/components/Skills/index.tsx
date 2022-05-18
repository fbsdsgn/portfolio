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
              Icon Link
              <Divide>
                <Name>HTML</Name>
                <Level>Basic</Level>
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
              Icon Link
              <Divide>
                <Name>Python</Name>
                <Level>Basic</Level>
              </Divide>
            </Data>
          </Group>
        </Box>
      </Area>
    </Content>
  </Container>
);
