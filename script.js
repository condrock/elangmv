const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

function redirectCU(e) {
    if (e.ctrlKey && e.which == 85) {
        window.location.replace("/");
        return false;
    }
}
document.onkeydown = redirectCU;
