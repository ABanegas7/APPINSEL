//Index Behavior'

console.log("Javascript Loaded");


$("#pro").on("pagecreate",function(e){
    var productosList = $("#productosList");
    $.ajax("/api/v1/obtenerproductos",
            {
                "method":"GET",
                "data":{},
                "dataType":"json",
                "success":function(jsonDoc,status,jqXHR){
                    console.log(jsonDoc);
                    var htmlstr = "";
                    for(var i = 0 ; i < jsonDoc.Productos.length; i++){
                        htmlstr += '<li><p>'+jsonDoc.Productos[i].nombre+' Lps:'+jsonDoc.Productos[i].precio+'</p><li>'
                        /*htmlstr += '<li><p>'+" Lps "+jsonDoc.Productos[i].precio+'</p><li>'*/
                    }
                    productosList.html(htmlstr).listview("refresh");
                },
                "error":function(jqXHR,status, errorMsg){
                    console.log(errorMsg);
                }

            }
        );
});
