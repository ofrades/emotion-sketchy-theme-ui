import "./styles.css";
import React from "react";
import {
  Flex,
  Box,
  NavLink,
  Button,
  Card,
  Text,
  Label,
  Checkbox,
  Select,
  Textarea,
  Radio,
  Input,
  Link,
  Badge,
  Alert,
  Divider,
  Grid,
  Heading
} from "theme-ui";
import styled from "@emotion/styled";

const GridStyled = styled(Grid)`
  padding: 5rem;
  background-color: #ccc;
`;

export default function App() {
  return (
    <GridStyled>
      <Heading>Sketchy</Heading>
      <Flex>
        <Button variant="primary">Default</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="info">Info</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="success">Success</Button>
      </Flex>
      <Divider />
      <Box>
        <Label htmlFor="username">Username</Label>
        <Input name="username" />
        <Label htmlFor="password">Password</Label>
        <Input type="password" name="password" />
        <Box>
          <Label>
            <Checkbox />
            Remember me
          </Label>
        </Box>
        <Label htmlFor="sound">Sound</Label>
        <Select name="sound">
          <option>Beep</option>
          <option>Boop</option>
          <option>Blip</option>
        </Select>
        <Label htmlFor="comment">Comment</Label>
        <Textarea name="comment" />
        <Flex>
          <Label>
            <Radio name="letter" /> Alpha
          </Label>
          <Label>
            <Radio name="letter" /> Bravo
          </Label>
          <Label>
            <Radio name="letter" /> Charlie
          </Label>
        </Flex>
        <Button>Submit</Button>
      </Box>
      <Box>
        <Link href="#!">Hello</Link>
      </Box>
      <Box>
        <Badge variant="accent">New</Badge>
        <Badge variant="outline">Cool</Badge>
      </Box>
      <Box>
        <Alert variant="danger">Danger</Alert>
        <Alert variant="info">Info</Alert>
        <Alert variant="warning">Warning</Alert>
        <Alert variant="success">Success</Alert>
      </Box>
      <Box pb={20}>
        <Flex as="nav">
          <NavLink href="#!">Home</NavLink>
          <NavLink href="#!">Blog</NavLink>
          <NavLink href="#!">About</NavLink>
        </Flex>
      </Box>
      <Card>
        <Text>
          Cupcake ipsum dolor sit amet chocolate bar. Apple pie macaroon muffin
          jelly candy cake soufflé muffin croissant. Gummies jelly beans cotton
          candy fruitcake. Wafer lemon drops soufflé cookie. Sesame snaps
          fruitcake cheesecake danish toffee marzipan biscuit.
        </Text>
      </Card>
    </GridStyled>
  );
}
