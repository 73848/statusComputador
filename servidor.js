    const http = require('http');
    const porta = 8080;
    const host = 'http://localhost:'+porta;
    const status = require('./usoPcRam.js');

    const server = http.createServer((req,res)=>{

        let url = req.url;

        if(url==='/dados'){
            res.end((status.dados.ARC))
        }
        else{
            res.end('<h1>Deu ruim papai</h1>')
        }

    }).listen(porta,() => console.log(`Funcionando PAPAI ${host}; ${status}`))

