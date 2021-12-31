const express = require("express")
const mysql = require("mysql")
const bodyparser = require("body-parser")
const app = express()

con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "CRUDNODEJS"
})

con.connect((err)=>{
	if (err){
		throw err
	}else{
		console.log("successfully connected to database CRUDNODEJS")
	}
})

app.use(express.static('public'))
app.use(bodyparser.json())

function queryAll(res){
	con.query('SELECT * FROM PRODUTO', (err, result)=>{
		if (err){
			throw err
		}else{
			res.send(result)
		}
	})                        
}


app.get('/api/v1/getdata', (req,res)=>{
	queryAll(res)
})

app.post('/api/v1/register', (req,res)=>{
	console.log('post request recieved')
	console.log(req.body)
	con.query('INSERT INTO PRODUTO VALUES (DEFAULT, ?, ?, ?)', [req.body.NOME, req.body.PRECO, req.body.DESCRICAO], (err)=>{
		if (err){
			throw err
		}else{
			queryAll(res)
		}
	})
	
})

app.listen(3000, ()=>{
	console.log('Server started successfully: listening on http://localhost:3000/')
})

