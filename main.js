// REMOVE YOUTUBE CONTENT
const contents = document.getElementById('contents');
const contentParent = contents.parentNode;
contents.parentNode.removeChild(contents);

// ROTATING IMAGE GALLERY
const inspo = document.createElement("IMG");
inspo.setAttribute("src", "https://qph.cf2.quoracdn.net/main-qimg-25f9bd5e0a10d7e8822262596dbc2392.webp");
inspo.setAttribute("width", "auto");
inspo.setAttribute("height", "400");
inspo.setAttribute("alt", "The Pulpit Rock");
    
contentParent.prepend(inspo);

const gallery = [
    "https://media.wired.co.uk/photos/606daa7ff19707fe1aef3681/master/w_1600%2Cc_limit/GettyImages-73426522.jpg",
    "https://api.time.com/wp-content/uploads/2016/04/time-100-influential-animals-joel-stein_92-chris-p-bacon1.jpg?quality=85",
    "https://cdn11.bigcommerce.com/s-kb0vfa1n6m/product_images/uploaded_images/dog-3296806-1920.jpg",
    "https://www.godupdates.com/wp-content/uploads/2019/04/godupdates-dog-with-pig-face-story-behind-animal-rescue-fb.jpg",
    "https://media-be.chewy.com/wp-content/uploads/2018/05/goats2-x-670-440x.png",
    "https://qph.cf2.quoracdn.net/main-qimg-25f9bd5e0a10d7e8822262596dbc2392.webp"
]

delay()

function delay(i=0) {
    setInterval(() => {
        inspo.setAttribute("src", gallery[i]);
        i++;
        if (i === 5) i = 0;
    }, 5000);
}


