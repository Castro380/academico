import Pagina from '@/Componentes/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsCheckSquare, BsArrowLeftSquare } from 'react-icons/bs'
import cursovalidator from '@/validators/cursoValidator'

const form = () => {


    const { push } = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm()

    function salvar(dados) { //salvar dados no localstorage
        const cursos = JSON.parse(window.localStorage.getItem('cursos')) || [] // tirar de uma string
        cursos.push('/cursos')
        window.localStorage.setItem('cursos', JSON.stringify(cursos))//transformar em uma string
    }

    return (
        <Pagina titulo='Cursos'>

            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control insivalid={errors.nome} type="text" {...register('nome', cursovalidator.nome)} />
                </Form.Group>
                {
                    errors.nome &&
                    <p className='mt -1 text-danger'>{errors.nome.message}</p>
                }
                <Form.Group className="mb-3" controlId="duracao">
                    <Form.Label>Duração:</Form.Label>
                    <Form.Control isInvalid={errors.duracao} type="text" {...register('duracao', cursoValidator.duracao)} />
                </Form.Group>
                {
                    errors.duracao &&
                    <p className='mt -1 text-danger'>{errors.duracao.message}</p>
                }
                <Form.Group className="mb-3" controlId="modalidade">
                    <Form.Label>Modalidade:</Form.Label>
                    <Form.Control isInvalid={errors.modalidade} type="text" {...register('modalidade', cursoValidator.modalidade)} />
                </Form.Group>
                {
                    errors.modalidade &&
                    <p className='mt -1 text-danger'>{errors.modalidade.message}</p>
                }
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