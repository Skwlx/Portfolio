
const displayAndHide = (nameOfClass, args) =>{
    let span = document.querySelector(nameOfClass);
    const spanContent = [args[0], args[1]];
    let windowWidth = (window.innerWidth - 100);
    let windowHeight = window.innerHeight - 100;
    let leftPos = Math.floor(Math.random() * (windowWidth + 10));
    let topPos = Math.floor(Math.random() * (windowHeight + 10));
    span.textContent = spanContent[Math.floor(Math.random() * 2)];
    span.style.top = `${topPos}px`;
    span.style.left = `${leftPos}px`;
    setTimeout(()=>{displayAndHide(nameOfClass,args)}, 3000)
}

export default displayAndHide;