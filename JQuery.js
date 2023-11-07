//Crear Campos
$(document).ready(function() {
    $("#BtnAgregar").click(function() {
        var Nombre = $("#txtNombre").val();
        var Apellido = $("#txtApellidos").val();
        var Edad = $("#txtEdad").val();

        if (Nombre && Apellido && Edad) {

            var fila = $("<tr>");
            fila.append($("<td>").text(Nombre).val(Nombre));;
            fila.append($("<td>").text(Apellido).val(Apellido));
            fila.append($("<td>").text(Edad).val(Edad));
    //Crear Boton A la derecha de cada fila
            fila.append($("<td>").html('<button class="btn btn-danger" id="Eliminar">Eliminar</button>')
            .css("text-align", "center").val("Boton"));

            $("#Tabla tbody").append(fila);

            $("#txtNombre").val("");
            $("#txtApellidos").val("");
            $("#txtEdad").val("");

        } else {
            alert("Por favor, complete todos los campos.");
        }
    });
    //Eliminar Campos
    $("#Tabla").on("click", "#Eliminar", function() {
        $(this).closest("tr").remove();
    });


    // Creamos la funcion a partir del boton buscar
    $("#buscar").on("click", function() {
        var valorABuscar = $("#valorABuscar").val();

        // Remueve cualquier resaltado anterior
        $("table tbody td").css("background-color", "white");

        // Recorre las celdas de la tabla y busca el valor en los inputs.
        $("table tbody td").each(function() {
            if ($(this).val() === valorABuscar) {
                // Si el valor coincide, agrega la clase de resaltado.
                $(this).css("background-color", "rgb(0, 217, 255)");
            }
        });
    });
});


