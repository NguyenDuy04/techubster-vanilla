document.addEventListener("DOMContentLoaded", () => {
    addtopnav();
})

function addtopnav() {
    const navHTML = `
    <ul class="navtop__list">
        <li class="navtop__items">
            <a href="/pages/storelocation.html">
                <i class="fa-solid fa-map-location-dot"></i>
                <span>
                    Store Location
                </span>
            </a>
        </li>
        <li class="navtop__items">
            <i class="fa-solid fa-download"></i>
            <span>
                App Download
            </span>
        </li>
        <li class="navtop__items-socials">
            <span>
                Connects
            </span>
            <div class="navtop__items-other">
                <a href="mailto:duynguyenvan.1506@gmail.com" class="fa-solid fa-envelope"></a>
                <a href="https://www.facebook.com/duypinky.trc/" class="fa-brands fa-facebook"></a>
                <a href="https://www.instagram.com/silentisolate_duy/" class="fa-brands fa-instagram"></a>
            </div>
        </li>
    </ul>
    <ul class="navtop__list">
        <li class="navtop__items">
            <a href="/pages/trackyourorder.html">
                <i class="fa-solid fa-truck-fast"></i>
                <span>
                    Track Your Order
                </span>
            </a>
        </li>
        <li class="navtop__items">
            <a href="/pages/warranty.html">
                <i class="fa-solid fa-wrench"></i>
                <span>
                    Warranty
                </span>
            </a>
        </li>
        <li class="navtop__items">
            <a href="/pages/help.html">
                <i class="fa-solid fa-circle-question"></i>
                <span>
                    Help
                </span>
            </a>
        </li>
    </ul>`;

    document.getElementById("navtop").innerHTML = navHTML;
}