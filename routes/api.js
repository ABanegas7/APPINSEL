var express = require('express');
var apirouter = express.Router();

function api(db){
    //Colecciones
    var clientes = db.collection("Clientes");
    //Rutas
    apirouter.get("/obtenerclientes",
        function(req, res){
            var query = {};
            clientes.find(query).toArray(function(err, vClintes){
                if(err){
                    res.status(500).json({"error":err});
                }else{
                    res.status(200).json({"clientes":vClintes});
                }
            }) // busqueda Clientes
        }
    ) // obtenerLibros
    apirouter.get("/obtenercliente/:cod",
        function(req, res){
            var query = {"cod": req.params.cod};
            clientes.findOne(query, function(err, doc){
                if(err){
                    res.status(500).json({"error":err});
                }else{
                    res.status(200).json({"cliente":doc});
                }
            });

        }
    ) // obtenerCliente

    apirouter.post("/modificarcliente/:cod",
        function(req, res){
            var query = {"cod": req.params.cod};
            var upd = {"$set":{"nombre":req.body.nombre}};

            clientes.updateOne(query,upd,{w:1},function(err, doc){
                if(err){
                    res.status(500).json({"error":err});
                }else{
                    res.status(200).json({"cliente":doc});
                }
            });
        }
    ) // modificarcliente

    apirouter.put("/agregarcliente",
        function(req, res){
            console.log(req.body);
            var newcli = {};
            newcli.cod = req.body.cod;
            newcli.nombre = req.body.nombre;
            clientes.insertOne(newcli, function(err, doc){
                if(err){
                    res.status(500).json({"error":err});
                }else{
                    res.status(200).json({"cliente":doc});
                }
            });
        }
    ) // agregarcliente
    apirouter.delete("/eliminarcliente/:cod",
        function(req, res){
            var query = {"cod": req.params.cod};
            clientes.deleteOne(query,{w:1},function(err, doc){
                if(err){
                    res.status(500).json({"error":err});
                }else{
                    res.status(200).json({"cliente":doc});
                }
            } );
        }
    ) // eliminarcliente
    return apirouter;
}

module.exports = api;
