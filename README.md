# Workshop ACERTA! ViaLabs 2

App desenvolvida para o workshop vialabs 2.0  
Pré-requisitos: node, npm  

Conceitos embarcados:
`TypeScript, DDD, TDD, Test Coverage, Clean Code e OO`.  

## COMMANDS
- INSTALL DEPENDENCIES 
    
      npm i

- TEST
    
      npm test

- COVERAGE REPORT

      npm run converage-report

- BUILD
  
      npm run build

- START
  
      npm run start

- ACCESS:

         http://localhost:3000/api/produtos
    
- TEST POST:

         curl -d '{"nome": "Produto teste 1", "preco": 20.00}'  -H "Content-Type: application/json" -X POST http://localhost:3000/api/produtos
