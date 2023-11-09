class PiperElement extends HTMLElement{
connectedCallback(){
this.innerHTML = "Piper was here"; 
}
}

customElements.define("x-piper", PiperElement);

class CenterElement extends HTMLElement{
connectedCallback(){
this.innerHTML = `<div style="text-align:center">${this.innerHTML}</div>
`;
}
}

customElements.define("x-center", CenterElement);

class YearElement extends HTMLElement{
connectedCallback(){
this.innerHTML = new Date().getFullYear();
}
}

customElements.define("x-fullyear", YearElement);

class ColorElement extends HTMLElement{
connectedCallback(){
this.innerHTML = `<div style="color:red">${this.innerHTML}</div>
`;
}
}

customElements.define("x-red", ColorElement);