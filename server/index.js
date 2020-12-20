
const express = require('express')
const app = express();

const todos = require("./routes/todos")
const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/todos", todos);

app.listen(5000, ()=> {
    `app listening on port 5000`
})
