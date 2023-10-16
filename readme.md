
Any : es cualquier tipo de dato --> es util si esperamos valores de una biblioteca de terceros --- la comoidad de any consta de perder seguridad --- any puede producir errores inesperados
====




Unknow  : para solucionar los errores inesperados de Any 
TypeScript presenta el tipo unknow. El tipo Unknow es lo mismo acepta cualquier tipo de dato
En este caso cambiamos el tipo Any a tipo Unknow
=====




let randomValue:unknown=10;
randomValue=true;
randomValue='Mateo';
randomValue={name:"nada"}
randomValue.name; ******  nos da error y no podremos acceder en cambio con any si podremos 
console.log(randomValue);

Cuando es de tipo unknow no puedes acceder a funciones, metodos y arreglos  como  ()  ,  .name  , [2]   ,   getName()


NO SE PUEDE INTERACTUAR CON UNA VARIABLE DE TIPO UNKNOW PERO SI CON UNA DE TIPO ANY # Practica-TypeScript
