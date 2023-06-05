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

    const [semestres, setSemestres] = useState([])

    useEffect(() => {
        getAll()

    }, [])

    function getAll(){
        axios.get('/api/semestres').then(resultado =>{
            setSemestres(resultado.data);
        })
    }

function excluir(id){
    axios.delete('/api/semestres/' + id)
    getAll()
}

    return (
        <>
            <Pagina Titulo='Semestres'>

            </Pagina>
            <Container>

                <Link href="/semestres/form" className='mb-2 btn btn-primary mt-2'>
                    <AiFillPlusCircle />
                    Novo
                </Link>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nome</th>
                            <th>INICIO</th>
                            <th>FIM</th>
                        </tr>
                    </thead>
                    <tbody>
                        {semestres.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <Link href={'/semestres/' + item.id}>
                                        <BsFillPencilFill title="Alterar" />
                                    </Link>
                                    {' '}
                                    <Button variant='secundary' >
                                        <BsFillTrash3Fill title="Excluir" onClick={() => excluir(item.id)} className="primary" />
                                    </Button>


                                </td>
                                <td>{item.nome}</td>
                                <td>{item.inicio}</td>
                                <td>{item.fim}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default index