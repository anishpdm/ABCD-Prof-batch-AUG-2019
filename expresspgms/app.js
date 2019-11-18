const Express=require('express')
var bodyParser=require('body-parser')

var app = Express()

var studentrouter = require('./routes/student')
var arithmeticrouter=require('./routes/arithmetic')
var employeerouter=require('./routes/employee')

app.set('view engine','ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/student',studentrouter)
app.use('/arithmetic',arithmeticrouter)
app.use('/employee',employeerouter)


app.get('/myweb',(req,res)=>{


    res.render('index')
})




app.post('/',(req,res)=>{
var mydata=[{"name":"Anish","rollno":12},
{"name":"Rahul","rollno":1},
{"name":"Tom","rollno":56}
]
    res.json(mydata)
})







app.listen(3000,()=>{
    console.log('Server Started')
})
