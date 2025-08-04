document.querySelector('.form-button')
  .addEventListener('click', () => {
    const male = document.querySelector('.m');
    const female = document.querySelector('.f');
    const nom = document.querySelector('.js-nom');
    const prenom = document.querySelector('.js-prenom');
    const email = document.querySelector('.js-email');
    const emailC = document.querySelector('.js-emailC');
    const telephone = document.querySelector('.js-tel');
    const filiere = document.querySelector('.js-fil');
    const lycee = document.querySelector('.js-lyc');
    const lyceeType = document.querySelector('.js-lyc-type');
    const noteRegional = document.querySelector('.js-note-reg');
    const noteNational = document.querySelector('.js-note-nat');
    const concoChoix = document.querySelector('.js-conco');

    const spanGender = document.querySelector('.span-f-m');
    const spanNom = document.querySelector('.span-nom');
    const spanPrenom = document.querySelector('.span-prenom');
    const spanEmail = document.querySelector('.span-email');
    const spanEmailC = document.querySelector('.span-emailC');
    const spanTele = document.querySelector('.span-tel');
    
    if (nom.value.length < 2) {
      spanNom.classList.add('valide');
      nom.classList.add('input-dec');
    } else {
      spanNom.classList.remove('valide');
      nom.classList.remove('input-dec');
    }

    nom.addEventListener("input", () => {
      if (nom.value.length < 2) {
        spanNom.classList.add('valide');
        nom.classList.add('input-dec');
      } else {
        spanNom.classList.remove('valide');
        nom.classList.remove('input-dec');
      }
    });

    if (prenom.value.length < 2) {
      spanPrenom.classList.add('valide');
      prenom.classList.add('input-dec');
    } else {
      spanPrenom.classList.remove('valide');
      prenom.classList.remove('input-dec');
    }

    prenom.addEventListener("input", () => {
      if (prenom.value.length < 2) {
        spanPrenom.classList.add('valide');
        prenom.classList.add('input-dec');
      } else {
        spanPrenom.classList.remove('valide');
        prenom.classList.remove('input-dec');
      }
    });   

    if (email.value === "") {
      spanEmail.classList.add('valide');
      email.classList.add('input-dec');
    } else {
      spanEmail.classList.remove('valide');
      email.classList.remove('input-dec');
    }

    email.addEventListener("input", () => {
      if (email.value === "") {
        spanEmail.classList.add('valide');
        email.classList.add('input-dec');
      } else {
        spanEmail.classList.remove('valide');
        email.classList.remove('input-dec');
      }
    });
    

    if (email.value !== emailC.value) {
      spanEmailC.classList.add('valide');
      emailC.classList.add('input-dec');
    } else {
      spanEmailC.classList.remove('valide');
      emailC.classList.remove('input-dec');
    }

    emailC.addEventListener("input", () => {
      if (email.value !== emailC.value) {
        spanEmailC.classList.add('valide');
        emailC.classList.add('input-dec');
      } else {
        spanEmailC.classList.remove('valide');
        emailC.classList.remove('input-dec');
      }
    });
    

    if (telephone.value.length !== 10) {
      spanTele.classList.add('valide');
      telephone.classList.add('input-dec');
    } else {
      spanTele.classList.remove('valide');
      telephone.classList.remove('input-dec');
    }

    telephone.addEventListener("input", () => {
      if (telephone.value.length !== 10) {
        spanTele.classList.add('valide');
        telephone.classList.add('input-dec');
      } else {
        spanTele.classList.remove('valide');
        telephone.classList.remove('input-dec');
      }  
    });
    

    if (male.checked || female.checked) {
      spanGender.classList.remove('valide');
    } else {
      spanGender.classList.add('valide');
    }
  });