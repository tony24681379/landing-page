// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", function () {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const offsetTop = target.offsetTop - 70; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // Add scroll effect to navbar
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = "rgba(44, 62, 80, 0.95)";
    } else {
      navbar.style.backgroundColor = "#2c3e50";
    }
  });

  // Animate elements on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".about-card");

    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < window.innerHeight - elementVisible) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  };

  // Initial setup for animation
  const elements = document.querySelectorAll(".about-card");
  elements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

  // Add scroll listener
  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll(); // Run once on load

  // Add loading class to body when page loads
  document.body.classList.add("loaded");

  // Handle external links (open in new tab)
  document.querySelectorAll('a[href^="http"]').forEach((link) => {
    if (
      !link.href.includes("changes.live") &&
      !link.href.includes("iching.changes.live")
    ) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });

  // Simple visitor counter (using localStorage)
  const updateVisitorCount = () => {
    let visits = localStorage.getItem("siteVisits") || 0;
    visits = parseInt(visits) + 1;
    localStorage.setItem("siteVisits", visits);

    // You can display this somewhere if needed
    console.log(`網站訪問次數: ${visits}`);
  };

  updateVisitorCount();

  // Add click tracking for main CTA buttons
  document.querySelectorAll(".btn-primary").forEach((button) => {
    button.addEventListener("click", function (e) {
      // Track button clicks (you can integrate with analytics here)
      const buttonText = this.textContent.trim();
      console.log(`按鈕點擊: ${buttonText}`);

      // For external links to the main site
      if (this.href && this.href.includes("iching.changes.live")) {
        // Add any tracking code here before redirect
        console.log("前往主要卜卦網站");
      }
    });
  });

  // Form validation (if you add forms later)
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Add error handling for images
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("error", function () {
      this.style.display = "none";
    });
  });

  // Add loading states for any async operations
  const showLoading = (element) => {
    element.classList.add("loading");
  };

  const hideLoading = (element) => {
    element.classList.remove("loading");
  };

  // Utility function to debounce scroll events
  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  // Apply debouncing to scroll events
  const debouncedScrollHandler = debounce(() => {
    animateOnScroll();
  }, 10);

  window.removeEventListener("scroll", animateOnScroll);
  window.addEventListener("scroll", debouncedScrollHandler);
});

// Add CSS for loading states
const addLoadingStyles = () => {
  const style = document.createElement("style");
  style.textContent = `
        .loading {
            position: relative;
            pointer-events: none;
        }

        .loading::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 20px;
            height: 20px;
            margin: -10px 0 0 -10px;
            border: 2px solid #f3f3f3;
            border-top: 2px solid #3498db;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .loaded {
            opacity: 1;
        }

        /* Preloader styles */
        .preloader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            transition: opacity 0.5s ease;
        }

        .preloader.hidden {
            opacity: 0;
            pointer-events: none;
        }
    `;
  document.head.appendChild(style);
};

addLoadingStyles();

// Google Analytics preparation (add your tracking ID when ready)
const initializeAnalytics = () => {
  // This is where you would add Google Analytics code
  // window.gtag = window.gtag || function(){(gtag.q=gtag.q||[]).push(arguments);};
  // gtag('js', new Date());
  // gtag('config', 'GA_TRACKING_ID');
  console.log("Analytics ready for initialization");
};

// AdSense preparation
const prepareAdSense = () => {
  // This function prepares the page for AdSense
  // Ensure content is substantial and relevant
  console.log("Page prepared for AdSense integration");

  // Add meta tag for AdSense if not already present
  if (!document.querySelector('meta[name="google-adsense-account"]')) {
    const meta = document.createElement("meta");
    meta.name = "google-adsense-account";
    meta.content = "ca-pub-YOUR_PUBLISHER_ID"; // Replace with actual ID
    document.head.appendChild(meta);
  }
};

// Initialize everything when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  initializeAnalytics();
  prepareAdSense();
});

// Service Worker registration for better performance (optional)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/sw.js")
      .then(function (registration) {
        console.log("ServiceWorker registration successful");
      })
      .catch(function (err) {
        console.log("ServiceWorker registration failed");
      });
  });
}
