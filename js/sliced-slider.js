document.addEventListener('DOMContentLoaded', function () {
    const leftBtn = document.querySelector('.left-part-button');
    const rightBtn = document.querySelector('.right-part-button');
    const images = document.querySelectorAll('.slide-image');

    const btnWidth = rightBtn.offsetWidth;
    const btnHeight = rightBtn.offsetHeight

    const leftSide = document.querySelector('.left-side')
    const rightSide = document.querySelector('.right-side')
    

    let leftIndex = 0
 
    rightBtn.addEventListener('click', function () {

        if (leftIndex >= 7) {
            leftIndex = -1;
        }
        leftIndex += 1
        images.forEach((item, index) => {
            item.querySelectorAll('.slide-image-part').forEach((el) => {
                el.style.left = `${-500 * leftIndex}px`;
            });
        });
    });


    leftBtn.addEventListener('click', function () {
        // Проверяем, чтобы leftIndex не становился отрицательным
        if (leftIndex > 0) {
            leftIndex -= 1;
        }

        images.forEach((item, index) => {
            item.querySelectorAll('.slide-image-part').forEach((el) => {
                el.style.left = `${-500 * leftIndex}px`;
            });
        });
    });

    leftSide.addEventListener('mouseenter', function(e) {
        leftBtn.style.left = `${e.clientX - btnWidth / 2}px`
        leftBtn.style.top = `${e.clientY - btnHeight / 2}px`
    })

    leftSide.addEventListener('mousemove', function(e) {
        leftBtn.style.left = `${e.clientX - btnWidth / 2}px`
        leftBtn.style.top = `${e.clientY - btnHeight / 2}px`
    })

    leftSide.addEventListener('mouseleave', function(e) {
        leftBtn.style.left = `${e.clientX - btnWidth / 2}px`
        leftBtn.style.top = `${e.clientY - btnHeight / 2}px`
    })

    rightSide.addEventListener('mouseenter', function(e) {
        rightBtn.style.left = `${e.clientX - btnWidth / 2}px`
        rightBtn.style.top = `${e.clientY - btnHeight / 2}px`
    })

    rightSide.addEventListener('mousemove', function(e) {
        rightBtn.style.left = `${e.clientX - btnWidth / 2 }px`
        rightBtn.style.top = `${e.clientY - btnHeight / 2}px`
    })

    rightSide.addEventListener('mouseleave', function(e) {
        rightBtn.style.left = `${e.clientX - btnWidth / 2}px`
        rightBtn.style.top = `${e.clientY - btnHeight / 2}px`
    })


    rightSide.addEventListener('touchstart', function(e) {
        e.preventDefault()
    })

    rightSide.addEventListener('touchmove', function(e) {
        e.preventDefault()
    })

    rightSide.addEventListener('touchend', function(e) {
        e.preventDefault()
    })

    rightSide.addEventListener('touchcancel', function(e) {
        e.preventDefault()
    })

    leftSide.addEventListener('touchstart', function(e) {
        e.preventDefault()
    })

    leftSide.addEventListener('touchmove', function(e) {
        e.preventDefault()
    })

    leftSide.addEventListener('touchend', function(e) {
        e.preventDefault()
    })

    leftSide.addEventListener('touchcancel', function(e) {
        e.preventDefault()
    })
});
