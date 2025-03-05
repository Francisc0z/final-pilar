function redirigirConfirmacion(event) {
    event.preventDefault();
    window.location.href = "confirmacion.html";
}

function showToast() {
    const toast = new bootstrap.Toast(document.getElementById('liveToast'));
    toast.show();
}