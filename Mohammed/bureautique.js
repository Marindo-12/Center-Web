const formations1 = {
  word: {
    title: "📘 Formation Microsoft Word",
    modules: [
      "Introduction à l'interface de Word",
      "Mise en forme des textes et paragraphes",
      "Insertion d'images, tableaux, graphiques",
      "Création de modèles et de styles",
      "Gestion des en-têtes et pieds de page",
      "Conversion en PDF et impression"
    ],
    price: "💰 Prix : à partir de 200 MAD",
    duration: "⏱️ Durée : 10 heures"
  },
  excel: {
    title: "📊 Formation Microsoft Excel",
    modules: [
      "Découverte de l'interface et des feuilles",
      "Formules et fonctions de base",
      "Mise en forme conditionnelle",
      "Création de graphiques",
      "Gestion des tableaux de données",
      "Introduction aux tableaux croisés dynamiques"
    ],
    price: "💰 Prix : à partir de 200 MAD",
    duration: "⏱️ Durée : 12 heures"
  },
  powerpoint: {
    title: "📈 Formation Microsoft PowerPoint",
    modules: [
      "Création de diapositives attractives",
      "Insertion de texte, images et vidéos",
      "Animations et transitions",
      "Création de thèmes personnalisés",
      "Techniques pour présenter avec impact",
      "Exportation et partage des présentations"
    ],
    price: "💰 Prix : à partir de 200 MAD",
    duration: "⏱️ Durée : 12 heures"
  },
  access: {
    title: "📈 Formation Microsoft Acces",
    modules: [
      "Création de diapositives attractives",
      "Insertion de texte, images et vidéos",
      "Animations et transitions",
      "Création de thèmes personnalisés",
      "Techniques pour présenter avec impact",
      "Exportation et partage des présentations"
    ],
    price: "💰 Prix : à partir de 200 MAD",
    duration: "⏱️ Durée : 12 heures"
  }
};

function showModal(type) {
  const f = formations1[type];
  document.getElementById('modalTitle').innerText = f.title;

  const list = document.getElementById('modalList');
  list.innerHTML = '';
  f.modules.forEach(m => {
    const li = document.createElement('li');
    li.textContent = "✅ " + m;
    list.appendChild(li);
  });

  document.getElementById('modalPrice').innerText = f.price;
  document.getElementById('modalDuration').innerText = f.duration;

  document.getElementById('popupModal').style.display = "block";
}

function closeModal() {
  document.getElementById('popupModal').style.display = "none";
}

window.onclick = function(event) {
  if (event.target == document.getElementById('popupModal')) {
    closeModal();
  }
}