$("#CPF").mask("000.000.000-00");
$("#cep").mask("00000-000");
$("#phone").mask("(00) 00000-0000");

let valid;

$("form").validate({
    rules: 
    {
        name: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        phone: {
            required: true
        },
        CPF: {
            required: true
        },
        address: {
            required: true
        },
        cep: {
            required: true
        }
    },
    messages: {
        name: "O nome precisa estar completo",
        email: "Preencha um endereço de email válido",
        phone: "Telefone inválido",
        CPF: "CPF inválido",
        address: "Endereço inválido",
        cep: "CEP inválido"

    }
});

