function switchMainImage(smallImg) {
  var img = document.getElementById("carousel-big-img");
  img.src = smallImg.src;
}

let imgLinkArr = [
  "/BioTrust_Assets/flavors/unflavored.webp",
  "/BioTrust_Assets/flavors/unflavored-sticks.webp",
  "/BioTrust_Assets/flavors/chocolate.webp",
  "/BioTrust_Assets/flavors/vanilla.webp",
  "/BioTrust_Assets/flavors/fruitPunch.webp",
  "/BioTrust_Assets/flavors/unflavored-info.avif",
  "/BioTrust_Assets/flavors/unflavored-sticks-info.webp",
  "/BioTrust_Assets/flavors/chocolate-info.webp",
  "/BioTrust_Assets/flavors/vanilla-info.avif",
  "/BioTrust_Assets/flavors/fruitPunch-info.webp",
];

let prodCarouselCounter = 0;
let customerGalleryCounter = 0;

function scrollProdCarouselUp() {
  prodCarouselCounter--;
  if (prodCarouselCounter < 0) {
    prodCarouselCounter = imgLinkArr.length + prodCarouselCounter;
  }
  console.log("counter is >>>", prodCarouselCounter);
  updateProdImageLinks();
  return prodCarouselCounter;
}

function scrollProdCarouselDown() {
  prodCarouselCounter++;
  if (prodCarouselCounter >= imgLinkArr.length) {
    prodCarouselCounter = prodCarouselCounter % imgLinkArr.length;
  }
  console.log("counter is >>>", prodCarouselCounter);
  updateProdImageLinks();
  return prodCarouselCounter;
}

function scrollCustomerGalleryLeft() {
  customerGalleryCounter--;
  if (customerGalleryCounter < 0) {
    customerGalleryCounter = customerGalleryCounter + 14;
  }
  updateCustomerGalleryLinks();
}

function scrollCustomerGalleryRight() {
  customerGalleryCounter++;
  if (customerGalleryCounter < 0) {
    customerGalleryCounter = customerGalleryCounter % 14;
  }
  updateCustomerGalleryLinks();
}

function updateProdImageLinks() {
  for (var i = 0; i < 5; i++) {
    var img = document.getElementById(`prod-carousel-img-${i + 1}`);
    var index = (prodCarouselCounter + i) % imgLinkArr.length;
    console.log("assigning image >>> ", imgLinkArr[index]);
    console.log("from index >>> ", index);
    img.src = imgLinkArr[index];
  }
}

function updateCustomerGalleryLinks() {
  for (var i = 0; i < 5; i++) {
    var img = document.getElementById(`CustomerGallerySlot${i}`);
    index = (customerGalleryCounter + i) % 15;
    img.src = `/BioTrust_Assets/customers/img${index}`;
  }
}