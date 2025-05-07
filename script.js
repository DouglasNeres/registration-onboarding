document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".nav-link");
  const tabLinks = [...tabs].map(tab => tab.getAttribute("href"));
  let currentIndex = 0;

    function updateTabs(index) {
      currentIndex = index;
    
      tabs.forEach((tab, i) => {
        tab.classList.toggle("active", i <= currentIndex);
      });
    
      document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('show', 'active');
      });
    
      const targetHref = tabLinks[currentIndex];
      const contentPane = document.querySelector(targetHref);
      if (contentPane) {
        contentPane.classList.add('show', 'active');
      }
    }

  document.querySelectorAll('[data-action]').forEach(button => {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      const action = this.getAttribute('data-action');
      if (action === 'next' && currentIndex < tabLinks.length - 1) {
        updateTabs(currentIndex + 1);
      }
      if (action === 'prev' && currentIndex > 0) {
        updateTabs(currentIndex - 1);
      }
    });
  });

  tabs.forEach((tab, i) => {
    tab.addEventListener("click", function (event) {
      event.preventDefault();
      updateTabs(i);
    });
  });
});
 