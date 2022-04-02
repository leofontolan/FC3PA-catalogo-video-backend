FROM node:14.15.4-slim

RUN apt update && apt install -y --no-install-recommends \
    git

#configurar usuário| para não usar o root
USER node

WORKDIR /home/node/app

#segurar o container ativo
CMD [ "sh", "-c", "npm install && tail -f /dev/null" ]