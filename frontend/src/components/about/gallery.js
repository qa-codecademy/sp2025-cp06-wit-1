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
        img.dataset.index = i - 1;

        img.addEventListener("click", (e) => {
            currentIndex = parseInt(e.target.dataset.index);
            showPopup(currentIndex);
        });

        container.appendChild(img);
    }

    function showPopup(index) {
        selectedImg.src = `src/assets/gallery-images/img${index + 1}.jpg`;
        selectedImg.alt = `Image ${index + 1}`;
        popup.style.transform = "translateY(0)";
        document.body.style.overflow = "hidden";

        document.querySelector(".navbar").style.zIndex = "-1";
        document.querySelectorAll("footer a").forEach(el => {
            el.style.position = "relative";
            el.style.zIndex = "-1";
        });
        document.querySelector(".vision-text").style.zIndex = "-10";

        document.addEventListener("keydown", handleKeyDown);
    }

    function closePopup() {
        popup.style.transform = "translateY(-100%)";
        selectedImg.src = "";
        selectedImg.alt = "";
        document.body.style.overflow = "";

        document.querySelector(".navbar").style.zIndex = "";
        document.querySelectorAll("footer a").forEach(el => {
            el.style.zIndex = "";
        });
        document.querySelector(".vision-text").style.zIndex = "";

        document.removeEventListener("keydown", handleKeyDown);
    }

    function handleKeyDown(e) {
        switch (e.key) {
            case "Escape":
                closePopup();
                break;
            case "ArrowLeft":
                currentIndex = (currentIndex - 1 + totalImages) % totalImages;
                showPopup(currentIndex);
                break;
            case "ArrowRight":
                currentIndex = (currentIndex + 1) % totalImages;
                showPopup(currentIndex);
                break;
            case "Home":
                currentIndex = 0;
                showPopup(currentIndex);
                break;
            case "End":
                currentIndex = totalImages - 1;
                showPopup(currentIndex);
                break;
        }
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
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showPopup(currentIndex);
    });

    nextBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % totalImages;
        showPopup(currentIndex);
    });

    // --- Touch Swipe Support (Portrait & Landscape) ---
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    selectedImg.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, false);

    selectedImg.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        handleSwipeGesture();
    }, false);

    function handleSwipeGesture() {
        const threshold = 50;
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            // Horizontal swipe
            if (Math.abs(deltaX) > threshold) {
                if (deltaX < 0) {
                    currentIndex = (currentIndex + 1) % totalImages;
                } else {
                    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
                }
                showPopup(currentIndex);
            }
        } else {
            // Vertical swipe → close popup
            if (Math.abs(deltaY) > threshold) {
                closePopup();
            }
        }
    }
}

export { Gallery, renderGallery };