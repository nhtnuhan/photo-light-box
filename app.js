const imagesbox = document.querySelectorAll('.image')
const popupclose = document.querySelector('.popupbackground')
const popupboximg = document.querySelector('.popupbox img')
const popup = document.querySelector('.popup')

//   console.log(popup);


 imagesbox.forEach((img,index) => {
        img.addEventListener("click" , (event) => {
            popup.classList.add('powerOfDom')
            popupboximg.setAttribute("src" ,event.target.src)
            console.log(event.target.src);

        })

    })

    popupclose.addEventListener("click", (e) => {
        
        popup.classList.remove("powerOfDom")
        e.stopPropagation()

    })





// images.forEach((image, index) => {
//     image.addEventListener('click', (e) => {
//         popup.classList.add('activePopup')
//         backdrop.classList.add('active')

//         popupImg.setAttribute('src', e.target.src)
//     })
// })