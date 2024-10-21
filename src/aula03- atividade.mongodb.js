//Criar um banco de dados chamado “fecinavidb”;

//Criar uma coleção chamada “trabalhos”. Cada trabalho deve ter os atributos:

//título;

//área;

//autores com (nome e e-mail);

//dataEnvio;

//avaliadores com (CPF, nome e nota);

//mediaAvaliacoes;

//Adicione 4 trabalhos na coleção “trabalhos” utilizando o comando insertMany;

//Adicione 1 trabalho na coleção “trabalhos” utilizando o comando insertOne em que a área seja de “Biológicas”;




use("fecinavidb")
db.createCollection("trabalhos");

use("fecinavidb")
db.trabalhos.insertOne({
    titulo:"Uso de plantas medicinais",
    area:"Biológicas",
    autores:[
        {
            nome:"Eduarda Rodrigues Alves",
            email:"eduarda.alves@estudante.ifms.edu.br"
        }
    ],
    dataEnvio:"2024-09-10",
    avaliadores:[{
        cpf:"07876758142",
        nome:"Maria Julia Alves",
        nota:"10"
    }],
    mediaAvaliacoes:"9,5"
    
})


use("fecinavidb")
db.trabalhos.insertMany([
    {
    titulo:"Agricultura Familiar",
    area:"Biológicas",
    autores:[
        {
            nome:"Ana Santos",
            email:"ana.santos@estudante.ifms.edu.br"
        }
    ],
    dataEnvio:"2024-09-10",
    avaliadores:[{
        cpf:"05812436214",
        nome:"Bianca Moraes",
        nota:"9"
    }],
    mediaAvaliacoes:"8,5"
    },


    {
    titulo:"Agricultura nas escolas",
    area:"Biológicas",
    autores:[
        {
            nome:"Julia Bem",
            email:"julia.bem@estudante.ifms.edu.br"
        }
    ],
    dataEnvio:"2024-09-10",
    avaliadores:[{
        cpf:"78978978912",
        nome:"Emily Marques",
        nota:"10"
    }],
    mediaAvaliacoes:"9,5"
    },

    {
        titulo:"Uso de agrotóxicos",
        area:"Biológicas",
        autores:[
            {
                nome:"Emily Marques",
                email:"emily.marques@estudante.ifms.edu.br"
            }
        ],
        dataEnvio:"2024-09-10",
        avaliadores:[{
            cpf:"12365478932",
            nome:"Julia Bem",
            nota:"10"
        }],
        mediaAvaliacoes:"9,7"
    },

    {
        titulo:"Uso de agrotóxicos",
        area:"Biológicas",
        autores:[
            {
                nome:"Emily Marques",
                email:"emily.marques@estudante.ifms.edu.br"
            }
        ],
        dataEnvio:"2024-09-10",
        avaliadores:[{
            cpf:"12365478932",
            nome:"Julia Bem",
            nota:"10"
        }],
        mediaAvaliacoes:"9,7"
    },
    {
        titulo:"Assédio Moral e Sexual no Ambbiente Escolar",
        area:"Ciências Humanas",
        autores:[
            {
                nome:"Maria Julia Alves",
                email:"maria.alves@estudante.ifms.edu.br"
            }
        ],
        dataEnvio:"2024-09-10",
        avaliadores:[{
            cpf:"12365478932",
            nome:"Eduarda Rodrigues",
            nota:"9,0"
        }],
        mediaAvaliacoes:"8,7"
    },


])
//Faça um código que liste todos os 5 trabalhos cadastrados na coleção “trabalhos”;
use("fecinavidb")
db.trabalhos.find();

//Faça um código que liste todos os trabalho pertencentes a área de “Biológicas”
use("fecinavidb")
db.trabalhos.find({area:"Biológicas"});

