
const container = document.getElementById('texto')


fetch('https://akabab.github.io/superhero-api/api/id/644.json')
.then(response => response.json())
.then(response => exibeDados(response))

function exibeDados(dados) 
{
    let elemento = document.createElement('div')

    elemento.innerHTML = `
    <p id="texto"> <b>Nome:</b> ${dados.biography.fullName}</p>
    <p id="texto"> <b>Local de Nascimento:</b> ${dados.biography.placeOfBirth}</p>
    <p id="texto"> <b>Primeira Aparição:</b> ${dados.biography.firstAppearance}</p>
    <p id="texto"> <b>Conexões:</b> ${dados.connections.groupAffiliation}</p>
    <p id="texto"> <b>Parentes:</b> ${dados.connections.relatives}</p>
   
    
    
    `
    
    container.append(elemento)

}
