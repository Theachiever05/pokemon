// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
// the images are present in above mentioned links

const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


for(let i=1;i<=151;i++)
{
    let pokemon=document.createElement('div');
    let label=document.createElement('label');
    pokemon.classList.add('pokemon');
    label.innerText=`#${i}`
    let imgg=document.createElement('img');
    imgg.src=`${baseURL}${i}.png`
    pokemon.appendChild(imgg)
    pokemon.appendChild(label)
    container.appendChild(pokemon)
}