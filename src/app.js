const places = [
  { name: "Світ кави", category: "cafe" },
  { name: "Baczewski", category: "restaurant" },
  { name: "Львівські пляцки", category: "bakery" },
  { name: "Чорноморка", category: "restaurant" },
  { name: "Вірменка", category: "cafe" },
];

const listEl = document.getElementById("list");
const searchEl = document.getElementById("search");
const categoryEl = document.getElementById("category");

function render(items) {
  listEl.innerHTML = "";
  items.forEach(p => {
    const li = document.createElement("li");
    li.className = "item";
    li.innerHTML = `<strong>${p.name}</strong><div class="badge">${p.category}</div>`;
    listEl.appendChild(li);
  });
}

function applyFilters() {
  const q = searchEl.value.trim().toLowerCase();
  const cat = categoryEl.value;

  const filtered = places.filter(p => {
    const matchName = p.name.toLowerCase().includes(q);
    const matchCat = cat === "all" ? true : p.category === cat;
    return matchName && matchCat;
  });

  render(filtered);
}

searchEl.addEventListener("input", applyFilters);
categoryEl.addEventListener("change", applyFilters);

render(places);

console.log("CONFLICT B");
