const express = require("express")
const mysql = require("mysql")
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

app.get('/api/v1/getdata', (req,res)=>{
	con.query('SELECT * FROM PRODUTO', (err, result)=>{
		res.send(result)
	})
})

app.listen(3000, ()=>{
	console.log('Server started successfully: listening on http://localhost:3000/')
})

