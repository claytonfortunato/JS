const url = "https://www.google.com";
const btn = document.querySelector("#btn");
const bottom = document.querySelector("#refresh");

function openInNewTAB(url) {
    const win = window.open(url, '_blank')
    win.focus()
}

btn.addEventListener("click", () => {
    openInNewTAB(url)
});

bottom.addEventListener("click", () => {
    location.reload();
})