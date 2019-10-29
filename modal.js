function openModal(fileName) {
//    var modal = document.getElementById('theModal');
//    if (modal.style.display !== 'block'){
//        pic = document.createElement('img')
//        pic.src = fileName;
//        pic.setAttribute('class','slide');
//        pic.setAttribute('id','theSlide');
//        pic.setAttribute('onclick','closeModal()');
//        modal.appendChild(pic);
//        modal.style.display = 'block';
//    }
    
}

function closeModal() {
    var modal = document.getElementById('theModal');
    var pic = document.getElementById('theSlide');
    modal.removeChild(pic);
    modal.style.display = 'none';
}