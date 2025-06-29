// Products data with images
const products = [
  {
    id: 1,
    name: "Maize (White)",
    category: "cereals",
    price: "KSh 50/kg",
    description: "Premium quality white maize, perfect for ugali and porridge. Sourced directly from local farmers.",
    availability: "available",
    image: "/home/stephen/Desktop/PROJECTS/Acocie Cereals Stores/images/white_maize.jpeg",
  },
  {
    id: 2,
    name: "Yellow Maize",
    category: "cereals",
    price: "KSh 80/kg",
    description: "Nutritious yellow maize rich in vitamins and minerals. Ideal for animal feed and human consumption.",
    availability: "available",
    image: "/home/stephen/Desktop/PROJECTS/Acocie Cereals Stores/images/yellow_maize.jpeg",
  },
  {
    id: 3,
    name: "Pishori Rice",
    category: "rice",
    price: "KSh 220/kg",
    description: "Aromatic Kenyan pishori rice, premium quality. Known for its unique fragrance and taste.",
    availability: "available",
    image: "/home/stephen/Desktop/PROJECTS/Acocie Cereals Stores/images/pishori_ rice.jpeg",
  },
  {
    id: 4,
    name: "Basmati Rice",
    category: "rice",
    price: "KSh 230/kg",
    description: "Long grain basmati rice, perfect for biryani and special occasions. Imported quality.",
    availability: "available",
    image: "/placeholder.svg?height=200&width=300&text=Basmati+Rice",
  },
  // {
  //   id: 5,
  //   name: "Biryani Rice",
  //   category: "rice",
  //   price: "KSh 160/kg",
  //   description: "Special biryani rice for authentic taste. Medium grain rice perfect for Indian cuisine.",
  //   availability: "limited",
  //   image: "/placeholder.svg?height=200&width=300&text=Biryani+Rice",
  // },
  {
    id: 6,
    name: "Rosecoco Beans",
    category: "beans",
    price: "KSh 200/kg",
    description: "High-quality rosecoco beans, rich in protein and fiber. Popular Kenyan variety.",
    availability: "available",
    image: "/placeholder.svg?height=200&width=300&text=Rosecoco+Beans",
  },
  // {
  //   id: 7,
  //   name: "Soya Beans",
  //   category: "beans",
  //   price: "KSh 90/kg",
  //   description: "Nutritious soya beans, excellent protein source. Great for making soy milk and other products.",
  //   availability: "available",
  //   image: "/placeholder.svg?height=200&width=300&text=Soya+Beans",
  // },
  // {
  //   id: 8,
  //   name: "Simsim (Sesame)",
  //   category: "cereals",
  //   price: "KSh 200/kg",
  //   description: "Premium sesame seeds for cooking and oil extraction. Rich in healthy fats and minerals.",
  //   availability: "available",
  //   image: "/placeholder.svg?height=200&width=300&text=Sesame+Seeds",
  // },
  {
    id: 9,
    name: "Millet",
    category: "cereals",
    price: "KSh 120/kg",
    description: "Traditional millet grain, highly nutritious and drought-resistant. Perfect for porridge.",
    availability: "available",
    image: "/placeholder.svg?height=200&width=300&text=Millet",
  },
  {
    id: 10,
    name: "Sorghum",
    category: "cereals",
    price: "KSh 75/kg",
    description: "Drought-resistant sorghum grain, rich in antioxidants and gluten-free.",
    availability: "available",
    image: "/placeholder.svg?height=200&width=300&text=Sorghum",
  },
  {
    id: 11,
    name: "Pawa Porridge Flour",
    category: "cereals",
    price: "KSh 250/kg",
    description: "Ready-to-cook porridge flour blend made from various nutritious grains.",
    availability: "available",
    image: "/placeholder.svg?height=200&width=300&text=Porridge+Flour",
  },
]

// DOM elements
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
const tabButtons = document.querySelectorAll(".tab-btn")
const productsGrid = document.getElementById("products-grid")
const contactForm = document.getElementById("contact-form")
const searchInput = document.getElementById("search-input")

// Mobile menu toggle
if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
  })

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active")
      navMenu.classList.remove("active")
    })
  })
}

// Product display function
function displayProducts(productsToShow) {
  if (!productsGrid) return

  productsGrid.innerHTML = ""

  if (productsToShow.length === 0) {
    productsGrid.innerHTML =
      '<p style="text-align: center; grid-column: 1/-1; font-size: 1.2rem; color: var(--text-light);">No products found matching your search.</p>'
    return
  }

  productsToShow.forEach((product) => {
    const productCard = document.createElement("div")
    productCard.className = "product-card fade-in"
    productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div style="display: none; width: 100%; height: 100%; align-items: center; justify-content: center; background: var(--light-gold); color: var(--dark-gold); font-weight: bold;">
                    ${product.name}
                </div>
            </div>
            <div class="product-content">
                <h3>${product.name}</h3>
                <div class="category">${product.category.replace("_", " & ")}</div>
                <div class="price">${product.price}</div>
                <div class="description">${product.description}</div>
                <div class="availability ${product.availability}">
                    ${product.availability === "available" ? "✅ In Stock" : "⚠️ Limited Stock"}
                </div>
            </div>
        `
    productsGrid.appendChild(productCard)
  })

  // Trigger animation
  setTimeout(() => {
    document.querySelectorAll(".product-card.fade-in").forEach((card) => {
      card.classList.add("visible")
    })
  }, 100)
}

// Product filtering
function filterProducts(category) {
  let filteredProducts
  if (category === "all") {
    filteredProducts = products
  } else {
    filteredProducts = products.filter((product) => product.category === category)
  }
  displayProducts(filteredProducts)
}

// Search functionality
function searchProducts(searchTerm) {
  const lowerCaseSearchTerm = searchTerm.toLowerCase()
  const searchedProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowerCaseSearchTerm) ||
      product.description.toLowerCase().includes(lowerCaseSearchTerm) ||
      product.category.toLowerCase().includes(lowerCaseSearchTerm),
  )
  displayProducts(searchedProducts)
}

// Tab functionality
tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    tabButtons.forEach((btn) => btn.classList.remove("active"))
    // Add active class to clicked button
    button.classList.add("active")

    const category = button.getAttribute("data-category")
    filterProducts(category)

    // Clear search input when switching tabs
    if (searchInput) {
      searchInput.value = ""
    }
  })
})

// Search input functionality
if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value
    if (searchTerm.trim() === "") {
      // If search is empty, show products based on active tab
      const activeTab = document.querySelector(".tab-btn.active")
      const category = activeTab ? activeTab.getAttribute("data-category") : "all"
      filterProducts(category)
    } else {
      searchProducts(searchTerm)
    }
  })
}

// Contact form handling
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const formData = new FormData(contactForm)
    const name = formData.get("name")
    const email = formData.get("email")
    const phone = formData.get("phone")
    const inquiryType = formData.get("inquiry-type")
    const message = formData.get("message")

    // Create mailto link
    const subject = encodeURIComponent(
      `${inquiryType ? inquiryType.charAt(0).toUpperCase() + inquiryType.slice(1) + " - " : ""}Inquiry from ${name}`,
    )
    const body = encodeURIComponent(`
Name: ${name}
Email: ${email}
Phone: ${phone}
Inquiry Type: ${inquiryType}

Message:
${message}

---
Sent from Acocie Cereals Stores website
        `)

    const mailtoLink = `mailto:asaomondi91@gmail.com?subject=${subject}&body=${body}`

    // Open email client
    window.location.href = mailtoLink

    // Show success message
    alert("Thank you for your message! Your email client will open to send the message.")

    // Reset form
    contactForm.reset()
  })
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const headerHeight = document.querySelector(".header").offsetHeight
      const targetPosition = target.offsetTop - headerHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (header) {
    if (window.scrollY > 100) {
      header.style.background = "rgba(44, 44, 44, 0.95)"
      header.style.backdropFilter = "blur(10px)"
    } else {
      header.style.background = "linear-gradient(135deg, var(--dark-bg) 0%, #1a1a1a 100%)"
      header.style.backdropFilter = "none"
    }
  }
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  // Initialize products display
  displayProducts(products)

  // Set up animations
  document.querySelectorAll(".feature, .service-card, .contact-item").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
})

// Phone number formatting
const phoneInput = document.getElementById("phone")
if (phoneInput) {
  phoneInput.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "")
    if (value.startsWith("254")) {
      value = "+" + value
    } else if (value.startsWith("0")) {
      value = "+254" + value.substring(1)
    }
    e.target.value = value
  })
}

// Add click-to-call functionality for desktop
document.querySelectorAll('a[href^="tel:"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    if (!("ontouchstart" in window)) {
      e.preventDefault()
      const phoneNumber = link.textContent
      if (confirm(`Call ${phoneNumber}?`)) {
        // For desktop, you might want to integrate with a service like Skype
        alert(`Please call: ${phoneNumber}`)
      }
    }
  })
})

// Utility functions
function updatePrice(productId, newPrice) {
  const product = products.find((p) => p.id === productId)
  if (product) {
    product.price = newPrice
    // Re-display products with current filter
    const activeTab = document.querySelector(".tab-btn.active")
    const category = activeTab ? activeTab.getAttribute("data-category") : "all"
    filterProducts(category)
  }
}

function updateAvailability(productId, availability) {
  const product = products.find((p) => p.id === productId)
  if (product) {
    product.availability = availability
    // Re-display products with current filter
    const activeTab = document.querySelector(".tab-btn.active")
    const category = activeTab ? activeTab.getAttribute("data-category") : "all"
    filterProducts(category)
  }
}

// Export functions for potential future use
window.AcocieStore = {
  updatePrice,
  updateAvailability,
  searchProducts,
  filterProducts,
  products,
}

// Add loading states
function showLoading(element) {
  const originalContent = element.innerHTML
  element.innerHTML = '<span class="loading"></span> Loading...'
  element.disabled = true

  return () => {
    element.innerHTML = originalContent
    element.disabled = false
  }
}

// Error handling for images
document.addEventListener("DOMContentLoaded", () => {
  // Handle image loading errors
  document.addEventListener(
    "error",
    (e) => {
      if (e.target.tagName === "IMG") {
        e.target.style.display = "none"
        const fallback = e.target.nextElementSibling
        if (fallback) {
          fallback.style.display = "flex"
        }
      }
    },
    true,
  )
})

// Performance optimization: Lazy load images
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src || img.src
        img.classList.remove("lazy")
        imageObserver.unobserve(img)
      }
    })
  })

  // This would be used if we had lazy loading images
  document.querySelectorAll("img[data-src]").forEach((img) => {
    imageObserver.observe(img)
  })
}
