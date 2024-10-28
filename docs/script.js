document.addEventListener('DOMContentLoaded', () => {
  const searchBar = document.getElementById('searchBar');
  const sections = document.querySelectorAll('.inventor');

  // Search function to display matching sections
  searchBar.addEventListener('input', () => {
    const searchTerm = searchBar.value.toLowerCase().trim();

    sections.forEach(section => {
      const name = section.getAttribute('data-name').toLowerCase();
      const description = section.textContent.toLowerCase();

      if (searchTerm && (name.includes(searchTerm) || description.includes(searchTerm))) {
        section.style.display = 'block';
      } else {
        section.style.display = 'none';
      }
    });
  });

  // Toggle display of the clicked inventor's information
  sections.forEach(section => {
    const header = section.querySelector('.inventor-header');
    const info = section.querySelector('.inventor-info');

    header.addEventListener('click', () => {
      const isVisible = info.style.display === 'block';

      sections.forEach(sec => {
        const secInfo = sec.querySelector('.inventor-info');
        secInfo.style.display = 'none';
      });

      info.style.display = isVisible ? 'none' : 'block';
    });
  });
});
