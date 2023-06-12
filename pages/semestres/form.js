import Pagina from '@/Componentes/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsCheckSquare, BsArrowLeftSquare } from 'react-icons/bs'
import semestreValidator from '@/validators/semestreValidator'

const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit, formState: {errors} } = useForm()

    function salvar(dados) {
        axios.post('/api/semestres', dados)
        push('/semestres')
    }
    return (
        <Pagina titulo='Semestres'>
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control isInvalid={errors.nome} type="text" {...register('nome', semestreValidator.nome)} />
                </Form.Group>
                {
                    errors.nome &&
                    <p className='mt -1 text-danger'>{errors.nome.message}</p>
                }
                <Form.Group className="mb-3" controlId="inicio">
                    <Form.Label>INICIO:</Form.Label>
                    <Form.Control isInvalid={errors.inicio} type="date" {...register('inicio', semestreValidator.inicio)} />
                </Form.Group>
                {
                    errors.inicio &&
                    <p className='mt -1 text-danger'>{errors.inicio.message}</p>
                }
                <Form.Group className="mb-3" controlId="fim">
                    <Form.Label>FIM: </Form.Label>
                    <Form.Control isInvalid={errors.fim} type="date" {...register('fim', semestreValidator.fim)} />
                </Form.Group>
                {
                    errors.fim &&
                    <p className='mt -1 text-danger'>{errors.fim.message}</p>
                }
                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckSquare className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/semestres">
                        <BsArrowLeftSquare className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form