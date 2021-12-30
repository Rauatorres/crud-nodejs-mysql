fetch('http://localhost:3000/api/v1/getdata')
.then(res => res.json())
.then(data =>{
	for (let index in data){
		$('table').html($('table').html() + '<tr>' +
		'<td>' + data[index].IDPRODUTO + '</td>' +
		'<td>' + data[index].NOME + '</td>' +
		'<td>' + data[index].PRECO + '</td>' +
		'<td>' + data[index].DESCRICAO + '</td>' +
		'<td><input type="button" value="Editar" onclick=""/><input type="button" value="Excluir" onclick=""/></td>' +
		'</tr>')
	}
})

