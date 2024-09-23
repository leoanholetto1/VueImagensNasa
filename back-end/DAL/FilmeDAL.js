import { MongoClient } from 'mongodb'

export default class FilmeDAL{
    conectar(){
        const url = "mongodb://localhost:27017/";
        MongoClient.connect(url)
        .then(db => {
            const dbo = db.db("myfilmedb");
            dbo.createCollection("Filmes")
                .then(res => { console.log("Collection created!"); db.close(); })
        });
    }
    inserir(filme){
        const url = "mongodb://localhost:27017/";
        MongoClient.connect(url)
        .then(db => {
            const dbo = db.db("myfilmedb");
            //criando uma coleção de documentos para o databse myveiculodb
            dbo.collection("Filmes").insertOne(filme)
                .then(res => { console.log("1 document inserted!"); db.close(); })
        });

    }
    async retornaGeneros() {
        const filter = {};
        const projection = {
        '_id': 0, 
        'genres': 1
        };

        const client = await MongoClient.connect(
        'mongodb://localhost:27017/'
        );
        const coll = client.db('myfilmedb').collection('Filmes');
        const cursor = coll.find(filter, { projection });
        const result = await cursor.toArray();
        await client.close();
        return result;
    }

    async buscaFlexivel(filtro){
        const client = await MongoClient.connect(
        'mongodb://localhost:27017/'
        );
        console.log(filtro);
        const filter = {
            '$or': [
                {
                'title': new RegExp(filtro)
                }, {
                'extract': new RegExp(filtro)
                }, {
                'cast': {
                    '$elemMatch': {
                    '$regex': filtro, 
                    '$options': 'i'
                    }
                }
                }
            ]
        };
        const coll = client.db('myfilmedb').collection('Filmes');
        const cursor = coll.find(filter);
        const result = await cursor.toArray();
        await client.close();
        return result;
    }
    async buscaGeneros(filtros){
        const client = await MongoClient.connect(
        'mongodb://localhost:27017/'
        );
        console.log(filtros);
        const filter = {
            'genres': { '$in': filtros } 
        };
        const coll = client.db('myfilmedb').collection('Filmes');
        const cursor = coll.find(filter);
        const result = await cursor.toArray();
        await client.close();
        return result;
    }
}
