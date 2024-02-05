import express from 'express';
const app= express();
app.use(express.json());
app.use(express.static('vue-app/dist'));
const port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log("ssss");
     console.log('listening on port '+port);
});
