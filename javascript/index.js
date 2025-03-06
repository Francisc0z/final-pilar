//funcion para mostrar la pagina luego de completar el form
function redirigirConfirmacion(event) {
    event.preventDefault();
    window.location.href = 'confirmacion.html';
}

// Función para mostrar el toast
function showToast() {
    var toast = new bootstrap.Toast($('#liveToast')[0]);
    toast.show();
}