# GST - GUIA DE SUBSTITUIÇÃO DE TRANSISTORES


## ARTIGO - A invenção do transistor
Autores Michael Rioddan, Lilian Hoddeson, e Conyes Herring

[Link para Artigo](https://link.springer.com/chapter/10.1007/978-1-4612-1512-7_37)

Indiscutivelmente a invenção mais importante do século passado, o transistor é frequentemente citado como o exemplo de como a pesquisa científica pode levar a produtos comerciais úteis. Emergindo em 1947 de um programa da Bell Telephone Laboratories de pesquisa básica sobre a física dos sólidos, começou a substituir os tubos de vácuo na década de 1950 e acabou gerando o circuito integrado e o microprocessador - o coração de uma indústria de semicondutores que agora gera vendas anuais de mais de US$ 150. bilhão. Esses dispositivos eletrônicos de estado sólido são os que colocaram os computadores em nossos colos e nos desktops e permitiram que eles se comunicassem entre si por meio de redes telefônicas em todo o mundo. O transistor foi apropriadamente chamado de “célula nervosa” da Era da Informação.

Existem variados tipos de transistores, mas o que alcançou maior sucesso foi o transistor BJT(transistor de Junção Bipolar), desenvolvido por William Shockley, da Bell Labs, transistor foi uma invenção que acabou rendendo o prêmio Nobel aos seus criadores.
 

[Link - Veja como é formada a estrutura de um transistor e como funciona](pages_md/estrutura_trasistor.md)


## Sobre a aplicação, GST(Guia de Substituição de Transistores)

O GST (Guia de substituição de transistor ) é uma aplicação capaz de encontrar transistor equivalente em dois modos, após ter preencido todos os dados conforme o data sheet do transistor, o usuário clica no botão buscar/comparar que gera uma requisição em sua base de dados se há transistor ou transistores equivalente.
 ou fazendo os calculos necessarios e comparando os campos preenchidos.


. Outra forma de verificar se um transistor é  substituto do outro ou não, é por meio da comparação dos dados de um transistor com outro transistor e por meio do preenchimento dos dados de uma datasheet, executado por um usuário, referente ao transistor na tabela “A” e na tabela “B”, com isso a aplicação deve fazer os cálculos e comparações e dizer se o transistor é substituto ou não.
A aplicação foi dividida em duas partes, a API(    ) que é a parte onde se concentram os serviços da aplicação, ou seja, os “services”.




## Como funciona a inteface com usuário

Primeiro o usuário seleciona o tipo de transistor deseja buscar ou comparar, exemplo: mosfet conhecido como FET(Field Effect transistor), transistor de efeito de campo ou Power Transistor também conhecido como BJT(Transistor de Junção Bipolar),digamos que o usuário tenha selecionado o modo comparar, então o usuário preenche todos os campos do formulário conforme os dados data sheet do transistor que deseja substituir e também o outro que supostamente seja equivalente para que a aplicação GST possa afirmar se é equivalente ou não.

No modo buscar, o usuário preenche os dados do transistor que deseja encontrar e clicando no botão buscar/comparar envia os dados para API que se encarregará de varrer o seu banco de dados e retornar uma lista dos transistores equivalentes.  

## Como é feito o cálculo e restrições para identificar se é substituto ou não





## Ferramentas e tecnologias utilizadas no desenvolvimento da UI(User interface) interface com usuário, denominada GST(Guia de Substituição de Transistores) - Front-End

A UI(User interface) interface com o usuário foi desenvolvida na linguagem de programação Javascript com Node.js, utilizando a biblioteca React,  também foi utilizada as bibliotecas Reactstrap e Feathericons.

[Link - Interface GST ](https://)

## Ferramentas utilizadas para o desenvolvimento da API GST(Guia de Substituição de transistores) - Back-End

A API GST, desenvolvida na linguagem de programação Typescript, em conjunto com o Node.js e Express.js, dentre outros módulos para auxiliar no desenvolvimento como Axios, CORS, e Nodemon, o banco de dados MYSQL Server também foi associada a API.

para mais detalhes clique no link abaixo:





[PÁGINA 02](pages_md/page_2.md)