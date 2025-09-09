AOS.init({ duration: 1200, once: true });

  document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader");

    if (preloader) {
      // Ẩn preloader
      preloader.style.opacity = "0";
      preloader.style.visibility = "hidden";

      // Xóa khỏi DOM sau khi transition xong (0.1s)
      setTimeout(() => {
        preloader.remove();
      }, 150); 
    }
  });

  // Fallback: nếu DOM chưa load thì vẫn auto ẩn sau 5s
  setTimeout(() => {
    const preloader = document.getElementById("preloader");
    if (preloader) {
      preloader.style.opacity = "0";
      preloader.style.visibility = "hidden";
      setTimeout(() => preloader.remove(), 150);
    }
  }, 5000);
const btn = document.getElementById('btnOrder');
btn.addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});
const hamburger = document.querySelector(".hamburger");
const mobileNav = document.getElementById("mobileNav");
const overlay = document.getElementById("overlay");
const navLinks = document.querySelectorAll(".mobile-nav a");

// mở menu
hamburger.addEventListener("click", () => {
    mobileNav.classList.add("active");
    overlay.classList.add("active");
    hamburger.classList.add("hide"); // ẩn hamburger
});

// tắt khi bấm overlay
overlay.addEventListener("click", closeMenu);

// tắt khi bấm link trong menu
navLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
});

function closeMenu() {
    mobileNav.classList.remove("active");
    overlay.classList.remove("active");
    hamburger.classList.remove("hide"); // hiện lại
}

// preloader
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0";
    preloader.style.visibility = "hidden";
    setTimeout(() => preloader.remove(), 800);
});
// back to top
document.addEventListener("DOMContentLoaded", function () {
    const backToTopBtn = document.getElementById("backToTopBtn");

    if (backToTopBtn) {
        // Hiển thị/nút ẩn khi cuộn
        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add("show");
            } else {
                backToTopBtn.classList.remove("show");
            }
        });

        // Cuộn lên đầu trang khi nhấp
        backToTopBtn.addEventListener("click", function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    } else {
        console.error("Không tìm thấy nút 'Lên đầu trang'");
    }
});
// Lấy tất cả menu item
const menuItems = document.querySelectorAll('.menu-item img');

// Thêm sự kiện click
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

});
   const items = document.querySelectorAll('.timeline-item');
        function checkVisible() {
            const triggerBottom = window.innerHeight * 0.85;
            items.forEach(item => {
                const itemTop = item.getBoundingClientRect().top;
                if (itemTop < triggerBottom) { item.classList.add('visible'); }
            });
        }
        window.addEventListener('scroll', checkVisible);
        window.addEventListener('load', checkVisible);

