function scrollToSection(event: MouseEvent, id: string) {
    event.preventDefault(); 
  
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  