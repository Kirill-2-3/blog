const body = document.body;
const sidebar = document.getElementById("sidebar");
const header = document.getElementById("header");
const burger = document.getElementById("burger");

const subnavHas = document.querySelectorAll("[data-subnav]");
const subnavHasLinks = document.querySelectorAll("[data-subnav-links]");

subnavHas.forEach( (item) => {
    item.addEventListener("mouseover", () => {
        let selectSubnav = item.querySelector(".subnav");

        selectSubnav.style.display = "block";

        setTimeout( () => {
            selectSubnav.style.opacity = "1";
        }, 0);
    });

    item.addEventListener("mouseleave", () => {
        let selectSubnav = item.querySelector(".subnav");

        selectSubnav.style.opacity = "0";

        setTimeout( () => {
            selectSubnav.style.display = "none";
        }, 200);
    });
})

subnavHasLinks.forEach( (item) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();

        let nextSibling = item.nextElementSibling;

        item.classList.toggle('active');

        let hasClass = item.classList.contains("active");

        if (!hasClass) {

            nextSibling.style.opacity = "0";

            setTimeout( () => {
                nextSibling.style.display = "none";
            }, 100);

        } else {
            nextSibling.style.display = "block";

            setTimeout( () => {
                nextSibling.style.opacity = "1";
            }, 0);
        }

    });
});
const modal = document.querySelectorAll("[data-modal]");
const modalBtn = document.querySelectorAll("[data-modal-btn]");
const modalCancel = document.querySelectorAll("[data-modal-cancel]");

modalBtn.forEach( (item) => {
    item.addEventListener("click", e => {
        e.preventDefault();

        let getAttrModal = item.getAttribute("data-modal-btn");
        let getModal = document.getElementById(getAttrModal);
        let getContentModal = getModal.firstElementChild;

        getContentModal.addEventListener("click", e => {
            e.stopPropagation();
        });

        getModal.classList.add("show");

        body.classList.add("not-scroll");

        setTimeout( () => {
            getModal.style.opacity = "1";
        }, 0)
    });
});

modalCancel.forEach( (item) => {
    item.addEventListener("click", e => {
        e.preventDefault();

        let getModal = item.closest(".modal");

        delModal(getModal);
    });
});

modal.forEach( (item) => {
    item.addEventListener("click", e => {
        delModal(item);
    });
});

function delModal(item) {
    item.style.opacity = "0";

    setTimeout( () => {
        item.classList.remove("show");
        body.classList.remove("not-scroll");
    }, 200)
}
burger.addEventListener("click", () => {
    body.classList.toggle("show-sidebar");

    sidebar.addEventListener("click", e => {
        e.stopPropagation();
    });

    header.addEventListener("click", e => {
        e.stopPropagation();
    });

    body.addEventListener("click", () => {
        if (body.classList.contains("show-sidebar")) {
            body.classList.toggle("show-sidebar");
        }
    });

});
const textResize = document.querySelectorAll("[data-text-resize]");

textResize.forEach( item => {

    item.addEventListener("input", () => {
        item.style.height = item.getAttribute("data-text-resize") + 'px';
        item.style.height = item.scrollHeight + "px";
    });

});