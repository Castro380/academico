import Pagina from '@/Componentes/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsCheckSquare, BsArrowLeftSquare } from 'react-icons/bs'

const form = () => {

    const { push, query } = useRouter()
    const { register, handleSubmit, setValue } = useForm()

    useEffect(() => {

        if (query.id) {

            axios.get('/api/semestres/' + query.id).then(resultado => {
                const semestres = resultado.data
        
                for(let atributo in semestres){
                  setValue(atributo, semestres[atributo]) 
                }
              })
        }
    }, [query.id])

    function salvar(dados) { 
        axios.put('/api/semestres/' + query.id, dados)
        push('/semestres')
    }

    return (
        <Pagina titulo='Semestres'>



            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control type="text" {...register('nome')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="inicio">
                    <Form.Label>INICIO:</Form.Label>
                    <Form.Control type="date" {...register('inicio')} />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="inicio">
                    <Form.Label>FIM:</Form.Label>
                    <Form.Control type="date" {...register('fim')} />
                </Form.Group>

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