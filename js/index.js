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
        let resume = mycookbookjson.mycookbook[index].resumen
        let img = mycookbookjson.mycookbook[index].img        
                
        cookBookSection.innerHTML += `
        <section class="slider">
            <figure class="images">
                <img src="${img}" class="img">
            </figure>

            <div class="text">            
                <h2 class="idTitle">${id}.-${title}</h2> <a href=""></a>
                <p class="instructions">
                ${resume}
                </p>
            </div>
        </section>
        
        `
    }

})


fetchmycookbookjson().then(mycookbookjson=>{ 
    for (let index=0; index < mycookbookjson.mycookbook.length ; index++){
        const pickOneSection=document.getElementById('pickOne') 
        console.log(mycookbookjson.mycookbook[index].titulo)
        let ingredients = mycookbookjson.mycookbook[index].ingredientes
        let  instructions= mycookbookjson.mycookbook[index].instrucciones


            for(let j=0; j<ingredients.length; j++){
                pickOneSection.innerHTML += `
                
                `
                console.log(ingredients[j])
            } 

        }
})


document.getElementById("bttnNumber").onclick =function whichrecipe(){
    let  num = document.getElementById("inputNumber").value;
    console.log(num)
    return(num)
}

console.log(num)


document.getElementById("bttnText").onclick =function whichIngredient(){
    let  text = document.getElementById("inputText").value;
    console.log(text)
}
