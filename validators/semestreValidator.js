const semestreValidator = {
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
    inicio: {
        required: 'Campo Obrigatório',
        minLength: {
            value: 8,
            message: 'O mínimo é 8'
        },
        maxLength: {
            value: 8,
            message: 'O máximo é 8'
        },
        pattern: {
            value: /^\d{3}.\d{3}.\d{3}-\d{2}$/,
            message: "inicio inválido"
        },
    },
    fim: {
        required: 'Campo Obrigatório',
        minLength: {
            value: 8,
            message: 'O mínimo é 8'
        },
        maxLength: {
            value: 8,
            message: 'O máximo é 8'
        },
        pattern: {
            value: /^\d{3}.\d{3}.\d{3}-\d{2}$/,
            message: "fim inválido"
        },
    },
}

export default semestreValidator