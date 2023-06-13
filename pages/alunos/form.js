import Pagina from '@/Componentes/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsCheckSquare, BsArrowLeftSquare } from 'react-icons/bs'
import alunoValidator from '@/validators/alunoValidator'
import { mask } from 'remask'

const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit, setValue, formState: {errors} } = useForm()

    function salvar(dados) {
        axios.post('/api/alunos', dados)
        push('/alunos')
    }


    function handleChange(event) {

        const name = event.target.name
        const valor = event.target.value
        const mascara = event.target.getAttribute('mask')
    
        setValue(name, mask(valor, mascara))
    
    }

    return (
        <Pagina titulo='Alunos'>
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control isInvalid={errors.nome} type="text" {...register('nome', alunoValidator.nome)} />
                </Form.Group>
                {
                    errors.nome &&
                    <p className='mt -1 text-danger'>{errors.nome.message}</p>
                }
                <Form.Group className="mb-3" controlId="cpf">
                    <Form.Label>CPF:</Form.Label>
                    <Form.Control mask='999.999.999-99' 
                     isInvalid={errors.cpf} type="text" 
                     {...register('cpf', alunoValidator.cpf)} 
                     onChange={handleChange}
                      />
                </Form.Group>
                {
                    errors.cpf &&
                    <p className='mt -1 text-danger'>{errors.cpf.message}</p>
                }
                <Form.Group className="mb-3" controlId="matricula">
                    <Form.Label>Matricula: </Form.Label>
                    <Form.Control isInvalid={errors.matricula} type="text" {...register('matricula', alunoValidator.matricula)} />
                </Form.Group>
                {
                    errors.matricula &&
                    <p className='mt -1 text-danger'>{errors.matricula.message}</p>
                }
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control isInvalid={errors.email} type="text" {...register('email', alunoValidator.email)} />
                </Form.Group>
                {
                    errors.email &&
                    <p className='mt -1 text-danger'>{errors.email.message}</p>
                }
                <Form.Group className="mb-3" controlId="telefone">
                    <Form.Label>Telefone: </Form.Label>
                    <Form.Control isInvalid={errors.telefone} type="text" {...register('telefone', alunoValidator.telefone)} />
                </Form.Group>
                {
                    errors.telefone &&
                    <p className='mt -1 text-danger'>{errors.telefone.message}</p>
                }
                <Form.Group className="mb-3" controlId="cep">
                    <Form.Label>CEP: </Form.Label>
                    <Form.Control isInvalid={errors.cep} type="text" {...register('cep', alunoValidator.cep)} />
                </Form.Group>
                {
                    errors.cep &&
                    <p className='mt -1 text-danger'>{errors.cep.message}</p>
                }
                <Form.Group className="mb-3" controlId="logradouro">
                    <Form.Label>LOGRADOURO: </Form.Label>
                    <Form.Control isInvalid={errors.logradouro} type="text" {...register('logradouro', alunoValidator.logradouro)} />
                </Form.Group>
                {
                    errors.logradouro &&
                    <p className='mt -1 text-danger'>{errors.logradouro.message}</p>
                }
                <Form.Group className="mb-3" controlId="complemento">
                    <Form.Label>COMPLEMENTO: </Form.Label>
                    <Form.Control isInvalid={errors.complemento} type="text" {...register('complemento', alunoValidator.complemento)} />
                </Form.Group>
                {
                    errors.complemento &&
                    <p className='mt -1 text-danger'>{errors.complemento.message}</p>
                }
                <Form.Group className="mb-3" controlId="numero">
                    <Form.Label>Numero: </Form.Label>
                    <Form.Control isInvalid={errors.numero} type="text" {...register('numero', alunoValidator.numero)} />
                </Form.Group>
                {
                    errors.numero &&
                    <p className='mt -1 text-danger'>{errors.numero.message}</p>
                }
                <Form.Group className="mb-3" controlId="bairro">
                    <Form.Label>Bairro: </Form.Label>
                    <Form.Control isInvalid={errors.bairro} type="text" {...register('bairro', alunoValidator.bairro)} />
                </Form.Group>
                {
                    errors.bairro &&
                    <p className='mt -1 text-danger'>{errors.bairro.message}</p>
                }
                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckSquare className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/Disciplinas">
                        <BsArrowLeftSquare className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form