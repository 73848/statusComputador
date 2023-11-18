const { exitCode } = require('process');

setInterval(()=> {
    const os = require('os')
    const { arch, freemem, totalmem, platform} = os; //destrusturing
    totalRam = (totalmem()/1024)/1024;
    freeRam = (freemem()/1024)/1024;

    const dados = {
           OS: platform(),
           ARC:arch(),
           totalRam: `${totalRam.toFixed(2)} MB`,
           freeRam: `${freeRam.toFixed(2)} MB`,
           usage: (`${((totalRam-freeRam)/100).toFixed(2)} %`)
    }

   
    exports.dados = dados;

    console.table(dados)
},1000)