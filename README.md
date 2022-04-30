# Porfolio_backend v1

Este es el webservice que usa la aplicacion de mi [portfolio](https://github.com/castrocarlos313/portfolio) para el formulario de contacto.

# Contenido

- [Porfolio_backend v1](#porfolio_backend-v1)
- [Contenido](#contenido)
- [Tecnologia usadas](#tecnologia-usadas)
- [Launch](#launch)
- [Entradas de la api](#entradas-de-la-api)
  - [POST /contact Enviar mensaje](#post-contact-enviar-mensaje)
- [TODO](#todo)

# Tecnologia usadas

- [Typescript](https://www.typescriptlang.org/)
- [Eslint](https://eslint.org/)
- [Express](https://expressjs.com/)
- [cors](https://www.npmjs.com/package/cors)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [nodemailer](https://nodemailer.com/about/)
- [Handlebars](https://handlebarsjs.com/)

# Launch

Antes de correr esta aplicacion se debe crear un archivo `_.env_` y agregar las siguientes variables de entorno:

```
PORT= PUERTO_POR_DEFECTO
RECEIVER=EMAIL_RECEPTOR
USER=EMAIL_EMISOR
PASSWORD=PASSWORD_EMAIL_EMISOR
```

Y ejecutar los siguientes comando:

```
$ npm install
$ npm run dev
```

# Entradas de la api

## POST /contact Enviar mensaje

Ejemplo: http://localhost:3000/contact

Request:

    {
        body: {
            name: string,
            email: string,
            reason: string,
            message: string
        }
    }

Response:

    {
        msg: string,
    }

# TODO

- CRUD de proyectos
