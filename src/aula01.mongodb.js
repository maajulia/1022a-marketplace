//MYSQL - > Selecionando o banco de dados que iriamos usar.
//MONGO - > Seleciona o banco de dados, se não existir
// ELE CRIA O BANCO DE DADOS.
use('ifms');

db.createCollection("aluno")

db.getCollectionNames()

db.getCollection("aluno").insertOne({
  nome:"Guilherme",
  idade:29,
  email:"guilherme.terenciani@ifms.edu.br",
  cpf:"054.135.987-25",
  telefone:"67996564879"
})


//CRIEM OUTRA COLLECTION CHAMA "professor"
// nome, idade, email, cpf, endereco_trabalho, telefone

//Insira pelo menos 2 professores no banco de dados "escola"

