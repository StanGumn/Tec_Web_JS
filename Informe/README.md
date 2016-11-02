# Estilos CSS

### Materia : `Tecnologías Web con JavaScript`

<p align="center">
<img src="https://github.com/StanGumn/Tec_Web_JS/blob/01-HTML/Multimedia/js.png?raw=true" width="300" height="300" alt="Logo de JS">
</p>

### Tema : `Introducción a la Web - HTML` 
### Fecha : `2016-11-01`
### Estudiante : `Stalin Segundo Guamán Quishpe`
### Profesor : `Tania Calle - Adrian Eguez`
### Número de informe : `2`

<a name="cabecera"></a>
## Índice de contenidos

1. <a href="#tema">Tema</a>
2. <a href="#objetivos">Objetivos</a>
3. <a href="#marco-teorico">Marco Teorico</a>
  * <a href="#defcss">Definicion CSS</a>
  * <a href="#sincss">Sintáxis CSS</a>
4. <a href="#desarrollo">Desarrollo de la Práctica</a>
  * <a href="#htmltags">Código HTML con Tags</a>
5. <a href="#conrec">Conclusiones y Recomendaciones</a> 

<a name="tema"></a>
## 1. Tema
El tema de la práctica es: `Introduccion a la Web y HTML`

<a name="objetivos"></a>
## 2. Objetivos

- Conocer la Sintáxis de los Estilos en cascada
- Relacionar CSS con HTML
- Aplicar las técnicas de CSS

<a href="#cabecera">A la cabecera</a>

<a name="marco-teorico"></a>
## 3. Marco Teorico
<a name="defcss"></a>
### Definición CSS

Hojas de estilo en cascada (o CSS, siglas en inglés de Cascading Stylesheets) es un lenguaje de hojas de estilo para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado2 . Es muy usado para establecer el diseño visual de las páginas web, e interfaces de usuario escritas en HTML o XHTML; el lenguaje puede ser aplicado a cualquier documento XML, incluyendo XHTML, SVG, XUL, RSS, etcetera. También permite aplicar estilos no visuales, como las hojas de estilo auditivas. (Fuente: [Wikipedia](https://es.wikipedia.org/wiki/Hoja_de_estilos_en_cascada))
<br>
<a href="#cabecera">A la cabecera</a>

<br><br>
<p align="center">
<img src="http://wpguru.co.uk/wp-content/uploads/2013/09/CSS-Logo-214x300.png?raw=true" width="200" height="300" alt="Logo HTML">
</p>
<br><br>
<a name="sincss"></a>
### Sintáxis CSS
CSS funciona a base de reglas, es decir, declaraciones sobre el estilo de uno o más elementos. Las hojas de estilo están compuestas por una o más de esas reglas aplicadas a un documento HTML o XML. La regla tiene dos partes: un selector y la declaración. A su vez la declaración está compuesta por una propiedad y el valor que se le asigne.

 (Fuente: <a href="http://www.w3c.es/Divulgacion/GuiasBreves/HojasEstilo">W3C</a>)
<br>

* Bloque de CSS
```
h1 {color: red;}

h1 es el selector

{color: red;} es la declaración
```

El selector funciona como enlace entre el documento y el estilo, especificando los elementos que se van a ver afectados por esa declaración. La declaración es la parte de la regla que establece cuál será el efecto. En el ejemplo anterior, el selector h1 indica que todos los elementos h1 se verán afectados por la declaración donde se establece que la propiedad color va a tener el valor red (rojo) para todos los elementos h1 del documento o documentos que estén vinculados a esa hoja de estilos.

Las tres formas más conocidas de dar estilo a un documento son las siguientes:
    * Utilizando una hoja de estilo externa que estará vinculada a un documento a través del elemento <link>, el cual debe ir situado en la sección <head>.
    
```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN">
<html>
  <head>
    <title>Título</title>
    <link rel="stylesheet" type="text/css" href="http://www.w3.org/css/officeFloats.css" />
  </head>
  <body>
  .
  .
  .
  .
  </body>
</html>
```

    * Utilizando el elemento <style>, en el interior del documento al que se le quiere dar estilo, y que generalmente se situaría en la sección <head>. De esta forma los estilos serán reconocidos antes de que la página se cargue por completo.
    
```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN">
<html>
  <head>
    <title>hoja de estilo interna</title>
    <style type="text/css">
  
      body {
        padding-left: 11em;
        font-family: Georgia, "Times New Roman", serif;
        color: red;
        background-color: #d8da3d; 
      }
    
      h1 {
        font-family: Helvetica, Geneva, Arial, sans-serif;
      }
    
    </style>
  </head>
  <body>
    <h1>Aquí se aplicará el estilo de letra para el Título</h1>
  </body>
</html>
```

    * En el siguiente ejemplo, h1{color: red;}, el selector, <h1>, le dice al navegador la parte del documento que se verá afectada por esa regla. Los selectores pueden aparecer individualmente o agrupados, separándolos con comas:
    
```
h1, h2, h3 {
  color: red;
}
```

    * Que es Equivalente a:
    
```
h1 {color: red;}
h2 {color: red;}
h3 {color: red;}
```

    * La propiedad, que en este caso sería color, especifica qué aspecto se va a cambiar. En este ejemplo la propiedad cambiada será el color. Las propiedades que se desean modificar en una CSS para un mismo selector pueden agruparse, pero será necesario separar cada una de ellas con un punto y coma.

```
p {text-align:center;color:red}
```

Normalmente se describe una propiedad por línea, de la siguiente manera:

```
    h1 {
  padding-left: 11em;
  font-family: Georgia, "Times New Roman",Times, serif;
  color: red;
  background-color: #d8da3d;
}
```

    * El valor, representado a la derecha de los dos puntos (:), establece el valor de la propiedad. Es importante recordar que si el valor está formado por más de una palabra, hay que ponerlo entre comillas.
    
```
    p {font-family: "sans serif";}
```

<a href="#cabecera">A la cabecera</a>

<a name="desarrollo"></a>
## 4. Desarrollo del informe

<a name="htmltags"></a>
### Código HTML con Tags
En la práctica se desarrollo con el siguiente código:
```
<style>
    html{
        background-color: #687fd4;
    } 
    body{
        background-color: #6df311;
    }
    h1{
        background-color: #a2b42b;
    }
</style>
```

También se ha creado clases y se el código lo podemos observar detalladamente a continuación.

```
.nombreClase{
    //estilos
}
```


<a href="#cabecera">A la cabecera</a>

<a name="conrec"></a>
## 5. Conclusiones y Recomendaciones

- Mientras que HTML es la estructura de las páginas web, CSS brinda el estilo o la personalización de las mismas de forma que ésta sea amigable con el usuario final.
- Se debe tener en cuenta la accesibilidad web en el diseño de una página web.

<br>
<a href="#cabecera">A la cabecera</a>


# ¡Gracias por su atención!

Author: [Stalin Guamán](https://github.com/StanGumn)

