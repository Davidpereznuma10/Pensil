const myForm = document.querySelector("#myForm");
const myColor = document.querySelector("#color");
const myRango = document.querySelector("#range");
const imagen = document.getElementById("imagen");
const valorRango = document.querySelector("#valor");
const selectedMarca = document.querySelector('input[name="marca"]');
const myBorrador = document.querySelector('input[name="borrador"]');
const myMaterial= document.querySelectorAll('input[name="material"]');
const loader = document.querySelector("#loader");
const video = document.querySelector("#video");

video.src = 'style/img/logo_horizontal.mp4';
video.play();
video.addEventListener('ended',(e)=>{
 video.style.display ='none';
 loader.style.display='none';
}) 
window.addEventListener("DOMContentLoaded",(e)=>{
  localStorage.getItem('loader') ? loader.style.display='none' : localStorage.setItem('loader', loader) ;
})
class lapiz{
    #marca
    constructor({ color="#FF0000", range = 18 , borrador = true, material="Madera", marca="Norma" }){
        this.color = color;
        this.range = range;
        this.borrador= borrador;
        this.#marca = marca;
        this.material = material;
    }
    getMarca(){return this.#marca;}
    setMarca(nuevaMarca){this.#marca = nuevaMarca;}
}
window.addEventListener("DOMContentLoaded",() => {
    const load = new lapiz({});
    valorRango.textContent= `${myRango.value} Cm`;
    selectedMarca.checked = load.getMarca();
    myBorrador.checked = load.borrador;
    myMaterial.forEach(material => {
        if (material.value === load.material) {
            material.checked = true; 
        }
    });
})
  let dataRango = myRango.addEventListener('input', (e)=>{
    const valor = e.target.value;
    valorRango.textContent= `${valor} Cm`;
    imagen.style.width = `${valor*0.8}Cm`;
});
const lectura = myForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    localStorage.getItem('Table').localStorage.setItem('Table',table)
    const selectedMarca = document.querySelector('input[name="marca"]:checked');
    const formData = new FormData(myForm);
    const formDataObj = Object.fromEntries(formData.entries());
    if (selectedMarca) {formDataObj.marca = selectedMarca.value;};
    const miLapiz = new lapiz(formDataObj);
    const table = document.querySelector("#table").insertAdjacentHTML("beforeend",`
    <tr>
            <th><input type="color" value="${miLapiz.color}"></th>
            <th>${miLapiz.range} Cm</th>
            <th>${miLapiz.getMarca()}</th>
            <th>${miLapiz.borrador}</th>
            <th>${miLapiz.material}</th>
    </tr>`);

});