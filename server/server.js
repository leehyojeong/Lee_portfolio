const express = require('express');
const app = express();
const route = require('./routes/index');
const cors = require('cors');
const port = process.env.PORT || 3001;

app.use(cors());
app.use('/api', route);

app.listen(port, ()=>{
    console.log(`${port}번째 포트에서 대기중`);
});