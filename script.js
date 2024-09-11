function scrollToSection(event, id) {
    event.preventDefault();
    var section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
