import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/cursos">Academico</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/cursos/">Cursos</Nav.Link>
            <Nav.Link href="/disciplinas/">Disciplina</Nav.Link>
            <Nav.Link href="/alunos/">Alunos</Nav.Link>
            <Nav.Link href="/professores/">Professores</Nav.Link>
            <Nav.Link href="/turmas/">Turmas</Nav.Link>
            <Nav.Link href="/salas/">Salas</Nav.Link>
            <Nav.Link href="/semestres/">semestres</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho