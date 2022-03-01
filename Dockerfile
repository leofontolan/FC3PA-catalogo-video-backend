FROM node:14.15.4-slim

#configurar usario| para não usar o root
USER node

WORKDIR /home/node/app

#segurar o container ativo
CMD [ "tail", "-f", "/dev/null" ]