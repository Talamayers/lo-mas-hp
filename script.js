// Script para la funcionalidad de búsqueda
const searchBar = document.getElementById('searchBar');
const sections = document.querySelectorAll('.languages');

searchBar.addEventListener('input', (e) => {
  const searchValue = e.target.value.toLowerCase();

  sections.forEach(section => {
    const sectionId = section.id.toLowerCase();
    const sectionTitle = section.querySelector('h2').textContent.toLowerCase();

    if (sectionId.includes(searchValue) || sectionTitle.includes(searchValue)) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });
});
