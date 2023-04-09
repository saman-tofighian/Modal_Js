const Modal = document.getElementsByClassName('modal-container')[0]

const openBtn = document.getElementById('openModal')

const closeModal = document.getElementsByClassName('closeBtn')[0]

openBtn.addEventListener('click' , ()=>{
    Modal.style.display = 'block'
})

closeModal.addEventListener('click' , ()=>{
    Modal.style.display = 'none'
})

window.addEventListener('click' , (e) =>{
    if(e.target == Modal)
    {
        Modal.style.display = 'none'
    }
})