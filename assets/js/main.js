//2. Crear una función asíncrona para obtener los datos de la URL.
const getAlbum = async () => {
    const url = 'https://jsonplaceholder.typicode.com/photos';

//3. Dentro de un bloque Try/Catch, utilizar el método fetch mediante la instrucción await
//para recibir el valor directamente de la promesa.
    try {
        const respuesta = await fetch(url); 
        const datos = await respuesta.json();
        return datos; 
    } catch (error) {
        console.log(error);
    }
}

//4. Utilizar un método de iteración de arreglos (por ejemplo: forEach) para mostrar
//solamente los primeros 20 títulos de los datos recibidos.
const primerosAlbum = async (datos) => {
    albumLista = await datos;
    for(let i= 0; i < 20; i++){
        console.log(`Album: ${albumLista[i].id} | título: ${albumLista[i].title}`);
    }
};

//5. Crear una función que retorne una promesa después de tres (3) segundos utilizando
//setTimeout. El mensaje a retornar debe ser un string que indique: “Información Enviada”.
const enviarMensaje = new Promise((resolve) => {
    setTimeout(() => { resolve("Informacion Enviada") }, 3000); ;
});

//6. Crear una función asíncrona que permita recibir el mensaje de la promesa creada en el requerimiento cinco

const getInformacion = ( async () => {
    console.log(await enviarMensaje);
    primerosAlbum(await getAlbum());
})();
