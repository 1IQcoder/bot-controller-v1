const lwButtons = document.querySelectorAll('.lwtmLeftDiv>div')
const lwBodyDiv = document.querySelectorAll('.lwBody>div')


// Открытие окон в левом окне
if (lwButtons) {
    lwButtons.forEach(e => {
        e.addEventListener('click', event => {
            lwBodyDiv.forEach(e => {
                e.classList.remove('_active')
            });

            const data = event.currentTarget.dataset.open;
            const openPanel = document.querySelector(data)

            openPanel.classList.toggle('_active')
        })
    });
}

















































































