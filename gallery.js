/*Name this external file gallery.js*/

/* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    console.log (document.getElementById ('image')
    document.getElementById ('image').src = "mabuhay.jpg"
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
function upDate(previewPic){
    const imageDisplay = document.getElementById ('image')
    imageDisplay.style.backgroundImage =  `url(${previewPic.src})`
    imageDisplay.innerHTML = previewPic.alt 
}

/* In this function you should 
1) Update the url for the background image of the div with the id = "image" 
back to the orginal-image.  You can use the css code to see what that original URL was

2) Change the text  of the div with the id = "image" 
back to the original text.  You can use the html code to see what that original text was
*/
function unDo(){
    const imageDisplay = document.getElementById ('image')
    imageDisplay.style.backgroundImage = ''
    imageDisplay.innerHTML = 'Hover over an image below to display here.'

}
