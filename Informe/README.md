# Introducción a la web - HTML

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="https://github.com/StanGumn/Tec_Web_JS/blob/01-HTML/Multimedia/js.png" width="300" height="200">
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
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/WWW_logo_by_Robert_Cailliau.svg/240px-WWW_logo_by_Robert_Cailliau.svg.png" width="300" height="200">
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

<a href="#cabecera">A la cabecera</a>

#### GET
Se usa para obtener información del servidor, puede ser algún archivo HTML, una imagen, un archivo de texto, un XML, etc. Este método solo debe usarse para obtener información del servidor de acuerdo a los estándares de HTTP. El método GET no debe cambiar el estado del servidor, es decir, no debe hacer ninguna modificación a cualquier archivo que en éste se encuentre. En términos de CRUD, GET sería el Read (Leer).
(Fuente: <a href="https://otroespacioblog.wordpress.com/2013/05/22/conoce-un-poco-sobre-los-metodos-http-en-rest/">Métodos HTTP</a>)

<a href="#cabecera">A la cabecera</a>

#### POST
Se podría decir que es el método HTTP más empleado, eso en parte a que permite hacer variedad de operaciones del CRUD, aunque por estándar, es el encargado de crear un nuevo recurso y, por consiguiente, modificar el estado del servidor. En términos de CRUD, el método POST se confunde en ocasiones con el método PUT, aunque la diferencia radica en una cualidad que se llama idempotencia.
¿En qué consiste la idempotencia? Sencillo, se trata de la capacidad que tenga un ente (este caso el método) de realizar una misma operación varias veces, y obtener el mismo resultado que si solo se hiciese una vez.
Teniendo en cuenta que es la idempotencia, se dice que el método POST no es idempotente, en cambio sí lo es el método PUT. Dice el artículo original, que POST cada vez que hace una operación cambia el estado del servidor, por ejemplo, si en un formulario de comentarios de un blog, presionamos dos veces el botón “Comentar”, habrás creado dos veces el mismo comentario en el servidor y para cada nuevo petición POST, se creará un nuevo comentario en el servidor. Por esto es que se liga al método POST con la acción del CRUD, CREATE (Crear, Registrar).
(Fuente: <a href="https://otroespacioblog.wordpress.com/2013/05/22/conoce-un-poco-sobre-los-metodos-http-en-rest/">Métodos HTTP</a>)

<a href="#cabecera">A la cabecera</a>

#### PUT
No es tan usado como lo son GET y POST. Su uso podría darse en el caso de que, por ejemplo, quisieras hacer una operación que haga una acción sobre el estado del servidor, pero que la siguiente vez que suceda, no cambie ese estado. El ejemplo que da el autor del artículo que traduzco se basa en la operación de actualización.
Queremos actualizar un archivo que ha sido subido al servidor, dicha subida ocasionó un cambio en el estado del servidor. Cuando vuelvas a subir el mismo archivo al servidor, el archivo viejo será reemplazado por el que acabas de cargar.
Teniendo esto en cuenta, podemos relacionar el método PUT con la acción del CRUD, UPDATE (actualizar).
(Fuente: <a href="https://otroespacioblog.wordpress.com/2013/05/22/conoce-un-poco-sobre-los-metodos-http-en-rest/">Métodos HTTP</a>)

<a href="#cabecera">A la cabecera</a>

#### DELETE
No tiene mucho que explicar. Teniendo en cuenta los estándares de HTTP, el método DELETE es el único que debe ser usado para borrar un recurso del servidor, sin embargo, algunos desarrolladores emplean los métodos GET o POST para esa labor. En cuanto a CRUD, DELETE sería la acción, que lleva su mismo nombre, DELETE (borrar).
(Fuente: <a href="https://otroespacioblog.wordpress.com/2013/05/22/conoce-un-poco-sobre-los-metodos-http-en-rest/">Métodos HTTP</a>)

<a href="#cabecera">A la cabecera</a>


<a name="www"></a>
### WWW
En informática, la World Wide Web (WWW) o red informática mundial1 es un sistema de distribución de documentos de hipertexto o hipermedios interconectados y accesibles vía Internet. Con un navegador web, un usuario visualiza sitios web compuestos de páginas web que pueden contener texto, imágenes, vídeos u otros contenidos multimedia, y navega a través de esas páginas usando hiperenlaces.
(Fuente: <a href="https://es.wikipedia.org/wiki/World_Wide_Web">Wikipedia</a>)

<a href="#cabecera">A la cabecera</a>

<a name="xml"></a>
### XML
XML, siglas en inglés de eXtensible Markup Language ("lenguaje de marcas Extensible"), es un meta-lenguaje que permite definir lenguajes de marcas desarrollado por el World Wide Web Consortium (W3C) utilizado para almacenar datos en forma legible. Proviene del lenguaje SGML y permite definir la gramática de lenguajes específicos (de la misma manera que HTML es a su vez un lenguaje definido por SGML) para estructurar documentos grandes. A diferencia de otros lenguajes, XML da soporte a bases de datos, siendo útil cuando varias aplicaciones deben comunicarse entre sí o integrar información.
(Fuente: <a href="https://es.wikipedia.org/wiki/Extensible_Markup_Language">Wikipedia</a>)

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

