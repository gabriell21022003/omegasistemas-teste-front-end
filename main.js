fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(res => {
    console.log(res)
    return res.json()
}).then(body =>{
    console.log(body)
    document.getElementById("op1").innerHTML=body
})