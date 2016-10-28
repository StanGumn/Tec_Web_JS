# Introducción a la web - HTML

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="https://github.com/StanGumn/Tec_Web_JS/blob/01-HTML/Multimedia/js.png?raw=true" width="300" height="300" alt="Logo de JS">
</p>

### Tema : `Introducción a la Web - HTML` 
### Fecha : `2016-10-18`
### Estudiante : `Stalin Segundo Guamán Quishpe`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `1`

<a name="cabecera"></a>
## Índice de contenidos

1. <a href="#tema">Tema</a>
2. <a href="#objetivos">Objetivos</a>
3. <a href="#marco-teorico">Marco Teorico</a>
  * <a href="#hist">Historia y Facts</a>
  * <a href="#defhtml">Definicion HTML</a>
  * <a href="#httm">HTTP Methods</a>
  * <a href="#www">WWC</a>
  * <a href="#xml">XML</a>
  * <a href="#doct">Doctype</a>
  * <a href="#npm">NPM</a>
4. <a href="#desarrollo">Desarrollo de la Práctica</a>
  * <a href="#w3cs">W3C School</a>
  * <a href="#html">HTML</a>
  * <a href="#css">Estilos CSS</a>
  * <a href="#ins">Herramienta Inspeccionar</a>
  * <a href="#pst">Postman</a>
5. <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>
## 1. Tema
El tema de la práctica es: `Introduccion a la Web y HTML`

<a name="objetivos"></a>
## 2. Objetivos

- Desarrollar el conocimiento Web
- Conocer herramientas de desarrolladores web como: postman, inspetor web
- Aprender el uso de lenguaje HTML CSS

<a href="#cabecera">A la cabecera</a>

<a name="marco-teorico"></a>
## 3. Marco Teorico
<a name="defhtml"></a>
### Definición HTML

En informática, la World Wide Web (WWW) o red informática mundial1 es un sistema de distribución de documentos de hipertexto o hipermedios interconectados y accesibles vía Internet. Con un navegador web, un usuario visualiza sitios web compuestos de páginas web que pueden contener texto, imágenes, vídeos u otros contenidos multimedia, y navega a través de esas páginas usando hiperenlaces. (Fuente: [Wikipedia](https://es.wikipedia.org/wiki/World_Wide_Web))
<br>
<a href="#cabecera">A la cabecera</a>

<br><br>
<p align="center">
<img src="https://github.com/StanGumn/Tec_Web_JS/blob/master/Multimedia/html.png?raw=true" width="300" height="300" alt="Logo HTML">
</p>
<br><br>
<a name="hist"></a>
### Historia y Facts

La Web se desarrolló entre marzo de 1989 y diciembre de 1990.2 3 por el inglés Tim Berners-Lee con la ayuda del belga Robert Cailliau mientras trabajaban en el CERN en Ginebra, Suiza, y publicado en 1992. Desde entonces, Berners-Lee ha jugado un papel activo guiando el desarrollo de estándares Web (como los lenguajes de marcado con los que se crean las páginas web), y en los últimos años ha abogado por su visión de una Web semántica. Utilizando los conceptos de sus anteriores sistemas de hipertexto como ENQUIRE, el físico británico Tim Berners-Lee, un científico de la computación y en ese tiempo de los empleados del CERN, ahora director del World Wide Web Consortium (W3C), escribió una propuesta en marzo de 1989 con lo que se convertiría en la World Wide Web.4 la propuesta de 1989 fue destinada a un sistema de comunicación CERN pero Berners-Lee finalmente se dio cuenta que el concepto podría aplicarse en todo el mundo.5 En la CERN, la organización europea de investigación cerca de Ginebra, en la frontera entre Francia y Suiza,6 Berners-Lee y el científico de la computación belga Robert Cailliau propusieron en 1990 utilizar el hipertexto "para vincular y acceder a información de diversos tipos como una red de nodos en los que el usuario puede navegar a voluntad",7 y Berners-Lee terminó el primer sitio web en diciembre de ese año.8 Berners-Lee publicó el proyecto en el grupo de noticias alt.hypertext el 7 de agosto de 1991. (Fuente: <a href="https://es.wikipedia.org/wiki/World_Wide_Web">Wikipedia</a>)
<br>
<a href="#cabecera">A la cabecera</a>

<a name="httm"></a>
### HTTP Methods
El navegador emplea normalmente los métodos HTTP más usados por los desarrolladores, GET y POST. Para los que no saben, el método GET lo usamos cuando escribimos en la barra de direcciones del navegador un enlace válido, al presionar enter, el navegador envía una petición al servidor por medio del método GET. Por otro lado, cuando nos damos de alta en un sitio web o hacemos un pago a través de Internet, el navegador usará el método POST.
Además de GET y POST, están también PUT, DELETE, HEAD y OPTIONS, los cuales plantearé uno a uno enseguida.
(Fuente: <a href="https://otroespacioblog.wordpress.com/2013/05/22/conoce-un-poco-sobre-los-metodos-http-en-rest/">Métodos HTTP</a>)

<br>
<p align="center">
<img src="https://github.com/StanGumn/Tec_Web_JS/blob/master/Multimedia/metodos%20http.jpg?raw=true" width="638" height="479" alt="Metodos HTTP y funcion de cada uno">
</p>
<a href="#cabecera">A la cabecera</a>

<a name="www"></a>
### WWW
En informática, la World Wide Web (WWW) o red informática mundial1 es un sistema de distribución de documentos de hipertexto o hipermedios interconectados y accesibles vía Internet. Con un navegador web, un usuario visualiza sitios web compuestos de páginas web que pueden contener texto, imágenes, vídeos u otros contenidos multimedia, y navega a través de esas páginas usando hiperenlaces.
(Fuente: <a href="https://es.wikipedia.org/wiki/World_Wide_Web">Wikipedia</a>)

<br>
<p align="center">
<img src="https://github.com/StanGumn/Tec_Web_JS/blob/master/Multimedia/www%20logo.png?raw=true" width="200" height="200" alt="Logo WWW">
</p>
<a href="#cabecera">A la cabecera</a>

<a name="xml"></a>
### XML
XML, siglas en inglés de eXtensible Markup Language ("lenguaje de marcas Extensible"), es un meta-lenguaje que permite definir lenguajes de marcas desarrollado por el World Wide Web Consortium (W3C) utilizado para almacenar datos en forma legible. Proviene del lenguaje SGML y permite definir la gramática de lenguajes específicos (de la misma manera que HTML es a su vez un lenguaje definido por SGML) para estructurar documentos grandes. A diferencia de otros lenguajes, XML da soporte a bases de datos, siendo útil cuando varias aplicaciones deben comunicarse entre sí o integrar información.
(Fuente: <a href="https://es.wikipedia.org/wiki/Extensible_Markup_Language">Wikipedia</a>)

<br>
<p align="center">
<img src="https://github.com/StanGumn/Tec_Web_JS/blob/master/Multimedia/xml%20logo.png?raw=true" width="200" height="200" alt="logo XML">
</p>
Un Ejemplo de código XML lo podemos observar en la siguiente imágen la cual se realizó en clase.
<br>
<p align="center">
<img src="https://github.com/StanGumn/Tec_Web_JS/blob/master/Multimedia/Informe%201/xml%20codigo.JPG?raw=true" width="580" height="310" alt="Codigo de ejemplo XML">
</p>
<a href="#cabecera">A la cabecera</a>

<a name="doct"></a>
### Doctype
El estándar XHTML deriva de XML, por lo que comparte con el muchas de sus normas y sintaxis. Uno de los conceptos fundamentales de XML es la utilización del DTD o Document Type Definition ("Definición del Tipo de Documento"). 
(Fuente: <a href="http://librosweb.es/libro/xhtml/capitulo_10/doctype.html">LibrosWeb</a>)

<a href="#cabecera">A la cabecera</a>

<a name="desarrollo"></a>

<a name="npm"></a>
### NPM (Node Package Manager)
Node.js® es una entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome. Node.js usa un modelo de operaciones E/S sin bloqueo y orientado a eventos, que lo hace liviano y eficiente. El ecosistema de paquetes de Node.js, npm, es el ecosistema mas grande de librerías de código abierto en el mundo. (Fuente: <a href="https://nodejs.org/es/">Node JS</a>)
<br>
<p align="center">
<img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png"  alt="Logo de Node">
</p>
<a href="#cabecera">A la cabecera</a>

## 4. Desarrollo del informe

<a name="w3cs"></a>
### W3C Schools
W3C Schools es un sitio web el cual ofrece al usuario documentos on-line con tutoriales del lenguaje html y su uso adecuado. En la siguiente imágen podemos observar dicho sitio web en donde podremos realizar consultas en caso de requerirlas.

<br>
<p align="center">
<img src="https://github.com/StanGumn/Tec_Web_JS/blob/master/Multimedia/Informe%201/w3c%20school.JPG?raw=true" width="830" height="444" alt="Pagna web de W3C schools">
</p>

<a href="#cabecera">A la cabecera</a>

<a name="html"></a>
### HTML

El código realizado en clase es el siguiente:

* Bloque de HTML
```
<!DOCTYPE html>
<!--ESTILO CCS EMBEBIDO EN EL HTML -->
<html lang="en" style="background-color: blue;">
    <head>
        <title>Clase 3 ejemplo de HTML</title>
    </head>
    <body style="background-color: green;">
        
        <!-- listas-->
        <h1>Tokyo Ghoul</h1>
        
        <br>
        <br>
        <a href="https://es.wikipedia.org/wiki/Tokyo_Ghoul" target="_blank"><img src="http://static.tvtropes.org/pmwiki/pub/images/tokyo_ghoul_5787.jpg" alt="Foto de portada de Tokyo Ghoul"></a>
        
        <p>Tokyo Ghoul es una serie de manga escrita e ilustrada por Sui Ishida, serializada en Seinen, revista de "Shueisha Young Jump", con entrega semanal desde septiembre del 2011. Compilado en 14 volúmenes (tankōbon) a partir de junio del 2014. Una adaptación al anime del Studio Pierrot comenzó a emitirse en Tokyo MX, el 5 de julio de 2014. Funimation ha licenciado la serie de anime para el streaming de vídeo y el hogar con distribución en América.</p>
        
        <h2>Listas no ordenadas</h2>
        <!-- listas no ordenadas -->
        <ul>
            <li>kaneki</li>
            <li>touka</li>
            <li>viejo</li>
        </ul>
        
        <h2>Listas ordenadas</h2>
        <!-- listas ordenadas -->
        <ol>
            <li>kaneki</li>
            <li>touka</li>
            <li>viejo</li>
        </ol>
        <h3>Cabecera 3</h3>
        <h4>Cabecera 4</h4>
        <h5>Cabecera 5</h5>


    </body>
</html>

```

El cual podemos observar en la siguiente imágen el resultado del anterior código.
<br>
<p align="center">
<img src="https://github.com/StanGumn/Tec_Web_JS/blob/master/Multimedia/Informe%201/pagina%20html.JPG?raw=true" width="1304" height="360" alt="Resultado del HTML">
</p>

<a href="#cabecera">A la cabecera</a>

<a name="css"></a>
### Estilos CSS
en este apartado realizamos estilos CSS de manera embebida en el código html como se observa en las siguientes imágenes.
<br>
<p align="center">
<img src="https://github.com/StanGumn/Tec_Web_JS/blob/master/Multimedia/Informe%201/css%20embebido.JPG?raw=true" width="346" height="25" alt="Estilo CSS Embebido">
</p>

<br>
<p align="center">
<img src="https://github.com/StanGumn/Tec_Web_JS/blob/master/Multimedia/Informe%201/css%20embebido%202.JPG?raw=true" width="290" height="25" alt="Estilo CSS Embebido">
</p>
<a href="#cabecera">A la cabecera</a>

<a name="ins"></a>
### Herramienta Inspeccionar
Con la herramienta de inspeciona del navegador, podemos observar el comportamiendo de la página web analizada. Se observa el el funcionamiento de los métodos HTTP en tiempo real, entre otras funciones como las que se visualiza en la siguiente imágen donde se llega a modificar el código HTML en ese instante, sin alterar el archivo original.
<br>
<p align="center">
<img src="https://github.com/StanGumn/Tec_Web_JS/blob/master/Multimedia/Informe%201/inspeccionar%201.JPG?raw=true" width="1369" height="660">
</p>
<a href="#cabecera">A la cabecera</a>

<a name="pst"></a>
### Postman 
Postman es un plugin de Google Chrome el cual nos permite interactuar con los métodos http, para lo cual se pone a continuacion un ejemplo en donde se experimenta con el método GET del servicio de Pokemon. Para este experimento se obtiene (get) toda la información del Pokemon con ID número 150, siendo el resultado el Pokemon llamado Mewtwo como se observa en la figura a continuación. 
<br>
<p align="center">
<img src="https://github.com/StanGumn/Tec_Web_JS/blob/master/Multimedia/Informe%201/postman%20con%20get.JPG?raw=true" width="1046" height="634">
</p>
<a href="#cabecera">A la cabecera</a>

## 5. Conclusiones y Recomendaciones

- HTML brinda el esqueleto de una página web mientras que CSS brinda la fachada de la misma.
- Se puede experimentar cuantas veces sea necesario con la herramienta Postman, sin embargo se debe tener en cuenta que si no se tiene las credenciales necesarias, no se puede experimentar con los métodos PUT o DELETE, puesto que no se tiene control de la información del servicio que se este utilizando.


<br>
<a href="#cabecera">A la cabecera</a>


# ¡Gracias por su atención!

Author: [Stalin Guamán](https://github.com/StanGumn)

