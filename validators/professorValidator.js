const professorValidator = {
    nome: {
        required: 'Campo Obrigatório',
        minLength: {
            value: 3,
            message: 'O mínimo é 3'
        },
        maxLength: {
            value: 10,
            message: 'O máximo é 10'
        },
    },
    cpf: {
        required: 'Campo Obrigatório',
        minLength: {
            value: 11,
            message: 'O mínimo é 11'
        },
        maxLength: {
            value: 11,
            message: 'O máximo é 11'
        },
        pattern: {
            value: /^\d{3}.\d{3}.\d{3}-\d{2}$/,
            message: "cpf inválido"
        },
    },
    matricula: {
        required: 'Campo Obrigatório',
        minLength: {
            value: 11,
            message: 'O mínimo é 11'
        },
        maxLength: {
            value: 11,
            message: 'O máximo é 11'
        },
        pattern: {
            value: /^\d{3}.\d{3}.\d{3}-\d{2}$/,
            message: "maricula inválida"
        },
    },
    salario: {
        required: 'Campo Obrigatório',
    },
    email: {
        required: 'Campo Obrigatório',
        minLength: {
            value: 11,
            message: 'O mínimo é 11'
        },
        maxLength: {
            value: 22,
            message: 'O máximo é 22'
        },
        pattern: {
            value: /^\d{3}.\d{3}.\d{3}-\d{2}$/,
            message: "email inválido"
        },
    },
    telefone: {
        required: 'Campo Obrigatório',
        minLength: {
            value: 11,
            message: 'O mínimo é 11'
        },
        maxLength: {
            value: 11,
            message: 'O máximo é 11'
        },
        pattern: {
            value: /^\d{3}.\d{3}.\d{3}-\d{2}$/,
            message: "telefone inválido"
        },
    },
    cep: {
        required: 'Campo Obrigatório',
        minLength: {
            value: 7,
            message: 'O mínimo é 7'
        },
        maxLength: {
            value: 7,
            message: 'O máximo é 7'
        },
        pattern: {
            value: /^\d{3}.\d{3}.\d{3}-\d{2}$/,
            message: "cep inválido"
        },
    },
    logradouro: {
        required: 'Campo Obrigatório',
        minLength: {
            value: 15,
            message: 'O mínimo é 15'
        },
        maxLength: {
            value: 15,
            message: 'O máximo é 15'
        },
        pattern: {
            value: /^\d{3}.\d{3}.\d{3}-\d{2}$/,
            message: "logradouro inválido"
        },
    },
    complemento: {
        required: 'Campo Obrigatório',
        minLength: {
            value: 11,
            message: 'O mínimo é 11'
        },
        maxLength: {
            value: 15,
            message: 'O máximo é 15'
        },
        pattern: {
            value: /^\d{3}.\d{3}.\d{3}-\d{2}$/,
            message: "complemento inválido"
        },
    },
    numero: {
        required: 'Campo Obrigatório',
        minLength: {
            value: 11,
            message: 'O mínimo é 11'
        },
        maxLength: {
            value: 11,
            message: 'O máximo é 11'
        },
        pattern: {
            value: /^\d{3}.\d{3}.\d{3}-\d{2}$/,
            message: "numero inválido"
        },
    },
    bairro: {
        required: 'Campo Obrigatório',
        minLength: {
            value: 11,
            message: 'O mínimo é 11'
        },
        maxLength: {
            value: 15,
            message: 'O máximo é 15'
        },
        pattern: {
            value: /^\d{3}.\d{3}.\d{3}-\d{2}$/,
            message: "bairro inválido"
        },
    },
}
export default professorValidator