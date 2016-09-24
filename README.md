# Desafio front-end InternetSistemas

[DEMO] (https://malinosqui.github.io/desafio_iS/)

Desafio para o processo seletivo da InternetSistemas, para este desafio foram utilizadas as bibliotecas JQuery, moment.js, browserfy e grunt. Os códigos estão em es6 e são interpretados e transformados para es5 com o babel.

Lembrando que todos esses passos são necessários devido a utilização do es6 e a minificação dos arquivos de css e html, caso seja algo mais simples, é apenas codar e rodar o ```http-server ```


## Clonando e instalando dependências
Primeiramente, clone esse repositório, após clonar, execute o comando ```npm install``` para instalar todas as dependências que o projeto necessita.

## Grunt
Após ter instalado todas as dependências, certifique-se de que tem o ```grunt-cli``` instalado globalmente na sua máquina, para isso tente rodar o comando ```grunt```, caso de algum erro execute o comando ```npm install -g grunt-cli```.tu

## Gerando Dist
Depois que instalamos tudo o que é necesessário para o projeto rodar, vamos gerar a pasta ```dist```, que é a pasta pronta para dar deploy, com todas as boas práticas aplicadas, minificação de css e html e a transformação do código em es6 para es5 para os navegadores entenderem. Para isso, execute o comando ```grunt buildDev```.

## Rodando
Pronto, agora todos os arquivos do site foram gerados, agora é só rodar o ```http-server``` dentro da pasta ```dist``` e ser feliz.


