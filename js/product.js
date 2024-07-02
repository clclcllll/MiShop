document.addEventListener("DOMContentLoaded", () => {
    const productImage = document.getElementById("productImage");
    const previewContainer = document.getElementById("previewContainer");

    productImage.addEventListener("mouseenter", () => {
        previewContainer.style.display = "block";
    });

    productImage.addEventListener("mouseleave", () => {
        previewContainer.style.display = "none";
    });

    productImage.addEventListener("mousemove", (event) => {
        const rect = productImage.getBoundingClientRect();
        previewContainer.style.left = `${rect.right + 200}px`;
        previewContainer.style.top = `${rect.top-100}px`;
    });
});
