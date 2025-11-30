const corridors = [
  { route: "Tashkent → Almaty", loads: 18, avgRate: 950 },
  { route: "Tashkent → Moscow", loads: 9, avgRate: 2100 },
  { route: "Samarkand → Bishkek", loads: 7, avgRate: 780 },
  { route: "Navoi → Astana", loads: 5, avgRate: 1100 },
];

const loads = [
  { from: "Tashkent", to: "Almaty", cargo: "Fruits", rate: 950 },
  { from: "Tashkent", to: "Moscow", cargo: "Textiles", rate: 2100 },
  { from: "Samarkand", to: "Bishkek", cargo: "Electronics", rate: 780 },
  { from: "Navoi", to: "Astana", cargo: "Building materials", rate: 1150 },
];

const trucks = [
  { driver: "Akmal", truck: "Euro-5 Tent 20t", location: "Tashkent", capacity: 20, status: "Available" },
  { driver: "Sergey", truck: "Reefer 18t", location: "Shymkent", capacity: 18, status: "On route" },
  { driver: "Jasur", truck: "Flatbed 22t", location: "Samarkand", capacity: 22, status: "Available" },
  { driver: "Aruzhan", truck: "Van 5t", location: "Almaty", capacity: 5, status: "Available soon" },
];

function renderCorridors() {
  const ul = document.getElementById("corridor-list");
  if (!ul) return;
  corridors.forEach(c => {
    const li = document.createElement("li");
    li.textContent = `${c.route} — ${c.loads} active loads · avg $${c.avgRate}`;
    ul.appendChild(li);
  });
}

function renderTables() {
  const loadBody = document.getElementById("load-table-body");
  const truckBody = document.getElementById("truck-table-body");
  if (!loadBody || !truckBody) return;

  loads.forEach(l => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${l.from}</td>
      <td>${l.to}</td>
      <td>${l.cargo}</td>
      <td>$${l.rate}</td>
      <td><button class="btn secondary btn-sm">Request</button></td>
    `;
    loadBody.appendChild(tr);
  });

  trucks.forEach(t => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${t.driver}</td>
      <td>${t.truck}</td>
      <td>${t.location}</td>
      <td>${t.capacity}</td>
      <td>${t.status}</td>
    `;
    truckBody.appendChild(tr);
  });
}

function handleContactSubmit(e) {
  e.preventDefault();
  const status = document.getElementById("contact-status");
  status.textContent = "Thank you! We’ll contact you soon with RoYo platform details.";
  e.target.reset();
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCorridors();
  renderTables();
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

