/*Serve para navegador e mobile*/
function toggleMenu(){
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('active');
}

/*Scroll Leve*/
function scrollActive(sectionId){
    const section = document.getElementById(sectionId);

    if(!section) return;

    const headerHeight = 70; /*Ponteiro do Mouse não ficara escondido*/
    const sectionPosition = section.offsetTop - headerHeight;

    window.scrollTo({top: sectionPosition, behavior: "smooth"});

    const menu = document.getElementById('navMenu');
    menu.classList.remove('active');

}

/*Cadastro*/

function handleSubmit(event){
    event.preventDefault();

    const form = document.getElementById('volunteerForm');

    const formData = {
        nome: form.nome.value,
        email: form.email.value,
        telefone: form.telefone.value,
        dataCadastro: new Date().toLocaleDateString();

    }
}

