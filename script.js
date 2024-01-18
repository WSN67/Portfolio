var slide_index = 0;

/**
 * slides the images for the slideshow
 */
function slide_images() {
    
    
    // get all the images for the slideshow
    const slideshow_img_tab = document.getElementsByClassName("slideshow_img");
    let tab_length = slideshow_img_tab.length;
    
    slideshow_img_tab[slide_index].style.display = "flex";
    // hides the other images
    for (let i = 0; i < tab_length; i++) {
        if(i == slide_index){
            slideshow_img_tab[i].style.display = "flex";
        }        
        else{
            slideshow_img_tab[i].style.display = "none";
        }
    }
    slide_index= (slide_index + 1) % tab_length;


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
    slide_images();
}


main();