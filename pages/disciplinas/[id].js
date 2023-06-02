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

            axios.get('/api/disciplinas/' + query.id).then(resultado => {
                const disciplina = resultado.data
        
                for(let atributo in disciplina){
                  setValue(atributo, disciplina[atributo]) 
                }
              })
        }
    }, [query.id])

    function salvar(dados) { 
        axios.put('/api/disciplinas/' + query.id, dados)
        push('/disciplinas')
    }

    return (
        <Pagina titulo='Forms'>



            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control type="text" {...register('nome')} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="curso">
                    <Form.Label>Curso:</Form.Label>
                    <Form.Control type="text" {...register('curso')} />
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