Foi escolhida a MERN Stack (Mongo,Express,React, Node) pelos seguintes motivos:

- Mongo: Dados armazenados no formato mais fácil de visualizar, com maior integração com a linguagem escolhida. Além do que os requisitos do projeto não precisam de transação e nem joins.

-Express: Mais famoso midleware para aplicações web com node

-React: Mais famosa biblioteca de construção de aplicações web com SPA

-Node: Mais rápido para I/O, mesma linguagem no back e no front que facilita a comunicação e troca

   
Será utilizado também o Typescript em ambas camadas para maior segurança do código, além de permitir autocomplete da IDE que aumenta produtividade.


Devido a limitação do mongo, não é possível fazer full text search com partial words, portanto a solução mais fácil e que não impactaria performance seria criar um array no banco com palavras a serem buscadas sem acento ou caracteres especiais.

O que faltou:
backend - autenticação e autorização com jwt/passport
        - .env com usuário e senha do banco
        - pm2 para gerenciar processos node
        - build não rodar teste de integração

frontend - adicionar pré processar de css sass/less
         - adicionar os itens opcionais do desafio
