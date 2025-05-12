const searchBox = document.getElementById("searchBox");
    const tableRows = document.querySelectorAll("#serviceTable tr");

    searchBox.addEventListener("keyup", () => {
      const searchTerm = searchBox.value.toLowerCase();
      tableRows.forEach(row => {
        const service = row.cells[1].textContent.toLowerCase();
        row.style.display = service.includes(searchTerm) ? "" : "none";
      });
    });