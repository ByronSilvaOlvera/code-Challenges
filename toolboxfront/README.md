# <p style="text-align:center">Front cambio de Texto <p>
### `yarn start`
[http://localhost:3000](http://localhost:3000)
### `yarn test`
 [running tests](https://facebook.github.io/create-react-app/docs/running-tests) 

### `yarn build`
 [deployment](https://facebook.github.io/create-react-app/docs/deployment) 


### `Logica`
input de cabezera el cual ingresa la palabra
al momento de se enviada a la api procesa y agregada en un input dependiendo el orden que tenga. se ingresa tres veces al ingresa la tercera vez la siguiente palabra nueva en ingresa al input primario. para el conteo de la palabra ingresada uso redux lleva el conteo de la palabras ingresadas.


### `Desarrollo`
Realize componentes Main donde agrego una cabezera donde recepta el texto y asigna a los input correspodientes. Uso como css BootStrap y css, scss para crear los estilos en cuadrilla que den un aspecto idoneo. Utilizo Redux para controlar el estado de los texto ingresados despues del texto 3 seteo a 0 para volver asignar el siguiente texto al input primario. Conecto con la api para que ejecute el cambio de texto al revez y mostrar en los input correspondientes.
