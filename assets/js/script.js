$(document).ready(function () {
    /* SmoothScroll */
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            })
        }
    });
    /* Tooltip Formulario*/
    $('[data-toggle="tooltip"]').tooltip();
    /*Alerta al hacer click en "Enviar" Formulario */
    $('#enviarForma').on("click", function () {
        alert("La consulta fue enviada correctamente...")
    });
    /* oculta/muestra el texto de las tarjetas al hacer click en cualquier imágen */
    $('.card-img-top').on("click", function (){
        $('.card-body').toggle()
    });
});