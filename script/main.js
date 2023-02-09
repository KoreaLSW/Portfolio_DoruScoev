const scrollText = document.querySelector('.scroll_text');
const menuIcon = document.querySelector('.menu_icon');
const menuBar = document.querySelector('.menu_bar');
const menuBarBtn = document.querySelector('.menu_bar_btn');

const fourth = document.querySelectorAll('.fourth_list_img_on');
let footerImgType = false;
let fourthOpacity = 1;

setInterval(footerImageShowAndHide, 80);

function footerImageShowAndHide() {
    if (footerImgType === false) {
        fourthOpacity = fourthOpacity - 0.1;
    } else {
        fourthOpacity = fourthOpacity + 0.1;
    }
    fourth.forEach((value) => {
        value.style.opacity = fourthOpacity;
    });

    if (fourthOpacity < 0) {
        footerImgType = true;
    } else if (fourthOpacity > 1) {
        footerImgType = false;
    }
}

window.addEventListener('scroll', (e) => {
    const scrollPercent = Math.floor(
        (window.scrollY / (document.body.clientHeight - window.innerHeight)) *
            100
    );

    scrollText.innerText = `${scrollPercent}%`;
});

menuIcon.addEventListener('click', (e) => {
    menuIcon.style.display = 'none';
    menuBar.style.right = '0';
});

menuBarBtn.addEventListener('click', (e) => {
    console.log(e);
    menuIcon.style.display = 'block';
    menuBar.style.right = '-100%';
});
