
# <p style="color:yellow; text-align:center" > Nombre API: <b>** TextoBack **</b> </p>
API se envia el texto y responde el mismo texto invertido

### <p style="color:yellow" > <b>Inicio de App</b> </p>

<p style="color:orange" >Desarrollo<p> Ejecutar se ejecuta la API.

```bash 
    npm run dev
```

<p style="color:orange" >Test<p> Ejecutar: existe dos archivos. El archivo test-x.js libreria superTest. El archivo test.js contiene librerias mocha, chai. 

```bash 
    npm test
```

### <p style="color:yellow" > <b>API</b> </p>

### <p style="color:orange"> URL </p>
Metodo: GET <br>
Url: <b style="color:green" >localhost:8089/api/textchange/?text=Ecuador</b> <br>
response: <span style="color:green" >{ 'ok' : 'true' , 'texto' : 'rodaucE' , 'msg' : 'ok'  } </span><br>
###  <p style="color:red" > <b>Nota</b> </p>
El la carpeta Http-text puede ejecutar el endpoint de tipo Get, dando click en Send Request, es un link que mostrara lo resultado de la API.

```bash
    Send Request
    GET {{host}}/textchange/?texto=Ecuador
```
### <p style="color:yellow" > Test </p>
Ejecutar el test existe dos archivos text-x-js superTest, y el archivo test.js con la liberias Mocha y Chai.
```bash
    npm test
```

### <p style="color:yellow" > Logica </p>
El objetivo es convertir un texto al revez por el cual explico que utilize un for each obtienendo el texto del parametro del request, obtengo el tamaño y recorro de el texto desde su mayor caracter superior el inferior y guardo ese recorrido para pasarlo como respuesta.


