# Use a imagem base do Node.js para construir o aplicativo Angular
FROM node:20.2.0 AS builder

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos de configuração do projeto e instale as dependências
COPY package*.json ./
RUN npm install

# Copie o código-fonte do aplicativo Angular para o contêiner
COPY . .

# Execute o comando 'ng build' para construir o aplicativo Angular
RUN npm run build

# Use uma imagem Nginx como imagem base para servir o aplicativo Angular
FROM nginx

# Copie os arquivos construídos do aplicativo Angular para a imagem do Nginx
COPY --from=builder /app/dist/front-secretaria-desenvolvimento-rural-jatai /usr/share/nginx/html

# Copie o arquivo de configuração do Nginx para substituir o padrão
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Exponha a porta 80 para acesso externo
EXPOSE 80
