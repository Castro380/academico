import Pagina from '@/Componentes/Pagina'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { set } from 'react-hook-form';
import { AiFillPlusCircle } from 'react-icons/ai'
import { BsFillTrash3Fill } from 'react-icons/bs'
import { BsFillPencilFill } from 'react-icons/bs'


const index = () => {

    const [salas, setSalas] = useState([])

    useEffect(() => {
        getAll()

    }, [])

    function getAll(){
        axios.get('/api/salas').then(resultado =>{
            setSalas(resultado.data);
        })
    }

function excluir(id){
    axios.delete('/api/salas/' + id)
    getAll()
}

    return (
        <>
            <Pagina Titulo='Salas'>

            </Pagina>
            <Container>

                <Link href="/salas/form" className='mb-2 btn btn-primary mt-2'>
                    <AiFillPlusCircle />
                    Novo
                </Link>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nome</th>
                            <th>CAPACIDADE</th>
                            <th>TIPO</th>
                        </tr>
                    </thead>
                    <tbody>
                        {salas.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <Link href={'/salas/' + item.id}>
                                        <BsFillPencilFill title="Alterar" />
                                    </Link>
                                    {' '}
                                    <Button variant='secundary' >
                                        <BsFillTrash3Fill title="Excluir" onClick={() => excluir(item.id)} className="primary" />
                                    </Button>


                                </td>
                                <td>{item.nome}</td>
                                <td>{item.capacidade}</td>
                                <td>{item.tipo}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default index