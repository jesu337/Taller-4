function crearTexto(texto) {
    const p =  document.createElement('p')
    p.innerHTML = texto;
    return p;
}

const h1 = document.createElement('h1');
h1.textContent = "HTML: Lenguaje de Contenido"
document.body.appendChild(h1);

document.body.appendChild(
    crearTexto('<p>El <strong>HTML</strong> (HyperText Markup Language) es el lenguaje estándar para la creación de páginas web. Su función principal es <dfn>estructurar y dar formato al contenido</dfn>, permitiendo que los navegadores lo interpreten correctamente.</p>')
)

const h2 = document.createElement('h2');
h2.textContent = 'No es un lenguaje de programación';
document.body.appendChild(h2);

document.body.appendChild(
    crearTexto('A menudo, los estudiantes confunden HTML con un lenguaje de programación. Sin embargo, HTML <strong>no permite ejecutar lógica</strong>, ni crear algoritmos, ni hacer operaciones matemáticas. Su objetivo es <dfn>describir el contenido</dfn> y cómo este se organiza en una página web.')
)

const h3 = document.createElement('h3');
h3.textContent = 'El concepto de marcado';
document.body.appendChild(h3);

document.body.appendChild(
    crearTexto('HTML funciona mediante <strong>etiquetas</strong> o tags que rodean el contenido y le otorgan significado. Por ejemplo, la etiqueta <code>&lt;p&gt;</code> indica que el texto es un párrafo, mientras que <code>&lt;h1&gt;</code> indica un encabezado principal.')
)

const h4 = document.createElement('h4');
h4.textContent = 'Estructura básica';
document.body.appendChild(h4);

document.body.appendChild(
    crearTexto('Una página HTML comienza con la declaración <code>&lt;!DOCTYPE html&gt;</code>, seguida por las secciones &lt;<strong>head</strong>&gt; y &lt;<strong>body</strong>&gt;. En el <dfn>head</dfn> se definen los metadatos, mientras que en el <dfn>body</dfn> se coloca el contenido visible.')
);

const h5 = document.createElement('h5');   
h5.textContent = 'El rol de HTML en la web';
document.body.appendChild(h5);

document.body.appendChild(
    crearTexto('En el ecosistema web, HTML es el esqueleto. Luego se complementa con <strong>CSS</strong> para estilos y <strong>JavaScript</strong>  para la lógica y la interactividad.')
)

const h6 = document.createElement('h6');
h6.textContent = 'Conclusión';
document.body.appendChild(h6);

document.body.appendChild(
    crearTexto('Aprender HTML es fundamental para cualquier estudiante de desarrollo web. Recordemos: <strong>HTML no es programación</strong>, sino un <dfn>lenguaje de marcado</dfn> que define la estructura del contenido en la web.')
);

const enlace = document.createElement('a');
enlace.href = '../index.html';
enlace.textContent = 'Volver a la pagina principal';
enlace.target = '_blank';
document.body.appendChild(enlace);

