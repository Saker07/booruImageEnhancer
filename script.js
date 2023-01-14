const booruImg = document.querySelector('#image');

const imgWidth = booruImg ? booruImg.width : null;
const imgHeight = booruImg ? booruImg.height : null;

const adCont = document.querySelector('#right-col');

const randoKey = 'r';
const randoCtrl = true;
const randoShift = false;

const searchFieldElem = document.querySelector('#stags');
const searchKey = 's';
const searchCtrl = true;
const searchShift = false;

    console.log('working')

addRandomShortCut(randoKey, randoCtrl, randoShift);
if(booruImg){
    resizeImg(booruImg);
    moveAboveAds(booruImg, adCont)
    betterSearchAccess(searchFieldElem, booruImg, searchKey, searchCtrl, searchShift);
}

function resizeImg(booruImg){
    let propToChange = imgWidth > imgHeight ? 'width' : 'height';
    booruImg.style[propToChange] = '75v' + propToChange.charAt(0);
}

function moveAboveAds(booruImg, adCont){
    booruImg.remove();
    adCont.prepend(booruImg);
}

function addRandomShortCut(key, ctrl, shift){
    document.addEventListener('keydown', e=>{
        if(e.key.toLowerCase() == key && e.ctrlKey == ctrl && e.shiftKey == shift){
            let fullUrl = window.location;
            let reg = /https:\/\/\w*\.booru\.org\//i;
            let baseUrl = reg.exec(fullUrl)[0];
            let finalUrl = baseUrl + 'index.php?page=post&s=random';
            window.location.assign(finalUrl);
        }
    })
}

function betterSearchAccess(elemToFocus, clickHook, key, ctrl, shift){
    //add click listener to img and on ctrl shit key that focuses the search text box
    clickHook.addEventListener('click', e=>{
        elemToFocus.focus();
    })
    window.addEventListener('keydown', e=>{
        console.log(e.key == key && e.ctrlKey == ctrl && e.shiftKey == shift);
        if(e.key.toLowerCase() == key && e.ctrlKey == ctrl && e.shiftKey == shift){
            elemToFocus.focus();
        }
    })
}