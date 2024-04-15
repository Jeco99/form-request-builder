import { Card, Title, Container } from "@mantine/core";

export default function FormCard() {
  return (
    <>
      <Card>
        <Title>Form Name</Title>
        <p>Description</p>
        <Container>
          <label htmlFor=""></label>
          <input type="text" />
        </Container>
      </Card>
    </>
  );
}
