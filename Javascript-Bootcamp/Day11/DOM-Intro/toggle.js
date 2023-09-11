const dropdown = document.querySelector('#drop-down');

function toggleDropDown(dropdown)
{
    dropdown.classList.toggle('Hide');
}

setInterval(toggleDropDown, 1000);

