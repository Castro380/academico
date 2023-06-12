import Pagina from '@/Componentes/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsCheckSquare, BsArrowLeftSquare } from 'react-icons/bs'
import salaValidator from '@/validators/salaValidator'

const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit, formState: {errors} } = useForm()

    function salvar(dados) {
        axios.post('/api/salas', dados)
        push('/salas')
    }
    return (
        <Pagina titulo='Salas'>
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control isInvalid={errors.nome} type="text" {...register('nome', salaValidator.nome)} />
                </Form.Group>
                {
                    errors.nome &&
                    <p className='mt -1 text-danger'>{errors.nome.message}</p>
                }
                <Form.Group className="mb-3" controlId="capacidade">
                    <Form.Label>CAPACIDADE:</Form.Label>
                    <Form.Control isInvalid={errors.capacidade} type="text" {...register('capacidade', salaValidator.capacidade)} />
                </Form.Group>
                {
                    errors.capacidade &&
                    <p className='mt -1 text-danger'>{errors.capacidade.message}</p>
                }
                <Form.Group className="mb-3" controlId="tipo">
                    <Form.Label>TIPO: </Form.Label>
                    <Form.Control isInvalid={errors.tipo} type="text" {...register('tipo', salaValidator.tipo)} />
                </Form.Group>
                {
                    errors.tipo &&
                    <p className='mt -1 text-danger'>{errors.tipo.message}</p>
                }
                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckSquare className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/salas">
                        <BsArrowLeftSquare className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form