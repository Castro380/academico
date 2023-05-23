import Pagina from '@/Componentes/Pagina'
import Link from 'next/link'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsCheckSquare, BsArrowLeftSquare } from 'react-icons/bs'

const form = () => {

    const { register, handleSubmit } = useForm()

    function salvar(dados) { //salvar dados no localstorage
        const cursos = JSON.parse(window.localStorage.getItem('cursos')) || [] // tirar de uma string
        cursos.push(dados)
        window.localStorage.setItem('cursos', JSON.stringify(cursos))//transformar em uma string
    }

    return (
        <Pagina titulo='Forms'>



            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control type="text" {...register('nome')} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="duracao">
                    <Form.Label>Duração:</Form.Label>
                    <Form.Control type="text" {...register('duracao')} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="modalidade">
                    <Form.Label>Modalidade:</Form.Label>
                    <Form.Control type="text" {...register('modalidade')} />
                </Form.Group>
                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckSquare className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/cursos">
                        <BsArrowLeftSquare className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form