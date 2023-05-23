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

    const [cursos, setCursos] = useState([])

    useEffect(() => {
        setCursos(getAll())
    }, [])

    function getAll() {
        return JSON.parse(window.localStorage.getItem('cursos')) || []
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro')) {
            const itens = getAll()
            itens.splice(id, 1)
            window.localStorage.setItem('cursos', JSON.stringify(itens))
            setCursos(itens)
        }
    }
    return (
        <>
            <Pagina Titulo='Cursos'>

            </Pagina>
            <Container>

                <Link href="/cursos/form" className='mb-2 btn btn-primary mt-2'>
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
                        {cursos.map((item, i) => (
                            <tr key={i}>
                                <td>
                                    <Link href={'/cursos/' + i}>
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