const requestURL = '../json/mycookbook.json';

async function fetchmycookbookjson(){
    const response = await fetch (requestURL);
    const mycookbookjson = await response.json();
    return mycookbookjson
}

fetchmycookbookjson().then(mycookbookjson=>{
    for (let index=0; index < mycookbookjson.mycookbook.length ; index++){
        const cookBookSection=document.getElementById('cookBook') 
        console.log(mycookbookjson.mycookbook[index].titulo)
        let id = mycookbookjson.mycookbook[index].id
        let title = mycookbookjson.mycookbook[index].titulo
        let ingredients = mycookbookjson.mycookbook[index].ingredientes
        let instructions = mycookbookjson.mycookbook[index].instrucciones

        
        cookBookSection.innerHTML += `${title}`
    }
})

