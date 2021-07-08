const fs = require('fs');

const tabla = async(base,listar=false) =>
{
        try{
            let salida='';
            //console.clear();
            for (let contador=1;contador<=10;contador++)
            {
                salida += `${base} x ${contador} = ${ base * contador }\n`;
            }
            fs.writeFileSync(`./salida/tabla-${base}.txt`,salida)
            if(listar)
                console.log(salida);
            return `tabla-${base}.txt`;
        }catch(error){
            throw error;
        }
            
    
            
            
        
    
    

}

module.exports={

    tabla
}
