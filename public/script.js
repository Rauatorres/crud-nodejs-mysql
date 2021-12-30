fetch('http://localhost:3000/api/v1/getdata')
.then(res => res.json())
.then(data =>{
	for (let index in data){
		$('h1').html(data[0].IDPRODUTO)
		$('table').html($('table').html() + '<tr>' +
		'<td>' + data[index].IDPRODUTO + '</td>' +
		'<td>' + data[index].NOME + '</td>' +
		'<td>' + data[index].PRECO + '</td>' +
		'<td>' + data[index].DESCRICAO + '</td>' +
		'</tr>')
	}
})

