async function fetchKontrakData() {
    const response = await fetch("/dashboard");
    const data = await response.json();
    const tbody = document.getElementById("kontrak-data");

    data.forEach((kontrak) => {
      const row = document.createElement("tr");
      Object.values(kontrak).forEach((text) => {
        const cell = document.createElement("td");
        cell.textContent = text;
        row.appendChild(cell);
      });
      tbody.appendChild(row);
    });
  }

  window.onload = fetchKontrakData;