const textOne = document.getElementById('main-text1')
const textTwo = document.getElementById('main-text2')
const textThree = document.getElementById('main-text3')
var boxLighted;
const backdrop = document.getElementById('backdrop');
var gifFocused;
const vid1 = {
    vid: document.getElementById('vid1'),
    gif: document.getElementById('side-items1')
};
const vid2 = {
    vid: document.getElementById('vid2'),
    gif: document.getElementById('side-items2')
};
const vid3 = {
    vid: document.getElementById('vid3'),
    gif: document.getElementById('side-items3')
};
var vidSelected;
var vidToPlay;
const backshade = document.getElementById('backshade');
const subsBtn = document.getElementById('subs-btn');
const addSubsModal = document.getElementById('add-modal');
const SIDE_ITEMS1 = 'side-items1';
const SIDE_ITEMS2 = 'side-items2';
const SIDE_ITEMS3 = 'side-items3';
const cancelAddMovieHandlerButton = addSubsModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieHandlerButton.nextElementSibling;

const gifFocusing = () => {
    toggleBackdrop();
    gifFocused.classList.add('focused');
}
const gifDefocusing = () => {
    toggleBackdrop();
    gifFocused.classList.remove('focused');
}
const gifLighting = () => {
    var gifLighted = document.getElementById(boxLighted);
    gifLighted.style.backgroundColor = 'orange';
};
const gifShadowing = (boxLighted) => {
    var gifLighted = document.getElementById(boxLighted);
    gifLighted.style.backgroundColor = 'teal';
};
const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};
const playVideo = () => {
    vidToPlay = document.getElementById(vidSelected);
    vidToPlay.classList.add('visible');
    backshade.classList.add('visible');
};
const backdropClickHandler = () => {
    addSubsModal.classList.remove('visible');
    backdrop.classList.remove('visible');
    backshade.classList.remove('visible');
    vidToPlay.classList.remove('visible');
}
const showSubsModal = () => {
    addSubsModal.classList.add('visible');
    backshade.classList.add('visible');
    vidSelected='vid1';
}

cancelAddMovieHandlerButton.addEventListener('click', backdropClickHandler);
confirmAddMovieButton.addEventListener('click', () => {
    alert('Thank u :)')
    backdropClickHandler();
});
subsBtn.addEventListener('click', showSubsModal);
backshade.addEventListener('click', backdropClickHandler);
vid1.gif.addEventListener('click', () =>{
    vidSelected='vid1';
    vid2.vid.classList.remove('visible');
    vid3.vid.classList.remove('visible');
    playVideo();
})
vid2.gif.addEventListener('click', () =>{
    vidSelected='vid2';
    vid1.vid.classList.remove('visible');
    vid3.vid.classList.remove('visible');
    playVideo();
})
vid3.gif.addEventListener('click', () =>{
    vidSelected='vid3';
    vid1.vid.classList.remove('visible');
    vid2.vid.classList.remove('visible');
    playVideo();
})

vid1.gif.addEventListener('mouseenter', () =>{
    gifFocused = vid1.gif;
    gifFocusing();
});
vid1.gif.addEventListener('mouseleave', gifDefocusing);
vid2.gif.addEventListener('mouseenter', () =>{
    gifFocused = vid2.gif;
    gifFocusing();
});
vid2.gif.addEventListener('mouseleave', gifDefocusing);
vid3.gif.addEventListener('mouseenter', () =>{
    gifFocused = vid3.gif;
    gifFocusing();
});
vid3.gif.addEventListener('mouseleave', gifDefocusing);

textOne.addEventListener('mouseenter', () => {
    boxLighted = SIDE_ITEMS1;
    gifLighting(boxLighted);
});
textTwo.addEventListener('mouseenter', () => {
    boxLighted = SIDE_ITEMS2;
    gifLighting(boxLighted);
});
textThree.addEventListener('mouseenter', () => {
    boxLighted = SIDE_ITEMS3;
    gifLighting(boxLighted);
});

textOne.addEventListener('mouseleave', () => {
    boxLighted = SIDE_ITEMS1;
    gifShadowing(boxLighted);
});
textTwo.addEventListener('mouseleave', () => {
    boxLighted = SIDE_ITEMS2;
    gifShadowing(boxLighted);
});
textThree.addEventListener('mouseleave', () => {
    boxLighted = SIDE_ITEMS3;
    gifShadowing(boxLighted);
});