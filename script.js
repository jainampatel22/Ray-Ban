var elems = document.querySelectorAll('#elem');
elems.forEach(function(elem){
    var h1s = elem.querySelectorAll('h1');
    var index = 0;
    var animatinh1 = false;
    document.querySelector('#main').addEventListener('click', function () {
       if(!animatinh1){
        animatinh1 = true;
        gsap.to(h1s[index],{
            top:'-=100%',
            duration:1,
            ease:'Expo.easeOut',
            onComplete:function(){
           gsap.set(this._targets[0],{top:'100%'})
           animatinh1 = false;
            }
        })
         index === h1s.length-1 ? index = 0 : index++;
        gsap.to(h1s[index],{
            top:'-=100%',
            duration:1,
            ease:'Expo.easeOut'
        })
       }
        })
})

const imageElement = document.getElementById('transition-image');
const imageArray = [
  'IMG_7564.JPG',
  'IMG_7565.JPG',
  'IMG_7566.JPG',
  'IMG_7567.JPG',
  'IMG_7568.JPG',
];
let currentIndex = 0;

document.querySelector('#main').addEventListener('click', () => {
    // Fade out the current image
    gsap.to(imageElement, {
        opacity: 0,
        duration: 1,
        onComplete: function() {
            // Update the image source
            currentIndex = (currentIndex + 1) % imageArray.length;
            imageElement.src = imageArray[currentIndex];

            // Fade in the new image
            gsap.fromTo(imageElement, 
                { opacity: 0, scale: 0, x: 0, y: 0, rotation: 0 }, 
                { opacity: 1, scale: 1, x: 0, y: 0, rotation: 360, duration: 1 }
            );
            
        }
    });
    
});
