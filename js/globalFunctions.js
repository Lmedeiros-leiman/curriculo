function Hide(element) {
    if (element.getAttribute("visibility") !== "visible") { return false }
    element.setAttribute("visibility", "hidden")

    element.style.display = "hidden";

}
function Show(element, style = "block") {
    if (element.getAttribute("visibility") !== "hidden") { return false }
    element.setAttribute("visibility", "visible")

    element.style.display = style;

}