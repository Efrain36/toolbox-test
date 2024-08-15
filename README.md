# Toolbox App

App para el code challenge de toolbox, consta de dos componentes principales: un cliente React (toolbox-client) y un backend Express (toolbox-api).

## Requisitos

Antes de comenzar, debes tener instalado:

- Docker

## Primeros pasos

1. **Cliente (toolbox-client)**

    El cliente es una aplicación React. Sigue estos pasos para configurarlo:

    - Navega al directorio `toolbox-client`:

        ```bash
        cd toolbox-client
        ```

    - Instala las dependencias:

        ```bash
        npm install
        ```

    - Inicia el servidor de desarrollo:

        ```bash
        npm run start
        ```

    El cliente estará disponible en http://localhost:3002.

2. **Backend (toolbox-api)**

    El backend es una aplicación Express. Sigue estos pasos para configurarlo:

    - Navega al directorio `toolbox-api`:

        ```bash
        cd ../toolbox-api
        ```

    - Instala las dependencias:

        ```bash
        npm install
        ```

    - Inicia el servidor:

        ```bash
        npm run start
        ```

    El backend estará disponible en http://localhost:8081.
    Puedes acceder al swagger en http://localhost:8081/api-docs

## Ejecución de ambos componentes en simultaneo

Para ejecutar tanto el cliente como el backend juntos utilizando Docker, sigue estos pasos:

1. En la raíz del proyecto (donde se encuentra tu archivo `docker-compose.yml`), ejecuta:

    ```bash
    docker-compose up -d
    ```

    Esto iniciará los contenedores del cliente y el backend en modo desacoplado.
    
## Ejecución de test

Para ejecutar las pruebas en cada componente, sigue estos pasos:

1. **Cliente (toolbox-client)**

    - Navega al directorio `toolbox-client`:

        ```bash
        cd toolbox-client
        ```

    - Ejecuta las pruebas:

        ```bash
        npm run test
        ```

2. **Backend (toolbox-api)**

    - Navega al directorio `toolbox-api`:

        ```bash
        cd toolbox-api
        ```

    - Ejecuta las pruebas:

        ```bash
        npm run test    

2. Accede al cliente en http://localhost:3002 y al backend en http://localhost:8081.
