import app from './app';
import 'babel/polyfill';

async function main(){
    app.listen(4000);
    console.log('Server on port 4000')
};

main();