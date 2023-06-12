const disciplinaValidator = {
    nome: {
        required: 'Campo Obrigatório',
        minLength: {
            value: 3,
            message: 'O mínimo é 3'
        },
        maxLength: {
            value: 15,
            message: 'O máximo é 15'
        },
    },
    curso: {
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
            message: "curso inválido"
        },
    },
}


export default disciplinaValidator