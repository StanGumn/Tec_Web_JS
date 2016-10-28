# Introducción a la web - HTML

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="https://github.com/StanGumn/Tec_Web_JS/blob/01-HTML/Multimedia/js.png?raw=true" width="300" height="300">
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
4. <a href="#desarrollo">Desarrollo de la Práctica</a>
  * <a href="#chttp">Códigos HTTP</a>
  * <a href="#w3cs">W3C School</a>
  * <a href="#doct">Doctype</a>
  * <a href="#html">HTML</a>
  * <a href="#css">Estilos CSS</a>
  * <a href="#ins">Herramienta Inspeccionar</a>
  * <a href="#pst">Postman</a>
  * <a href="#npm">NPM</a>
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
<img src="https://github.com/StanGumn/Tec_Web_JS/blob/master/Multimedia/html.png?raw=true" width="300" height="300">
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
<img src="https://github.com/StanGumn/Tec_Web_JS/blob/master/Multimedia/metodos%20http.jpg?raw=true" width="638" height="479">
</p>

<a href="#cabecera">A la cabecera</a>

<a name="www"></a>
### WWW
En informática, la World Wide Web (WWW) o red informática mundial1 es un sistema de distribución de documentos de hipertexto o hipermedios interconectados y accesibles vía Internet. Con un navegador web, un usuario visualiza sitios web compuestos de páginas web que pueden contener texto, imágenes, vídeos u otros contenidos multimedia, y navega a través de esas páginas usando hiperenlaces.
(Fuente: <a href="https://es.wikipedia.org/wiki/World_Wide_Web">Wikipedia</a>)

<br>
<p align="center">
<img src="https://github.com/StanGumn/Tec_Web_JS/blob/master/Multimedia/www%20logo.png?raw=true" width="200" height="200">
</p>

<a href="#cabecera">A la cabecera</a>

<a name="xml"></a>
### XML
XML, siglas en inglés de eXtensible Markup Language ("lenguaje de marcas Extensible"), es un meta-lenguaje que permite definir lenguajes de marcas desarrollado por el World Wide Web Consortium (W3C) utilizado para almacenar datos en forma legible. Proviene del lenguaje SGML y permite definir la gramática de lenguajes específicos (de la misma manera que HTML es a su vez un lenguaje definido por SGML) para estructurar documentos grandes. A diferencia de otros lenguajes, XML da soporte a bases de datos, siendo útil cuando varias aplicaciones deben comunicarse entre sí o integrar información.
(Fuente: <a href="https://es.wikipedia.org/wiki/Extensible_Markup_Language">Wikipedia</a>)

<br>
<p align="center">
<img src="https://github.com/StanGumn/Tec_Web_JS/blob/master/Multimedia/xml%20logo.png?raw=true" width="200" height="200">
</p>

<a href="#cabecera">A la cabecera</a>

<a name="desarrollo"></a>
## 4. Desarrollo del informe

<a href="#cabecera">A la cabecera</a>

<a name="chttp"></a>
### Códigos HTTP 

<a href="#cabecera">A la cabecera</a>

<a name="w3cs"></a>
### W3C Schools

<a href="#cabecera">A la cabecera</a>

<a name="doct"></a>
### Doctype

<a href="#cabecera">A la cabecera</a>

<a name="html"></a>
### HTML

<a href="#cabecera">A la cabecera</a>

<a name="css"></a>
### Estilos CSS

<a href="#cabecera">A la cabecera</a>

<a name="ins"></a>
### Herramienta Inspeccionar

<a href="#cabecera">A la cabecera</a>

<a name="pst"></a>
### Postman 


<a href="#cabecera">A la cabecera</a>

<a name="npm"></a>
### NPM (Node Package Manager)

<a href="#cabecera">A la cabecera</a>

## 5. Conclusiones y Recomendaciones

- Se recomienda mejorar la presentacion
- Se recomienda usar el ir a cabecera despues de terminar una seccion
- Se aprendio el uso de HTML con Markdown
- Conocimos herramientas de desarrollo web como postman e inspector web
- Desarrollamos conocimientos de introducción Web

<br>
<a href="#cabecera">A la cabecera</a>


# ¡Gracias por su atención!

Author: [Stalin Guamán](https://github.com/StanGumn)

