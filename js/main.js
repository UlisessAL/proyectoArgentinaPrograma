
let datosPersona;

// fetch('https://randomuser.me/api/').then(response => response.json())
// .then(response => datosPersona = response.results[0])
// .catch(err => console.error(err));

async function datosFetch () {
    const respuesta = await fetch( 'https://randomuser.me/api/');
    return await respuesta.json()
}

const divHeaderButton = document.querySelector(".header-bottom");

function crearHTML() {

    datosFetch().then(datos => {
        datosPersona = datos.results[0];
        let html;
        console.log(datosPersona);
    
        const name = datosPersona.name.first;
        const lastName = datosPersona.name.last;
        const profilePicture = datosPersona.picture.large;
        html = 
        `
        <div>
            <img src=${profilePicture} class="profile-picture"/>
        </div>
        
        <div class="lastname-name"> 
                <span>${name}</span>
                <span>${lastName}</span>
        </div> 
        
        <div class="profession">
            <p>Front-end Developer Junior</p>
        </div>
        `;
        divHeaderButton.innerHTML += html;
    })

    
    
}

crearHTML()


const buttonEducation = document.querySelector(".button-education");
const cardText = document.querySelector("#container-cards")

function informationEducation(){
    let html;
    
    html = `
    <div class="row row-cols-3 justify-content-md-center gap-5 cards-ed">
            <div class="card col" style="width: 18rem;">
                <img src="imgs/html5-img.png" class="card-img-top" alt="html5-img">
                <div class="card-body">
                <h5 class="card-title">HTML5</h5>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">Curso en: Coderhouse</li>
                <li class="list-group-item">Enero 2021 - Marzo 2021</li>
                <li class="list-group-item">Skill: 100%</li>
                </ul>
            </div>

        <div class="card col" style="width: 18rem;">
            <img src="imgs/css-img.png" class="card-img-top" alt="css-img">
            <div class="card-body">
            <h5 class="card-title">CSS3</h5>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Curso en: Coderhouse</li>
            <li class="list-group-item">Enero 2021 - Marzo 2021</li>
            <li class="list-group-item">Skill: 80%</li>
            </ul>
        </div>

    <div class="card col" style="width: 18rem;">
        <img src="imgs/js-img.png" class="card-img-top" alt="js-img">
        <div class="card-body">
        <h5 class="card-title">JAVASCRIPT</h5>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Curso en: Coderhouse</li>
        <li class="list-group-item">Abril 2021 - Junio 2021</li>
        <li class="list-group-item">Skill: 65%</li>
        </ul>
    </div>
</div>
`

    cardText.innerHTML = html;
}

buttonEducation.addEventListener("click", () => {
    informationEducation()
})

const divInformation = document.querySelector(".additional-info");

function crearDivInformation() {

    datosFetch().then(datos => {
        datosPersona = datos.results[0];
        console.log(datosPersona);

        const email = datosPersona.email
        const telephoneNumber = datosPersona.cell
        const location = datosPersona.location.city;

        let html;
        html = `<div class="information">
                    <h3 class="h3-info"> <strong>Email:</strong> ${email}</h3>
                    <h3 class="h3-info"><strong>Numero de teléfono:</strong> ${telephoneNumber}</h3>
                    <h3 class="h3-info"><strong>Localidad:</strong> ${location}</h3>
                </div>`

                divInformation.innerHTML = html;

    })
}

crearDivInformation()

const buttonFormul = document.querySelector("#button-formul");

buttonFormul.addEventListener("click", (evt) => {
    evt.preventDefault()
    Swal.fire({
        icon: 'success',
        title: 'Tu mail se ha enviado correctamente',
        showConfirmButton: true,
        timer: 1500
    })
})