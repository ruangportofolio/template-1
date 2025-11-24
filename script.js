// Tahun otomatis di footer
document.getElementById("year").textContent = new Date().getFullYear();

// Log dasar
console.log("Website Portofolio Guru - Loaded");

// Efek hover kecil (opsional)
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
    });
    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = "none";
    });
});
