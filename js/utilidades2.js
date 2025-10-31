function crearTexto(texto) {
    const p =  document.createElement('p')
    p.innerHTML = texto;
    return p;
}

const h1 = document.createElement('h1');
h1.textContent = 'Guia Definitiva: HTML';
document.body.appendChild(h1);

document.body.appendChild(
    crearTexto('Seleccione un ejercisio para practicar las etiquetas solicitadas en clase.')
)

const h2 = document.createElement('h2');
h2.textContent = 'Ejercisios';
document.body.appendChild(h2);

const lista = document.createElement('ul');
document.body.appendChild(lista);

const item = document.createElement('li');
const enlace = document.createElement('a');
enlace.href = 'html/ejercicio1.html';
enlace.textContent = 'Ejercicio #1';
enlace.target = '_blank';
item.appendChild(enlace);
lista.appendChild(item);

document.body.appendChild(
    crearTexto('H1–H6, varios &lt;p&gt;, &lt;<strong>strong</strong>&gt;, &lt;<dfn>em</dfn>&gt;. Tema: HTML como lenguaje de marcado (no programación).')
);

const lista2 = document.createElement('ul');
document.body.appendChild(lista2);

const item2 = document.createElement('li');
const enlace2 = document.createElement('a');
enlace2.href = 'html/ejercicio3.html';
enlace2.textContent = 'Ejercicio #3';
enlace2.target = '_blank';
document.body.appendChild(enlace2);
item2.appendChild(enlace2);
lista2.appendChild(item2);

const lista3 = document.createElement('ul');
document.body.appendChild(lista3);

const item3 = document.createElement('li');
const enlace3 = document.createElement('a');
enlace3.href = 'html/ejercicio4.html';
enlace3.textContent = 'Ejercicio #4';
enlace3.target = '_blank';
document.body.appendChild(enlace3);
item3.appendChild(enlace3);
lista3.appendChild(item3);


