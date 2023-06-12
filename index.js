document.write("<h1>¡Bienvenido a mi Generador de excusas!<h1/>");

alert("Bienvenido al gerenador de excusas para saber que paso en la casa")

window.onload = () => {
    document.querySelector('#boton').addEventListener('click', () => {
      document.querySelector('#excusa').innerHTML = generateExcusa ();  
    });

    console.log('Hello Geeks');
};

let generateExcusa = () => {

    let quien = ['el gato ','mi abuelo ','su tortuga ','mi pajaro '];
    let que = ['comer','molesto','aplastado','brocado'];
    let cuando = [' antes de la clase',' justo a tiempo',' cuando terminé',' durante mi almuerzo',' mientras estaba orando'];

    let quienRa = Math.floor(Math.random() * quien.length);
    let queRa = Math.floor(Math.random() * que.length);
    let cuandoRa = Math.floor(Math.random() * cuando.length);

    return quien[quienRa] + '' + que[queRa] + '' + cuando[cuandoRa];

};