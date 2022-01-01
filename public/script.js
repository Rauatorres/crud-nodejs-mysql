fetch('http://localhost:3000/api/v1/getdata')
.then(res => res.json())
.then(jsondata =>{
	showData(jsondata)
})

function showData(data){
	$('tbody').html('')
	for (let index in data){
		$('tbody').html($('tbody').html() + '<tr>' +                 
		
			'<td>' + data[index].IDPRODUTO + '</td>' +                                                                      '<td>' + data[index].NOME + '</td>' +                   '<td>' + data[index].PRECO + '</td>' +                  '<td>' + data[index].DESCRICAO + '</td>' +                         

		

		`<td><input type="button" value="Excluir" onclick="deletarProduto(${data[index].IDPRODUTO})"/></td>` +  

		'</tr>')

		$('select').html($('select').html() + `<option value="${data[index].IDPRODUTO}">${data[index].IDPRODUTO}</option>`)
		
		//$('table').html(index)
	}
}

function cadastrarProduto(){
	fetch('http://localhost:3000/api/v1/register', {
		method: "POST",
		headers: {"Content-Type": "application/json"},
		body: `{
			"NOME": "${$('#nome').val()}",
			"PRECO": "${$('#preco').val()}",
			"DESCRICAO": "${$('#desc').val()}"
		}`
	})
	.then(res => res.json())
	.then(jsondata => showData(jsondata))
}

function deletarProduto(id){
	fetch('http://localhost:3000/api/v1/delete', {
		method: "DELETE",
		headers: {"Content-Type": "application/json"},
		body: `{"IDPRODUTO": "${id}"}`
		})
	.then(res => res.json())
	.then(jsondata => showData(jsondata))
}

function editarProduto(id){
	fetch('http://localhost:3000/api/v1/update', {
		method: "PUT",
		headers: {"Content-Type": "application/json"},
		body: `{"IDPRODUTO": "${$('select').val()}",
			"NOME": "${$('#nome').val()}",
			"PRECO": "${$('#preco').val()}",
			"DESCRICAO": "${$('#desc').val()}"}`
	})
	.then(res => res.json())
	.then(jsondata => showData(jsondata))
}
