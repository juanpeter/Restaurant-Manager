# Desafio Treinamento Java/Angular 2021
## Escopo do projeto:
Desenvolver um sistema de Gestão de Restaurante, onde o usuário poderá realizar as seguintes ações:

**[X] 1. Incluir um Pedido;**
-  Um pedido deverá possuir um item de restaurante como por exemplo “Porção de Arroz”, “Filé de Frango”;
- Um pedido deverá ter um valor;
- Um pedido deverá possuir uma situação, número do pedido e número da mesa. Por padrão um novo pedido deverá ter a situação “Novo”;

**[X] 2. Alterar um Pedido;**
- A situação não poderá ser alterada, apenas pelas funcionalidades abaixo;

**[X] 3. Detalhar um pedido;**

**[X] 4. Cancelar um pedido;**
- Altera a situação do pedido para “Cancelado”;

**[X] 5. Concluir um pedido;**
- Altera a situação do pedido para “Concluído”;

**6. Fechar Conta da Mesa;**
- Soma todos os pedidos Concluídos da Mesa e retorna o valor total, além disso, altera a situação de todos os pedidos somados para “Fechado”;

**[X] 7. Visualizar todos os pedidos pendentes;**
- Lista todos os pedidos com as seguintes situações: “Novo” e “Concluído”, e a partir dessa lista, o usuário pode detalhar, cancelar, alterar ou finalizar um pedido;

**8. O sistema deverá possuir um menu para o usuário incluir um novo pedido, visualizar todos os pedidos pendentes e fechar conta da mesa.**

### Prazo do projeto:
1 semana, iniciando do dia 17/03/21 até o dia 24/03/21

**Requisitos:**
O Back-end deverá ser feito em Java (Spring) e o Front-end deverá ser feito em Angular e o sistema deverá ser disponibilizado no repositório do git.

Está liberado o uso de qualquer lib externa e templates como Bootstrap, PrimeNg e SweetAlert.

**A inclusão de novas funcionalidades ou melhorias será um diferencial.**