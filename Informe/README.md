# Sailsjs - Assets / Views / Pipeline / Controllers

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="http://www.javatpoint.com/images/javascript/javascript_logo.png" width="200" height="150">
</p>

### Tema : `Sailsjs - Assets / Views / Pipeline / Controllers` 
### Fecha : `2016-11-1`
### Estudiante : `Stalin Segundo Guamán Quishpe`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `8`

<a name="cabecera"></a>
## Índice de contenidos


- <a href="#tema">Tema</a>
- <a href="#objetivos">Objetivos</a>
- <a href="#marco-teorico">Marco Teorico</a>
  * <a href="#sails">Definición de Sailsjs-Assets</a>
  * <a href="#views">Definición de Views</a>
  * <a href="#pipeline">Definición de Pipeline</a>
  * <a href="#controllers">Definición de Controllers</a>
- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 
  
- <a href="#desarrollo">Desarrollo de la Práctica</a>
- <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>
## Tema
El tema de la práctica es: `Sailsjs - Assets / Views / Pipeline / Controllers`

<a name="objetivos"></a>
## Objetivos

- Desarrollar el conocimiento Web
- Entender la funcionalidad y las ventajas de usar un controlador 
- Entender para que sirven las carpetas que sails crea al crear un proyecto su utilidad y funcionamiento

<a name="marco-teorico"></a>
## Marco Teorico
<a name="marco-teorico"></a>
### Sails
<p align="center">
<img src="https://platzi.com/blog/content/images/2015/05/687474703a2f2f62616c64657264617368792e6769746875622e696f2f7361696c732f696d616765732f6c6f676f2e706e67.png" width="300" height="200">
</p>
<br>
SailsJS, entre otras cosas, nos facilita en gran medida el desarrollo de APIs REST, servidores de archivos, seguridad y websockets. Está creado con la filosofía “Convención sobre Configuración” o CoC, por sus siglas en inglés; esto significa que nos permite enfocarnos en el desarrollo de la idea, ahorrándonos mucho tiempo en configuración inicial y es un complemento ideal para frameworks como AngularJS, BackboneJS o ReactJS.

Esto se logra gracias a que SailsJS sigue un conjunto cuidadosamente selecto de convenciones modernas, automatizando una gran parte del proceso de desarrollo.

Un aspecto interesante es lo relativamente cómodo que resulta para casi cualquier programador el adoptar esta tecnología. 
(Fuente: [Platzi](//https://platzi.com/blog/introduccion-sailsjs/))

<a href="#cabecera">A la cabecera</a>

<a name="views"></a>
### Views

<p align="center">
<img src="http://sailsjs.org/images/image_squidhome.png" width="300" height="200">
</p>
<br>
En Sails, las vistas son plantillas de marcado que se compilan en el servidor en páginas HTML. En la mayoría de los casos, las vistas se utilizan como respuesta a una solicitud HTTP entrante. 

(Fuente: <a href="http://sailsjs.com/documentation/concepts/views">SailsJs.com</a>)
<a href="#cabecera">A la cabecera</a>

<br>
<a name="pipeline"></a>
### Pipeline
<p align="center">
<img src="https://i.ytimg.com/vi/mVOsWkHhcIM/hqdefault.jpg" width="300" height="200">
</p>

El archivo pipeline.js en la aplicación Sails determina el orden en el que las hojas de estilo, JavaScript y los archivos de plantilla del lado del cliente deben ser compilados y enlazados como etiquetas script o link 
(Fuente: <a href="http://sailsjs.com/documentation/anatomy/tasks/pipeline.js">SailsJs.com</a>)

<br>
<a name="controllers"></a>
### Controllers
Los controladores (en MVC) son los responsables de responder a las solicitudes de un navegador web, una aplicación móvil o cualquier otro sistema capaz de comunicarse con un servidor. A menudo actúan como intermediarios entre sus modelos y vistas. Para muchas aplicaciones, los controladores contendrán la mayor parte de la lógica de negocio de su proyecto 
(Fuente: <a href="http://sailsjs.com/documentation/concepts/controllers">SailsJs.com</a>)

<br>
<a href="#cabecera">A la cabecera</a>
<br>
<a name="desarrollo"></a>
## Desarrollo del informe

### Instalar Sails

Para instalar Sails en nuestro computador lo unico que debemos hacer es ingresar en una consola el siguiente comando:

```
npm install -g sails

```
### Instalar Sails

Para instalar Sails en nuestro computador lo unico que debemos hacer es ingresar en una consola el siguiente comando:

```
npm install -g sails
```
### Crear un Proyecto

Para crear un proyecto abrimos una terminal desde la carpeta en la cual queremos crear el proyecto y en esta ejecutamos el siguiente comando 

```
sails new NombreDel proyecto 
```

### Crear un Api

Una Api es la fusión de un controlador el cual se crea ejecutando: 

```
sails generate controller NombreControlador 
```
<br>
y un Modelo el cual se crea ejecutando:
```
sails generate model NombreModelo  
```

y finalmente si lo que queremos es crear una api utilizamos el código:
```
sails generate api NombreAP 
```

### Codigo Modelo
Ahora inicializamos el servidor para ello en la terminal ejecutamos el comando:
```
sails lift  
```
<br>
<a href="#cabecera">A la cabecera</a>
<a name="conrec"></a>
## Conclusiones y Recomendaciones
- Sails nos permite gestionar nuestras aplicaciones web de una manera muy sencillo
- Usar vistas para evitar que se recargue toda la página.
- Conocer la teoria de modelo vista controlador para entender el funcionamiento de Sails

<br>
<a href="#cabecera">A la cabecera</a>

Author: [Stalin Guamán](https://github.com/StanGumn)
