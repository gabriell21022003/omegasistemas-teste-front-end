fetch ('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response1 =>{    
    
    console.log(response1)
    return response1.json()

}).then(body =>{

    console.log(body)

    body.forEach(element => {
        document.getElementById("select").innerHTML+=`<option id="${element.id}">${element.sigla}</option>`
    })
})

function mostraCidade(){

    document.getElementById("cidade").innerHTML='<option id=0>Selecione um Municipio</option>';
   
    const select = document.getElementById("select");
    console.log(select.selectedIndex)

    const item = select.options[select.selectedIndex].text

    console.log(item)

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${item}/municipios`).then(response2 => {

    console.log(response2)
   
    return response2.json()

}).then(body2 =>{
    console.log(body2)
    body2.forEach(element => {
        document.getElementById("cidade").innerHTML+=`<option id="${element.id}">${element.nome}</option>`
    })
})

}







