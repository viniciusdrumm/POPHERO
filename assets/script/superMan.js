
const container = document.getElementById('texto')


fetch('https://akabab.github.io/superhero-api/api/id/644.json')
.then(response => response.json())
.then(response => exibeDados(response))

function exibeDados(dados) 
{
    let elemento = document.createElement('div')

    elemento.innerHTML = `
    <p id="texto"> Nome: ${dados.biography.fullName}</p>
    <p id="texto"> Local de Nascimento: ${dados.biography.placeOfBirth}</p>
    <p id="texto"> Primeira Aparição: ${dados.biography.firstAppearance}</p>
    <p id="texto"> Conexões: ${dados.connections.groupAffiliation}</p>
    <p id="texto"> Parentes: ${dados.connections.relatives}</p>
   
    
    
    `
    
    container.append(elemento)

}
