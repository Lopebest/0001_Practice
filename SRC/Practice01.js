db.coleccion01.insertOne({q: 'Esta colección es de pruebas'})
db.coleccion01.insertOne({w: 'Es un día estupendo', 
    e: 'Hace sol y las temperaturas son agradables',})
db.coleccion01.insertMany([
    {r: 'Inicio de un insertMany'},
    {t: 'Avances de insertMany'},
    {y: 'Antes de probar a dar un valor numérico'},
    {u: 42},
    {i: 'Posterior a probar a dar un valor numérico'},
    {o: 'Fin de un insertMany'}])