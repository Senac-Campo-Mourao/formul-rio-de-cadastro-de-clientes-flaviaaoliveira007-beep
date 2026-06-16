document.getElementById('formCadastro').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('clientName').value;
    const CPF = document.getElementById('clientCPF').value;
    const tel = document.getElementById('clientTel').value;
    const salario = document.getElementById('clientSalario').value;
    const birth = document.getElementById('clientBirth').value;
    console.log(name);
    console.log(CPF);
    console.log(tel);
    console.log(salario);
    console.log(birth);


});