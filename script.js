function handleClick(buttonType) {
    switch(buttonType) {
        case 'sos':
            alert('SOS button clicked');
            break;
        case 'incendio':
            alert('Incendio button clicked');
            break;
        case 'asistencia':
            alert('Asistencia button clicked');
            break;
        case 'enCamino':
            alert('En Camino button clicked');
            break;
        case 'estoyAqui':
            alert('Estoy Aquí button clicked');
            break;
            case 'Emergencia':
            alert('Emergencia button clicked');
            break;
        default:
            alert('Unknown button clicked');
    }
}
function redirectTo(page) {
    window.location.href = page;
}
