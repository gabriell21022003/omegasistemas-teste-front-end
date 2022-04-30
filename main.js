alert('Selecione um estado e clique em consultar para exibir informações')
//api of brazilian states connection
fetch ('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response1 =>{    
    return response1.json()
    
}).then(body =>{
    body.forEach(element => {
        //show states in the html select
        document.getElementById("select").innerHTML+=`<option id="${element.id}" value="${element.id}">${element.nome}</option>`
    })
})

//fucntion to show cases deaths and suspects
function mostraCasos(){
    fetch('https://covid19-brazil-api.now.sh/api/report/v1').then(response3 => {
    
    return response3.json()

    }).then(body3 => {

        var chooseState = document.getElementById('select')
        var value = select.options[select.selectedIndex].value
        console.log(body3.data)

        const estado=body3.data.find(function(e){
            if(e.uid==value){
                return e
            }
        })
        console.log(estado)
        if(estado){
            document.getElementById('states').innerHTML+=`<h3 id="${estado.uid}">${estado.state}</h3>`
            document.getElementById('cases').innerHTML+=`<h3 id="${estado.uid}">${new Intl.NumberFormat('pt-BR').format(estado.cases)}</h3>`
            document.getElementById('deaths').innerHTML+=`<h3 id="${estado.uid}">${new Intl.NumberFormat('pt-BR').format(estado.deaths)}</h3>`
            document.getElementById('suspects').innerHTML+=`<h3 id="${estado.uid}">${new Intl.NumberFormat('pt-BR').format(estado.suspects)}</h3>`
        }
    })  
}

fetch('https://covid19-brazil-api.now.sh/api/status/v1').then(response4 => {
    response4.json()
    console.log(response4)

    //checkibg api status
    if(response4.status==200){
        document.getElementById('status').innerHTML="Conectada  "
    } else 
    if(response4.status==404){
        document.getElementById('status').innerHTML="Erro ao conectar"
    }
})
.then(body4 => {
    console.log(body4) 
})


