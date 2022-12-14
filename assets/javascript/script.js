//Função para adicionar uma nova linha na tabela
function addToTable() {
    setTimeout(function() {

    //Definindo as variaveis e recebendo os dados

    let heros = fetch('http://localhost:3000/api/heros');
    heros
    .then(data => data.json())
    .then(data => data.map(hero => {
    
    let _ul = document.getElementsByClassName("heroList")[0];
    console.log(_ul);
    let _li = _ul.childNodes[1];
        _li = _li.cloneNode(true);


        let _spanNum = _li.getElementsByClassName('numero')[0];
        let _spanName = _li.getElementsByClassName('heroName')[0];
        
   _spanNum.innerHTML = hero.id;
    _spanName.innerHTML = hero.nome;
   _ul.appendChild(_li);
   }))
    .catch(err => console.error(err))
    }, 300);
   }









    let name = _li.getElementsByClassName('numero')[0];
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let work = document.getElementById('work').value;
    let table = document.getElementById("myTable");

    let tableSize = table.rows.length; //Calculando o tamanho da Tabela
    let row = table.insertRow(tableSize); //Inserindo uma linha abaixo da Tabela
    let cell1 = row.insertCell(0); //Inserindo as celulas da linha
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    row.id = tableSize; //Adicionando o id no elemento a ser criado

    //Criando o codigo do botão para remover a linha
    let btnCode = "<button class='remove-btn' onclick='removeToTable(this)'>Remover</button>";

    //Preenchendo as celulas da linha
    cell1.innerHTML = tableSize;
    cell2.innerHTML = name;
    cell3.innerHTML = email;
    cell4.innerHTML = phone;
    cell5.innerHTML = work;
    cell6.innerHTML = btnCode;

    //Limpando os campos de inserção de dados
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('work').value = "";

    //Retornando 'false' para impedir o reload da pagina
    return false;
}

//Função para remover uma linha
function removeToTable(id){

    let row = id.parentNode.parentNode.id; //Pegando o id do avô do botão
    row = document.getElementById(row); //Recebendo o elemento da linha pelo ID
    row.parentNode.removeChild(row); //Removendo a linha

    //Retornando 'false' para impedir o reload da pagina
    return false;
}