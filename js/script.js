$("#phone").mask("(00) 00000-0000");

$("form").validate({
    rules: {
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
    },
    messages: {
        name: "O campo nome é obrigatório",
        email: "Preencha um campo de email válido",
        phone: "Preencha um telefone válido"
    }
});
