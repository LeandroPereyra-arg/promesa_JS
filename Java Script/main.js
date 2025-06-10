import { usuarios } from "./arrays.js";

function buscar(){
    return new Promise((resolve,reject)=>{
        if (usuarios==0){
            reject(new Error('❌❗Api no encontrada'));
        }
    

    setTimeout(()=>{
        resolve(usuarios)
    }, 3000);
})
}
console.log('🔎 Buscando...')
buscar()
.then((response)=>{
    console.clear()
    console.log("✅ Arrays encontrado: ",response);
})

.catch((Error)=>{
    console.log("Error", Error)
})