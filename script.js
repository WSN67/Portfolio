var slide_index = 0;

/**
 * slides the images for the slideshow
 */
function slide_images() {
    
    
    // get all the images for the slideshow
    const slideshow_img_tab = document.getElementsByClassName("slideshow_img");
    let tab_length = slideshow_img_tab.length;
    let next_index = ( slide_index + 1 ) % tab_length;
    
    // current picture must slide-out
    slideshow_img_tab[slide_index].classList.add("slide-out");
    


    slideshow_img_tab[slide_index].style.display = "flex";
    // hides the other images
    for (let i = 0; i < tab_length; i++) {
        if(i != slide_index){
            slideshow_img_tab[i].style.display = "none";
        }
    }

        // permutes class names for the next picture
    if(slideshow_img_tab[next_index].classList.contains("slide-in")){
        // slideshow_img_tab[next_index].classList.remove("slide-in")
        slideshow_img_tab[next_index].setAttribute("class","slide-out")
    }
    else{
        // slideshow_img_tab[next_index].classList.remove("slide-out")
        slideshow_img_tab[next_index].setAttribute("class","slide-in")
    }


    // increments index
    slide_index= next_index;

    // launches another slideshow every 2.5 seconds
    setTimeout(slide_images,3500);
    ;
}


/**
 * change to desktop view if elements cannot wrap 
 */ 
function changeview() {

    const divs = document.getElementsByClassName("mobile_view");
    const photo_mobile = document.getElementsByClassName("photo_mobile");
    
    // container width
    var div_width = divs.item(0).offsetWidth*0.9;
    // items in container width
    var min_width = divs.item(0).children.item(0).offsetWidth + divs.item(0).children.item(1).offsetWidth*1.1;
    
    // if container width if enough to fit all elements then its desktop view
    if(div_width >= min_width){
        for( let div_elt of divs){
            div_elt.className = "desktop_view";
        }
        for( let photo_elt of photo_mobile){
            photo_elt.className = "photo_desktop";
        }

    }
}


function main() {
    // changeview();
    // slide_images();
}


main();