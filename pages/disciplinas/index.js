import Pagina from '@/Componentes/Pagina'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { set } from 'react-hook-form';
import { AiFillPlusCircle } from 'react-icons/ai'
import { BsFillTrash3Fill } from 'react-icons/bs'
import { BsFillPencilFill } from 'react-icons/bs'


const index = () => {

    const [disciplinas, setDisciplinas] = useState([])

    useEffect(() => {

    }, [])

    return (
        <>
            <Pagina Titulo='Disciplinas'>

            </Pagina>
            <Container>

                <Link href="/disciplinas/form" className='mb-2 btn btn-primary mt-2'>
                    <AiFillPlusCircle />
                    Novo
                </Link>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Modalidade</th>
                            <th>Duração</th>
                        </tr>
                    </thead>
                    <tbody>
                        {disciplinas.map((item, i) => (
                            <tr key={i}>
                                <td>
                                    <Link href={'/disciplina/' + i}>
                                        <BsFillPencilFill title="Alterar" />
                                    </Link>
                                    {' '}
                                    <Button variant='secundary' >
                                        <BsFillTrash3Fill title="Excluir" onClick={() => excluir(i)} className="primary" />
                                    </Button>


                                </td>
                                <td>{item.nome}</td>
                                <td>{item.modalidade}</td>
                                <td>{item.duracao}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default index