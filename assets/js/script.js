// ========================
// 1. Package Select and Active
// ========================
document.querySelectorAll(".package-group").forEach(group => {
  group.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener("change", function () {
      group.querySelectorAll(".package_card_item").forEach(item => item.classList.remove("selected"));
      this.closest(".package_card_item").classList.add("selected");
    });
  });
});

// ========================
// 2. Mobile Menu Toggle + Auto Close (Except Mega Menu)
// ========================
const toggler = document.querySelector(".menu-toggle");
const menu = document.getElementById("navbarSupportedContent");

if (menu && toggler) {
  menu.addEventListener("show.bs.collapse", () => toggler.classList.add("active"));
  menu.addEventListener("hide.bs.collapse", () => toggler.classList.remove("active"));

  document.querySelectorAll("#navbarSupportedContent .nav-link").forEach(link => {
    link.addEventListener("click", () => {
      if (!link.closest(".mega-dropdown")) {
        const bsCollapse = new bootstrap.Collapse(menu, { toggle: false });
        bsCollapse.hide();
      }
    });
  });
}

// ========================
// 3. Footer Accordion
// ========================
const footerSections = document.querySelectorAll(".footer_manu .col-12, .footer_manu .col-md-4, .footer_manu .col-lg-2");

footerSections.forEach(section => {
  const title = section.querySelector("h4");
  const list = section.querySelector("ul");

  if (title && list) {
    title.addEventListener("click", e => {
      e.stopPropagation();
      footerSections.forEach(s => { if (s !== section) s.classList.remove("footer-open"); });
      section.classList.toggle("footer-open");
    });
  }
});

// ========================
// 4. Sidebar Toggle
// ========================
const sidebar = document.querySelector(".sidebar_card_show");
const sidebarHeader = document.querySelector(".sidebar_card_header");

if (sidebar && sidebarHeader) {
  sidebarHeader.addEventListener("click", e => {
    e.stopPropagation();
    sidebar.classList.toggle("active");
  });
}

// ========================
// 5. Show / Hide Room Details
// ========================
document.querySelectorAll('.show_hide_button').forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault();
    const parent = this.closest('.accommodation_short_des');
    const content = parent.querySelector('.show_hide_div');
    const icon = this.querySelector('.arrow_icon');

    content.classList.toggle('active');
    icon.classList.toggle('rotate');

    this.innerHTML = content.classList.contains('active')
      ? `weniger Zimmerdetails <img class="arrow_icon rotate" src="assets/img/icons/down_arrow_black.svg">`
      : `mehr Zimmerdetails <img class="arrow_icon" src="assets/img/icons/down_arrow_black.svg">`;
  });
});

// ========================
// 6. Plus / Minus Input
// ========================
document.querySelectorAll('.plus_minus_mode').forEach(box => {
  const input = box.querySelector("input");
  if (!input) return;

  box.querySelector(".plus")?.addEventListener("click", e => {
    e.preventDefault();
    input.value = Number(input.value) + 1;
  });

  box.querySelector(".minus")?.addEventListener("click", e => {
    e.preventDefault();
    if (input.value > 0) input.value = Number(input.value) - 1;
  });
});

// ========================
// 7. Sticky Top Nav
// ========================
window.addEventListener('scroll', () => {
  const topNav = document.getElementById('top_nav');
  const header = document.getElementById('header');
  const scroll = window.scrollY;

  if (topNav && header) {
    if (scroll > 50) {
      topNav.classList.add('sticky');
      header.classList.add('sticky');
    } else {
      topNav.classList.remove('sticky');
      header.classList.remove('sticky');
    }
  }
});

// ========================
// 8. Dropdowns + Date Picker
// ========================
const dropdowns = document.querySelectorAll(".dropdown-menu");
const selectBoxes = document.querySelectorAll(".select-box");

const closeAllDropdowns = () => dropdowns.forEach(dd => dd.style.display = "none");

selectBoxes.forEach((box) => {
  box.addEventListener("click", e => {
    e.stopPropagation();
    closeAllDropdowns();

    const menu = document.getElementById(box.dataset.dd);
    if (menu) {
      menu.style.left = "10px";
      menu.style.top = "100%";
      menu.style.display = "block";
    }
  });
});

document.querySelectorAll(".option").forEach(option => {
  option.addEventListener("click", () => {
    const parent = option.closest(".dropdown-menu");
    if (!parent) return;
    const box = document.querySelector(`.select-box[data-dd="${parent.id}"]`);
    if (box) box.querySelector("span").textContent = option.textContent;
    parent.style.display = "none";
  });
});

document.querySelectorAll(".date-box").forEach(box => {
  const input = box.querySelector(".date-input");
  if (!input) return;

  box.addEventListener("click", e => { e.stopPropagation(); input.showPicker(); });
  input.addEventListener("change", e => box.querySelector("span").textContent = e.target.value);
});

document.addEventListener("click", closeAllDropdowns);

document.addEventListener("DOMContentLoaded", function () {
  const megaItem = document.querySelector(".mega-dropdown");
  const megaToggle = megaItem.querySelector(".mega-toggle");
  const megaMenu = megaItem.querySelector(".mega-menu");

  megaToggle.addEventListener("click", function (e) {
    if (window.innerWidth < 992) {
      e.preventDefault();
      e.stopPropagation();

      megaItem.classList.toggle("open");

      megaMenu.style.display =
        megaMenu.style.display === "block" ? "none" : "block";
    }
  });

  // Prevent menu from closing when clicking inside mega menu
  megaMenu.addEventListener("click", function (e) {
    e.stopPropagation();
  });
});
