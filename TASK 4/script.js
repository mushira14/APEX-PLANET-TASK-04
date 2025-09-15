// Gallery Filter
function filterGallery(category) {
  let images = document.querySelectorAll(".gallery img");
  images.forEach(img => {
    if (category === "all" || img.classList.contains(category)) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
}

// Ideas Tracker
function addIdea() {
  let input = document.getElementById("ideaInput");
  let ideaList = document.getElementById("ideaList");

  if (input.value.trim() !== "") {
    let li = document.createElement("li");
    li.textContent = input.value;

    // Delete button
    let delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.onclick = function() {
      ideaList.removeChild(li);
      saveIdeas();
    };

    li.appendChild(delBtn);
    ideaList.appendChild(li);

    saveIdeas();
    input.value = "";
  }
}

function saveIdeas() {
  let items = [];
  document.querySelectorAll("#ideaList li").forEach(li => {
    items.push(li.firstChild.textContent);
  });
  localStorage.setItem("ideas", JSON.stringify(items));
}

function loadIdeas() {
  let items = JSON.parse(localStorage.getItem("ideas")) || [];
  let ideaList = document.getElementById("ideaList");
  items.forEach(idea => {
    let li = document.createElement("li");
    li.textContent = idea;

    let delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.onclick = function() {
      ideaList.removeChild(li);
      saveIdeas();
    };

    li.appendChild(delBtn);
    ideaList.appendChild(li);
  });
}

if (document.getElementById("ideaList")) {
  loadIdeas();
}

// Shop Sorting
function sortProducts() {
  let option = document.getElementById("sortOptions").value;
  let container = document.getElementById("productList");
  let products = Array.from(container.children);

  if (option === "price") {
    products.sort((a, b) => a.dataset.price - b.dataset.price);
  } else if (option === "rating") {
    products.sort((a, b) => b.dataset.rating - a.dataset.rating);
  }

  container.innerHTML = "";
  products.forEach(p => container.appendChild(p));
}

// Contact Form Validation
if (document.getElementById("contactForm")) {
  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message sent successfully!");
  });
}
