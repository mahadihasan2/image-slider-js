const images = [
    'image/image-01.jpg',
    'image/image-02.jpg',
    'image/image-03.jpg',
    'image/image-04.jpg',
    'image/image-05.jpg',
    'image/image-06.jpg',
    'image/image-07.jpg',
    'image/image-08.jpg',
    'image/image-09.jpg'
];
let imageid = 0;
const imageElement = document.getElementById('img-src')
setInterval(() => {
    if (imageid >= images.length) {
        imageid = 0;
    }
    const imgurl = images[imageid]
    imageElement.setAttribute('src', imgurl)
    imageid++;

}, 1000)