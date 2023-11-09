class PiperElement extends HTMLElement{
connectedCallback(){
this.innerHTML = "Piper was here"; 
}
}

customElements.define("x-piper", PiperElement);