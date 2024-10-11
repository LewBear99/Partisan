document.addEventListener('DOMContentLoaded', () => {
  const searchBar = document.getElementById('searchBar');
  const sections = document.querySelectorAll('.inventor');

  searchBar.addEventListener('input', () => {
    const searchTerm = searchBar.value.toLowerCase();

    sections.forEach(section => {
      const name = section.getAttribute('data-name').toLowerCase();
      const description = section.textContent.toLowerCase();

      if (name.includes(searchTerm) || description.includes(searchTerm)) {
        section.style.display = '';
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
      // Check if the clicked section's info is already visible
      const isVisible = info.style.display === 'block';

      // Hide all inventor info sections
      sections.forEach(sec => {
        const secInfo = sec.querySelector('.inventor-info');
        secInfo.style.display = 'none'; // Hide all sections first
      });

      // Toggle display of the clicked inventor's info
      info.style.display = isVisible ? 'none' : 'block'; // Show or hide the clicked one
    });
  });
});
