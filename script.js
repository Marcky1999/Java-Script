function validaCampo() {
    const A = parseFloat($('#Campo-A').val());
    const B = parseFloat($('#Campo-B').val());
    
    if (B > A) {
        alert("O campo está válido");
    } else {
        alert("O campo está inválido");
    }
}