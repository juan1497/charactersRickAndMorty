const getCharacters=async ()=>{
    const charactersUrl=await fetch("https://rickandmortyapi.com/api/character");
    const charactersJson =await charactersUrl.json();
    // console.log(charactersJson.results);
    const characters=charactersJson.results.map((element)=>(
        {
        id : element.id,
        name : element.name,
        image : element.image,
        status:element.status
        }     
    ))
    console.log("esto son los personajes",characters)

    displayCharacters(characters)
}
const ul=document.querySelector(".characters")

const displayCharacters=characters=>{
    const characterHtml=characters.map((character)=>
        `
        <li>
        <h2>${character.name}</h2>
        <img src="${character.image}" alt="${character.name}"/>
        <p>${character.status}</p>
         `
    )
    ul.innerHTML=characterHtml;
}
getCharacters();