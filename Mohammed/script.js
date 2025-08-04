document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('main-header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});

function afficherContenu(id, link) {
  const contenus = document.querySelectorAll('.contenu');
  contenus.forEach(el => el.classList.remove('active'));

  document.getElementById(id).classList.add('active');

  document.querySelectorAll('.js-link').forEach(l => l.classList.remove('active'));
  link.classList.add('active');
}

function propos(event) {
  event.preventDefault(); 
  const parent = event.target.closest('.proposC'); 
  const fleche = parent.querySelector('.fleches');
  const content = parent.querySelector('.propos-contentC'); 
  const link = parent.querySelector('.propos-link');

  if (content.classList.contains('visible')) {
    content.classList.remove('visible');
    content.style.display = 'none';
    fleche.classList.remove('visible');
    link.classList.remove('active');
  } else {
    content.classList.add('visible');
    content.style.display = 'block';
    fleche.classList.add('visible');
    link.classList.add('active');
  }
}

function formations(event) {
  event.preventDefault(); 
  const parent = event.target.closest('.formationsC'); 
  const fleche = parent.querySelector('.fleches');
  const content = parent.querySelector('.formations-contentC'); 
  const link = parent.querySelector('.formations-link');

  if (content.classList.contains('visible')) {
    content.classList.remove('visible');
    content.style.display = 'none';
    fleche.classList.remove('visible');
    link.classList.remove('active');
  } else {
    content.classList.add('visible');
    content.style.display = 'block';
    fleche.classList.add('visible');
    link.classList.add('active');
  }
}

function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');

  const isVisible = sidebar.classList.contains('visible');
  if (isVisible) {
    sidebar.classList.remove('visible');
    overlay.classList.remove('visible');
  } else {
    sidebar.classList.add('visible');
    overlay.classList.add('visible');
  }
}

document.getElementById('overlay').addEventListener('click', () => {
  toggleMenu();
});

function toggleDropdown(event) {
  event.preventDefault();
  const parent = event.target.closest('div');
  const content = parent.querySelector('div');
  const fleches = parent.querySelector('.fleches');

  if (content.classList.contains('visible')) {
    content.classList.remove('visible');
    fleches.classList.remove('visible');
  } else {
    content.classList.add('visible');
    fleches.classList.add('visible');
  }
}

document.querySelector('.loca-radio')
  .addEventListener('click', () => {
    let location = document.querySelector('.js-location');
    location.classList.add('loca');
    location.style.display = 'block';
});

document.getElementById('enLigne')
  .addEventListener('click', () => {
    let location = document.querySelector('.js-location');
    location.classList.remove('loca');
    location.style.display = 'none';
});

/*
window.onload = function() {
  document.querySelector('.m').value = localStorage.getItem('male') || '';
  document.querySelector('.f').value = localStorage.getItem('female') || '';
  document.querySelector('.js-nom').value = localStorage.getItem('nom') || '';
  document.querySelector('.js-prenom').value = localStorage.getItem('prenom') || '';
  document.querySelector('.js-email').value = localStorage.getItem('email') || '';
  document.querySelector('.js-emailC').value = localStorage.getItem('emailC') || '';
  document.querySelector('.js-tel').value = localStorage.getItem('tel') || '';
  document.querySelector('.js-lyc').value = localStorage.getItem('lyc') || '';
  document.querySelector('.js-villeR').value = localStorage.getItem('villeR') || '';
  document.querySelector('.js-note-reg').value = localStorage.getItem('note-reg') || '';
  document.querySelector('.js-note-nat').value = localStorage.getItem('note-nat') || '';


  const filiereS = localStorage.getItem('fil');
  const sexe = localStorage.getItem('sexe');
  const lyceTypeS = localStorage.getItem('lyc-type');
  const concoS = localStorage.getItem('conco');
  const infographie = localStorage.getItem('infog');
  const niveau = localStorage.getItem('niveau');
  
  if (infographie) {
    document.getElementById('infog').value = infographie;
  }

  if (niveau) {
    document.getElementById('niveau').value = niveau;
  }

  if (filiereS) {
    document.getElementById('fil').value = filiereS;
  }

  if (sexe) {
    document.getElementById(gender.toLowerCase()).checked = true;
  }

  if (lyceTypeS) {
    document.getElementById('lyc-type').value = lyceTypeS;
  }

  if (concoS) {
    document.getElementById('conco').value = concoS;
  }
};

document.getElementById('infog').addEventListener('change', function() {
  localStorage.setItem('infog', this.value);
});

document.getElementById('niveau').addEventListener('change', function() {
  localStorage.setItem('niveau', this.value);
});

document.getElementById('m').addEventListener('change', function() {
  localStorage.setItem('sexe', 'm');
});

document.getElementById('f').addEventListener('change', function() {
  localStorage.setItem('sexe', 'f');
});

document.getElementById('nom').addEventListener('input', function() {
  localStorage.setItem('nom', this.value);
});

document.getElementById('email').addEventListener('input', function() {
  localStorage.setItem('email', this.value);
});

document.getElementById('prenom').addEventListener('input', function() {
  localStorage.setItem('prenom', this.value);
});

document.getElementById('emailC').addEventListener('input', function() {
  localStorage.setItem('emailC', this.value);
});

document.getElementById('tel').addEventListener('input', function() {
  localStorage.setItem('tel', this.value);
});

document.getElementById('lyc').addEventListener('input', function() {
  localStorage.setItem('lyc', this.value);
});

document.getElementById('fil').addEventListener('change', function() {
  localStorage.setItem('fil', this.value);
});

document.getElementById('lyc-type').addEventListener('change', function() {
  localStorage.setItem('lyc-type', this.value);
});

document.getElementById('villeR').addEventListener('input', function() {
  localStorage.setItem('villeR', this.value);
});

document.getElementById('note-reg').addEventListener('input', function() {
  localStorage.setItem('note-reg', this.value);
});

document.getElementById('note-nat').addEventListener('input', function() {
  localStorage.setItem('note-nat', this.value);
});

document.getElementById('conco').addEventListener('change', function() {
  localStorage.setItem('conco', this.value);
});

*/
