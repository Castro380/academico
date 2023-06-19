import Pagina from '@/Componentes/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsCheckSquare, BsArrowLeftSquare } from 'react-icons/bs'
import { mask } from 'remask'

const form = () => {

    const { push, query } = useRouter()
    const { register, handleSubmit, setValue } = useForm()

    useEffect(() => {

        if (query.id) {

            axios.get('/api/professores/' + query.id).then(resultado => {
                const professores = resultado.data
        
                for(let atributo in professores){
                  setValue(atributo, professores[atributo]) 
                }
              })
        }
    }, [query.id])

    function salvar(dados) { 
        axios.put('/api/professores/' + query.id, dados)
        push('/professores')
    }

    return (
        <Pagina titulo='Forms'>



            <Form>
            <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>NOME:</Form.Label>
                    <Form.Control type="text" {...register('nome')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="cpf">
                    <Form.Label>CPF:</Form.Label>
                    <Form.Control 
                    mask='999.999.999-99'
                    type="text" {...register('cpf')} 
                    onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="matricula">
                    <Form.Label>MATRÍCULA: </Form.Label>
                    <Form.Control type="text" {...register('matricula')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="salario">
                    <Form.Label>SALÁRIO: </Form.Label>
                    <Form.Control type="text" {...register('salario')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control type="text" {...register('email')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="telefone">
                    <Form.Label>Telefone: </Form.Label>
                    <Form.Control 
                    mask='999.999.999-99'
                    type="text" {...register('telefone')}
                    onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="cep">
                    <Form.Label>CEP: </Form.Label>
                    <Form.Control 
                    mask='999.999.999-99'
                    type="text" {...register('cep')} 
                    onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="logradouro">
                    <Form.Label>LOGRADOURO: </Form.Label>
                    <Form.Control type="text" {...register('logradouro')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="complemento">
                    <Form.Label>COMPLEMENTO: </Form.Label>
                    <Form.Control type="text" {...register('complemento')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="numero">
                    <Form.Label>Numero: </Form.Label>
                    <Form.Control type="text" {...register('numero')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="bairro">
                    <Form.Label>Bairro: </Form.Label>
                    <Form.Control type="text" {...register('bairro')} />
                </Form.Group>
                
                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckSquare className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/professores">
                        <BsArrowLeftSquare className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form