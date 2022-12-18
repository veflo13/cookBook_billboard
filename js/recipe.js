const requestURL = '../json/mycookbook.json';


async function fetchmycookbookjson(){
    const response = await fetch (requestURL);
    const mycookbookjson = await response.json();
    return mycookbookjson
}

let num = 2
let length = 10
let res = length - num

console.log(num)
console.log(length)
console.log(res)



fetchmycookbookjson().then(mycookbookjson=>{    
    for (let index = num; index < mycookbookjson.mycookbook.length ; index = index + res){
        const cookBookSection=document.getElementById('cookBook') 
        console.log(mycookbookjson.mycookbook[index].titulo)
        let id = mycookbookjson.mycookbook[index].id
        let title = mycookbookjson.mycookbook[index].titulo
        let ingredients = mycookbookjson.mycookbook[index].ingredientes
        let instructions = mycookbookjson.mycookbook[index].instrucciones
        let img = mycookbookjson.mycookbook[index].img


        
        cookBookSection.innerHTML += `

        <div class="images">
            <img class="img" src="${img}"></img> 
        </div>
        <h2>${id}.- ${title}</h2>
        <div class="instructions">
            <p>${instructions}</p>
        </div> 
        `
        
        console.log(instructions)
            for(let j=0; j<ingredients.length; j++){
                console.log(instructions)
                
                cookBookSection.innerHTML += `
                <div class="container">
                    <ul>
                        <li>${ingredients[j]}</li>
                    </ul> 
                    
                </div>
                `
            }
            
    }

})
