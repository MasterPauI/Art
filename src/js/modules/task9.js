//
// const blokByImg = (clasSelector, imgDisplayBlok, imgDisplayNone) =>{
//
//     const blocki = document.querySelector(clasSelector).parentElement;
//
//     loadEvent();
//
//     function loadEvent() {
//             blocki.addEventListener('mouseover', runImg);
//             blocki.addEventListener('mouseout', closeImg);
//     }
//
//     function runImg() {
//
//         blocki.forEach(function (clasSize) {
//         clasSize.src = imgDisplayBlok;
//         clasSize.getElementsByTagName('p').style.display ='none';
//         });
//     }
//
//     function closeImg() {
//
//         blocki.forEach(function (clasSize) {
//         clasSize.src = imgDisplayNone;
// clasSize.getElementsByTagName('p').style.display ='block';
// });
// }
//
// };
//
// export default blokByImg