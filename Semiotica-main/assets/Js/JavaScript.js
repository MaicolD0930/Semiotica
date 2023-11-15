$(document).ready(function() {
    var Total=0, Contador=0, Prom=0;
    $("#BtnInserta").click(function() {
        var Id = $("#Dni").val();
        var img = $("#SEstudiante").val();
        var curso = $("#Asignatura").val();
        var n1 = $("#N1").val();
        var n2 = $("#N2").val();
        var n3 = $("#N3").val();
        var Sum=0;

        if (Id && n1 && n2 && n3) {
            if(img != "DefectoAsignatura"){
                var fila = $("<tr>");
                fila.append($("<td>").text(Id).val(Id));
                if(img === "Estudiante1"){
                    var Imagen = new Image();
                    Imagen.src = 'img/Estudiante 1.jpg';
                    fila.append("<img src='" + Imagen.src + "'>");
                }else if(img === "Estudiante2"){
                    var Imagen = new Image();
                    Imagen.src = 'img/Estudiante 2.jpg';
                    fila.append("<img src='" + Imagen.src + "'>");
                }else{
                    
                }
                fila.append($("<td>").text(curso).val(curso));
                Sum= (parseInt(n1) + parseInt(n2) + parseInt(n3))/3;
                fila.append($("<td>").append($("<p>").html(Sum).val(Sum)));
        //Crear Boton A la derecha de cada fila
                fila.append($("<td>").html('<button class="btn btn-danger" id="Eliminar">Eliminar</button>')
                .css("text-align", "center").val("Boton"));


                $("#Tabla tbody").append(fila);
    
                $("#Dni").val("");
                $("#SEstudiante").val("DefectoEstudiante");
                $("#Asignatura").val("DefectoAsignatura");
                $("#N1").val("");
                $("#N2").val("");
                $("#N3").val("");

                //Eliminar Campos
        $("#Tabla").on("click", "#Eliminar", function() {
                $("table tbody td p").each(function() {
                    Total-=parseInt($(this).val());
                    Contador --;
                });
                Prom=Total/Contador;
                $("#NotasF").text("El Promedio actual es: "+Prom).val(Prom) 
                $(this).closest("tr").remove();
        });
            }else{

                alert("!! Debe seleccionar un estudiante !!")
            }
        } else {
            alert("Por favor, complete todos los campos.");
        }
    });

    //Calcular Promedio
    $("#Calcular").on("click", function() {
        $("table tbody td p").each(function() {
            Total+=parseInt($(this).val());
            Contador ++;
        });
        Prom=Total/Contador;
        $("#NotasF").text("El Promedio actual es: "+Prom).val(Prom)
        alert(Prom);
    });

    //Sub-Rayar
    $("#buscar").on("click", function() {
        // Remueve cualquier resaltado anterior
        $("table tbody td p").css("background-color", "white");

        // Recorre las celdas de la tabla y busca el valor en los inputs.
        $("table tbody td p").each(function() {
            if ($(this).val() >= Prom) {
                // Si el valor coincide, agrega la clase de resaltado.
                $(this).css("background-color", "rgb(0, 217, 255)");
            }

        });
    });
});
