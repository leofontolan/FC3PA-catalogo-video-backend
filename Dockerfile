FROM node:14.15.4-slim

RUN mkdir -p /usr/share/man/man1 && \
    echo 'deb http://ftp.debian.org/debian stretch-backports main' | tee /etc/apt/sources.list.d/stretch-backports.list && \
    apt update && apt install -y \
    git \
    openssh-client \
    ca-certificates \
    openjdk-11-jre \
    zsh \
    curl \
    wget \
    fonts-powerline


ENV JAVA_HOME="/usr/lib/jvm/java-11-openjdk-amd64"


#configurar usuário| para não usar o root
USER node


WORKDIR /home/node/app

# Default powerline10k theme, no plugins installed
RUN sh -c "$(wget -O- https://github.com/deluan/zsh-in-docker/releases/download/v1.1.2/zsh-in-docker.sh)" -- \
            -t https://github.com/romkatv/powerlevel10k.git \
            -p git \
            -p git-flow \
            -p gitfast \
            -p https://github.com/zdharma-continuum/fast-syntax-highlighting \
            -p https://github.com/zsh-users/zsh-autosuggestions \
            -p https://github.com/zsh-users/zsh-completions \
            -a 'export TERM=xterm-256color'
           
           
RUN echo '[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh' >> ~/.zshrc && \
    echo 'HISTFILE=/home/node/zsh/.zsh_history' >> ~/.zshrc 



#segurar o container ativo
CMD [ "sh", "-c", "npm install && tail -f /dev/null" ]