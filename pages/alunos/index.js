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

    const [alunos, setAlunos] = useState([])

    useEffect(() => {
        getAll()

    }, [])

    function getAll(){
        axios.get('/api/alunos').then(resultado =>{
            setAlunos(resultado.data);
        })
    }

function excluir(id){
    axios.delete('/api/alunos/' + id)
    getAll()
}

    return (
        <>
            <Pagina Titulo='Disciplinas'>

            </Pagina>
            <Container>

                <Link href="/alunos/form" className='mb-2 btn btn-primary mt-2'>
                    <AiFillPlusCircle />
                    Novo
                </Link>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Matricula</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Cep</th>
                            <th>Logradouro</th>
                            <th>Complemento</th>
                            <th>Numero</th>
                            <th>Bairro</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alunos.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <Link href={'/alunos/' + item.id}>
                                        <BsFillPencilFill title="Alterar" />
                                    </Link>
                                    {' '}
                                    <Button variant='secundary' >
                                        <BsFillTrash3Fill title="Excluir" onClick={() => excluir(item.id)} className="primary" />
                                    </Button>


                                </td>
                                <td>{item.nome}</td>
                                <td>{item.cpf}</td>
                                <td>{item.matricula}</td>
                                <td>{item.email}</td>
                                <td>{item.telefone}</td>
                                <td>{item.cep}</td>
                                <td>{item.logradouro}</td>
                                <td>{item.complemento}</td>
                                <td>{item.numero}</td>
                                <td>{item.bairro}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default index