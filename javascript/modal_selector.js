  const modal = document.getElementById("modal");

  document.querySelectorAll(".modal-trigger").forEach(card => {
    card.addEventListener("click", () => {
      
      // grab content from inside the card
      const img = card.querySelector("img").src;
      const title = card.querySelector("h3").textContent;
      const date = card.querySelector("h1").textContent;
      const subtitle = card.querySelector("li").textContent;
      const desc = card.querySelector(".project_text")?.textContent || "";

      // inject into modal
      document.getElementById("modalImg").src = img;
      document.getElementById("modalTitle").textContent = title;
      document.getElementById("modalDate").textContent = date;
      document.getElementById("modalSubtitle").textContent = subtitle;
      document.getElementById("modalDesc").textContent = desc;

      modal.classList.remove("hidden");
      modal.classList.add("flex");
    });
  });

  // close logic (same as before)
  document.getElementById("closeModal").addEventListener("click", () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }
  });