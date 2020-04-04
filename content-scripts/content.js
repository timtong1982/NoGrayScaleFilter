const html = document.querySelector("html");
const css = window.getComputedStyle(html);
console.log(css.filter);

if (!!css.filter && css.filter.toLowerCase().indexOf('grayscale') > -1) {
    html.style.filter = 'grayscale(0%)';
}
