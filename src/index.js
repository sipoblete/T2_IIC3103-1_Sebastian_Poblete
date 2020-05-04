import app from './app';
import '@babel/polyfill';

async function main(){
    const PORT = process.env.PORT || 3000;
    await app.listen(PORT);
    console.log('Server on port 4000')
};

main();