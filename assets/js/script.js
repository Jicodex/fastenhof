// ===== Package select and active
// সব package-group এর জন্য আলাদা আলাদা ভাবে কাজ করবে
document.querySelectorAll(".package-group").forEach(group => {

  const radios = group.querySelectorAll('input[type="radio"]');

  radios.forEach(radio => {
    radio.addEventListener("change", function () {

      // এই group এর ভিতরের সব item থেকে selected ক্লাস remove
      group.querySelectorAll(".package_card_item").forEach(item => {
        item.classList.remove("selected");
      });

      // শুধু current radio এর package select করো
      this.closest(".package_card_item").classList.add("selected");
    });
  });

});

// ======= Mobile Menu Start 
const toggler = document.querySelector(".menu-toggle");
  const menu = document.getElementById("navbarSupportedContent");

  // Bootstrap collapse event listeners
  menu.addEventListener("show.bs.collapse", () => {
    toggler.classList.add("active"); // icon → X
  });

  menu.addEventListener("hide.bs.collapse", () => {
    toggler.classList.remove("active"); // icon → normal
  });

  // Clicking any menu link will close the menu
  document.querySelectorAll("#navbarSupportedContent .nav-link").forEach(link => {
    link.addEventListener("click", () => {
      const bsCollapse = new bootstrap.Collapse(menu, { toggle: false });
      bsCollapse.hide(); // menu close
    });
  });
// ======= Mobile Menu End 

const footerSections = document.querySelectorAll(".footer_manu .col-12, .footer_manu .col-md-4, .footer_manu .col-lg-2");

  footerSections.forEach(section => {
    const title = section.querySelector("h4");
    const list = section.querySelector("ul");

    if(title && list){
      title.addEventListener("click", () => {

        // Close all sections first
        footerSections.forEach(s => {
          if(s !== section){
            s.classList.remove("footer-open");
          }
        });

        // Toggle current section
        section.classList.toggle("footer-open");
      });
    }
  });


 const sidebar = document.querySelector(".sidebar_card_show");
  const sidebarHeader = document.querySelector(".sidebar_card_header");

  sidebarHeader.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });


  document.querySelectorAll('.show_hide_button').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();

        let parent = this.closest('.accommodation_short_des');
        let content = parent.querySelector('.show_hide_div');
        let icon = this.querySelector('.arrow_icon');

        content.classList.toggle('active');
        icon.classList.toggle('rotate');

        if (content.classList.contains('active')) {
            this.innerHTML = `weniger Zimmerdetails <img class="arrow_icon rotate" src="assets/img/icons/down_arrow_black.svg">`;
        } else {
            this.innerHTML = `mehr Zimmerdetails <img class="arrow_icon" src="assets/img/icons/down_arrow_black.svg">`;
        }
    });
});
