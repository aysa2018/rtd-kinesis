console.log("custom.js loaded");

// ===== SIDEBAR TOGGLE =====
document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".wy-nav-side");
  const content = document.querySelector(".wy-nav-content-wrap");

  const button = document.createElement("button");
  button.innerHTML = "☰";
  button.className = "menu-toggle";
  document.body.appendChild(button);

  button.addEventListener("click", () => {
    if (sidebar) sidebar.classList.toggle("active");
    if (content) content.classList.toggle("shifted");
  });
});

// ===== EQUIPMENT AUTO-GENERATION =====
function renderEquipmentCard(item) {
  return `
    <div class="equip-card">
      <div class="equip-title">
        ${item.name}
        <span class="arrow">▼</span>
      </div>

      <div class="equip-content">
        <p>${item.short_description || "No description available."}</p>

        <strong>Details</strong>
        <ul>
          <li><strong>Manufacturer:</strong> ${item.manufacturer || "N/A"}</li>
          <li><strong>Model:</strong> ${item.model || "N/A"}</li>
          <li><strong>Category:</strong> ${item.category || "N/A"}</li>
          <li><strong>Item Class:</strong> ${item.item_class || "N/A"}</li>
          <li><strong>Location:</strong> ${item.location || "N/A"}</li>
          <li><strong>Quantity:</strong> ${item.qty ?? "N/A"}</li>
          <li><strong>Training Required:</strong> ${item.training_required ? "Yes" : "No / Not listed"}</li>
          <li><strong>Risk Assessment:</strong> ${item.risk_assessment_required ? "Required" : "Not required"}</li>
        </ul>

        ${
          item.capabilities
            ? `
              <strong>Capabilities</strong>
              <ul>
                ${Object.entries(item.capabilities)
                  .map(([key, value]) => {
                    const label = key.replaceAll("_", " ");
                    if (Array.isArray(value)) {
                      return `<li><strong>${label}:</strong> ${value.join(", ")}</li>`;
                    }
                    return `<li><strong>${label}:</strong> ${value}</li>`;
                  })
                  .join("")}
              </ul>
            `
            : ""
        }

        ${
          item.availability_notes
            ? `<strong>Availability Notes</strong><p>${item.availability_notes}</p>`
            : ""
        }

        ${
          item.constraints && item.constraints.notes
            ? `<strong>Safety Notes</strong><p>${item.constraints.notes}</p>`
            : ""
        }
      </div>
    </div>
  `;
}

function getCurrentCategories() {
  const path = window.location.pathname.toLowerCase();

  if (path.includes("air")) return ["drone"];
  if (path.includes("land")) return ["robot"];
  if (path.includes("sensors")) return ["sensor", "scanner"];
  if (path.includes("networking")) return ["misc", "power"];
  if (path.includes("compute")) return ["compute"];
  if (path.includes("water")) return ["underwater"];

  return null;
}

function attachDropdowns() {
  document.querySelectorAll(".equip-card").forEach(card => {
    const title = card.querySelector(".equip-title");
    title.addEventListener("click", () => {
      card.classList.toggle("open");
    });
  });
}

document.addEventListener("DOMContentLoaded", async function () {
  const container = document.getElementById("equipment-container");
  console.log("equipment container:", container);

  if (!container) return;

  try {
    console.log("fetching equipment json...");
    const response = await fetch("/_static/data/equipment.json");
    console.log("json response:", response.status);

    const data = await response.json();
    const equipment = data.equipment || [];

    const categories = getCurrentCategories();
    const filtered = categories
      ? equipment.filter(item => categories.includes((item.category || "").toLowerCase()))
      : equipment;

    console.log("equipment count:", equipment.length);
    console.log("filtered count:", filtered.length);

    container.innerHTML = filtered.map(renderEquipmentCard).join("");
    attachDropdowns();
  } catch (error) {
    console.error("Equipment loading error:", error);
    container.innerHTML = "<p>Could not load equipment data.</p>";
  }
});