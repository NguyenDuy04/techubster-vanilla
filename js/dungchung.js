document.addEventListener("DOMContentLoaded", () => {
    addtopnav();
    addheader();
})

function addtopnav() {
    const navHTML = `
    <ul class="navtop__list flex">
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
    <ul class="navtop__list flex">
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

function addheader() {
    const headerHTML = `
    <div class="header__logo">
        <a href="/index.html" class="header__logo-link flex-center">
            <img src="/assets/image/logo/logo-removebg-preview.png" alt="Home">
            <span>Techubster</span>
        </a>
    </div>
    <div class="header__category">
        <div class="header__category-text flex-center">
            <i class="fa-solid fa-bars"></i>
            <span>
                Categories
            </span>
        </div>
    </div>
    <div class="header__search flex-between">
        <div class="header__search-wrapper">
            <input class="flex" type="text" placeholder="Search For Products..." name="Search"
                autocomplete="off">
            <button class="search__btn">
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
    </div>
    <div class="header__tool">
        <div class="header__notify">
            <button class="header__tool-icon header__notify-icon">
                <i class="fa-solid fa-bell"></i>
            </button>
        </div>
        <div class="header__cart flex-center">
            <button class="header__tool-icon header__cart-icon">
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
        <div class="header__user">
            <button class="header__tool-icon header__user-icon">
                <i class="fa-solid fa-user"></i>
            </button>
        </div>
    </div>`;

    document.getElementById("header").innerHTML = headerHTML;
}