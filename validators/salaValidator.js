const salaValidator = {
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
    capacidade: {
        required: 'Campo Obrigatório',
        minLength: {
            value: 11,
            message: 'O mínimo é 11'
        },
        maxLength: {
            value: 33,
            message: 'O máximo é 33'
        },
        pattern: {
            value: /^\d{3}.\d{3}.\d{3}-\d{2}$/,
            message: "capacidade inválida"
        },
    },
    tipo: {
        required: 'Campo Obrigatório',
        minLength: {
            value: 1,
            message: 'O mínimo é 1'
        },
        maxLength: {
            value: 2,
            message: 'O máximo é 2'
        },
        pattern: {
            value: /^\d{3}.\d{3}.\d{3}-\d{2}$/,
            message: "tipo inválido"
        },
    },
}

export default salaValidator