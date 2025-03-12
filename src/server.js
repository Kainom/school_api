import app from './app';

const port = process.env.APP_PORT;
app.listen(port,(e)=>{
    console.log(`Server is running on port ${port}`);
})

