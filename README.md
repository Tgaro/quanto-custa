# Cotar

## Instalação

Para utilizar a aplicação é necessário que você possua o [node](https://nodejs.org/en/download/) instalado em sua máquina.

Extrair os arquivos do arquivo zip em uma pasta.

Abra o prompt de comando na pasta onde foram extraídos os arquivos e execute o comando: 

```bash
npm install
```

O comando irá realizar o download de todas as dependências do projeto.

## Utilização

Após o término do download, basta executar o comando:

```bash
npm start
```

O servidor irá subir na porta 3031 do localhost. (Certifique-se de que nenhum serviço está utilizando essa porta).

Feito isso, você deve acessar o endereço /home para utilizar a aplicação.

## Testes

Para executar os testes, basta executar o comando abaixo. Certifique-se de que não há nenhum serviço sendo executado na porta 3031 antes de executar os testes.

```bash
npm test
```

Caso queira acrescentar ou modificar algum teste, é necessário modificar os arquivos contidos na pasta ./test
