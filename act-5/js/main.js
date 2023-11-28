
document.addEventListener("DOMContentLoaded", function () {
    const containerTemplate = document.getElementById("container-template");
    const containerInstance = document.importNode(
        containerTemplate.content,
        true
    );

    const headerTemplate = document
        .getElementById("header-template")
        .content.cloneNode(true);
    const listTemplate = document
        .getElementById("list-template")
        .content.cloneNode(true);
    const formTemplate = document
        .getElementById("form-template")
        .content.cloneNode(true);

    containerInstance
        .querySelector('[name="header"]')
        .appendChild(headerTemplate);
    containerInstance
        .querySelector('[name="sidebar"]')
        .appendChild(listTemplate);
    containerInstance
        .querySelector('[name="main"]')
        .appendChild(formTemplate);

    document.body.appendChild(containerInstance);
});
