db.Inseldb.find();

db.Inseldb.findOne();

> query = {"ID":100}
> db.Clientes.remove(query)//para borrar registro

> db.Clientes.find({"_id":1});

db.Clientes.drop() //borrar coleccion

> db.Productos.save(doc) //guardar cambios

> query = {"ID":1}

> db.Clientes.find(query)

> var upd={"$set":{"usuario":"banegas"}}

> db.Clientes.update(query,upd) //recibe filtro y valor a actualizar

> db.Productos.find({"precio":150})// buscar solo el domumento 200000

> db.Productos.find({"precio":{$lt:100}}).pretty() //$lt El precio es menor que

> db.Productos.find({"precio":{$lt:100}}).count()// contar cuantos cumplen con la condicion

> db.Productos.find({"precio":{$gt:200}}).pretty()// $gt El precio es mayor que

> db.Productos.find({"precio":{$gt:200}}).pretty()// $gte es mayor o igual que

> db.Productos.find({$and:[{"precio":{$gt:50}},{"precio":{$lt:60}}]}).count() //Sacar los precios entre ese rango

> db.Productos.find({$or:[{"precio":{$lte:10}},{"precio":{$gte:90}}]}).count() //sacar los precios 10 y 90 en existencia

> db.Productos.find({"existencia":"10}).count()

> db.Productos.find({$and:[{"nombre":"Camaras","nombre":"DVR"}]}).count()
