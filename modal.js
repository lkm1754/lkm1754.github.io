function openModal(fileName) {
    var mobile = window.innerWidth < 801;
    var modal = document.getElementById('theModal');
    var body = document.getElementsByTagName('body');
    if (modal.style.display !== 'block' && !mobile){
        body[0].style.margin = 0;
        pic = document.createElement('img')
        pic.src = fileName;
        pic.setAttribute('class','slide');
        pic.setAttribute('id','theSlide');
        pic.setAttribute('onclick','closeModal()');
        modal.appendChild(pic);
        modal.style.display = 'block';
    }
    
}

function closeModal() {
    var modal = document.getElementById('theModal');
    var pic = document.getElementById('theSlide');
    var body = document.getElementsByTagName('body');
    modal.removeChild(pic);
    modal.style.display = 'none';
    body[0].style.margin = '8px';
}