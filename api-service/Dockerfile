#Esto es un comentario
#Esta sera una imagen por etapas que contendra tanto el frontend como el backend

#Para compilar la imagen usar el comando (NO OLVIDAR EL PUNTO)
#
#   >docker build -t api-service .
#
#Donde 'stock-service' puede ser cualquier nombre

#Para ejecutar usar el comando
#
#   >docker run -it --publish 3001:3001 api-service
#
#Donde 'stock-service' es el nombre asignado cuando se compilo la imagen

##################################################API###################################################

#Indicamos que se necesita una version de Node.js especifica
#Para mas informacion: https://hub.docker.com/_/node
FROM node:14

#Indicamos la ubicacion del proyecto DENTRO del contenedor (no dentro de la maquina)
WORKDIR /api-service

#Copiamos la carpeta 'backend' al contenedor en el directorio de trabajo actual
COPY . ./

#Instalamos las dependencias
RUN npm install

#Ejecutamos el servidor
CMD ["npm", "run", "start"]