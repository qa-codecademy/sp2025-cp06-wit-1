const Gallery = () => {
    return `
    <div class="galleryContainer">
        <div class="gallery">
        </div>
    </div>
    <div id="popup" style="transform: translateY(-100%); transition: transform 0.3s ease;">
        <button id="closeBtn"><i class="bi bi-x-lg"></i></button>
        <button id="prevBtn"><i class="bi bi-caret-left-fill"></i></button>
        <img src="" alt="" id="selectedImg">
        <button id="nextBtn"><i class="bi bi-caret-right-fill"></i></button>
    </div>
    `;
}

function renderGallery() {
    const container = document.querySelector(".gallery");
    const popup = document.getElementById("popup");
    const selectedImg = document.getElementById("selectedImg");
    const closeBtn = document.getElementById("closeBtn");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    const totalImages = 15;
    let currentIndex = 0;

    container.innerHTML = "";

    for (let i = 1; i <= totalImages; i++) {
        const img = document.createElement("img");
        img.src = `src/assets/gallery-images/img${i}.jpg`;
        img.alt = `Image ${i}`;
        img.className = "gallery-image";

        // Store image index using a closure
        img.addEventListener("click", (() => {
            const index = i;
            return () => {
                currentIndex = index;
                showPopup(currentIndex);
            };
        })());

        container.appendChild(img);
    }

    function showPopup(index) {
        selectedImg.src = `src/assets/gallery-images/img${index}.jpg`;
        selectedImg.alt = `Image ${index}`;
        popup.style.transform = "translateY(0)";
        document.body.style.overflow = 'hidden';
    }

    function closePopup() {
        popup.style.transform = "translateY(-100%)";
        selectedImg.src = "";
        selectedImg.alt = "";
        document.body.style.overflow = '';
    }

    closeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        closePopup();
    });

    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
            closePopup();
        }
    });

    prevBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        currentIndex = currentIndex - 1;
        if (currentIndex < 1) currentIndex = totalImages;
        showPopup(currentIndex);
    });

    nextBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        currentIndex = currentIndex + 1;
        if (currentIndex > totalImages) currentIndex = 1;
        showPopup(currentIndex);
    });
}

export { Gallery, renderGallery };