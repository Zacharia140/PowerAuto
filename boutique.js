const data = {
  moteur: {
    "BMW M3": [
      { 
        name: "Turbo Compresseur (F30 / F80)", 
        price: "899€", 
        img: "TurboBMW.jpg", 
        desc: "Ce turbo compresseur haute performance pour BMW M3 (F30/F80) améliore considérablement la puissance et la réactivité du moteur. Conçu en alliage renforcé, il offre une montée en pression rapide et une durabilité exceptionnelle, idéal pour une conduite sportive exigeante." 
      },
      { 
        name: "Filtre à air sport", 
        price: "73€", 
        img: "FiltreBMW.jpg", 
        desc: "Ce filtre à air sport BMC améliore le flux d’air vers le moteur tout en assurant une filtration optimale. Résultat : un gain de performance, un meilleur son moteur et une consommation réduite." 
      },
      { 
        name: "Bougie", 
        price: "23€", 
        img: "BougieBMW.jpg", 
        desc: "Bougies hautes performances, conçues pour une combustion optimale et une réponse moteur plus fluide. Idéales pour les moteurs sportifs exigeant fiabilité et précision d’allumage." 
      },
      { 
        name: "Pompe à essence haute pression", 
        price: "249€", 
        img: "PompeBMW.jpg", 
        desc: "Pompe à essence haute pression spécialement calibrée pour la BMW M3. Elle garantit un débit constant, même à haut régime, assurant une alimentation parfaite du moteur en toutes circonstances." 
      },
      { 
        name: "Injecteurs performance", 
        price: "168€", 
        img: "InjecteurBMW.jpg",
        desc: "Injecteurs Bosch Motorsport haute précision. Améliorent la pulvérisation du carburant pour une combustion plus homogène et une puissance accrue. Idéals pour les préparations moteur." 
      },
      { 
        name: "Radiateur en alu", 
        price: "349€", 
        img: "RadiateurBMW.jpg", 
        desc: "Radiateur en aluminium renforcé à haut rendement. Permet une dissipation thermique supérieure, évitant toute surchauffe même lors de sessions intensives sur circuit." 
      }
    ],

    "Audi RS3": [
      { 
        name: "Kit admission Forge", 
        price: "916€", 
        img: "KitadmissionAUDI.jpg", 
        desc: "Le kit d’admission Forge en carbone améliore le flux d’air et la sonorité moteur. Il augmente la puissance et offre une esthétique haut de gamme sous le capot." 
      },
      { 
        name: "Kit piston", 
        price: "2469€", 
        img: "KitpistonAUDI.jpg", 
        desc: "Kit piston forgé haute résistance conçu pour les moteurs turbo. Permet une meilleure compression et supporte des pressions extrêmes lors de préparations moteur." 
      },
      { 
        name: "Turbo hybride", 
        price: "3000€", 
        img: "TurboAUDI.jpg", 
        desc: "Turbo hybride Intec pour Audi RS3, offrant un équilibre parfait entre puissance et fiabilité. Optimisé pour une montée en pression plus rapide et une poussée prolongée." 
      },
      { 
        name: "Intercooler Wagner Evo", 
        price: "177€", 
        img: "IntercoolerAUDI.jpg", 
        desc: "Intercooler Wagner EVO, conçu pour réduire les températures d’admission et améliorer la performance du moteur. Construction robuste et flux d’air optimisé." 
      },
      { 
        name: "Kit durites silicone rouge", 
        price: "400€", 
        img: "KitduriteAUDI.jpg", 
        desc: "Kit de durites silicone rouge résistant aux hautes températures. Améliore la fiabilité du circuit d’air et apporte une touche racing au compartiment moteur." 
      },
      { 
        name: "Collecteur inox", 
        price: "1999€", 
        img: "CollecteurAUDI.jpg", 
        desc: "Collecteur d’échappement en inox poli, optimisé pour le flux des gaz. Augmente la réactivité du turbo et offre une sonorité plus agressive." 
      }
    ],

    "Nissan GT-R": [],
    "Porsche GT3 RS": []
  },

  freinage: {
    "BMW M3": [],
    "Audi RS3": [],

    "Nissan GT-R": [
      { 
        name: "Kit Freins", 
        price: "1577€", 
        img: "KitfreinNISSAN.jpg", 
        desc: "Kit complet de freinage haute performance Ceika pour Nissan GT-R. Étriers monoblocs en aluminium et disques ventilés assurent un freinage précis et constant, même en conditions extrêmes." 
      },
      { 
        name: "Plaquettes de frein", 
        price: "434€", 
        img: "PlaquetteNISSAN.jpg", 
        desc: "Plaquettes de frein haute friction conçues pour une endurance maximale. Excellente stabilité thermique et usure homogène pour un contrôle total du freinage." 
      },
      { 
        name: "Disques Avant ventilés sport", 
        price: "567€", 
        img: "DisqueNISSAN.jpg", 
        desc: "Disques avant ventilés sport en acier traité. Offrent une dissipation thermique optimale et réduisent considérablement le fading à haute température." 
      },
      { 
        name: "Durites aviation", 
        price: "278€", 
        img: "DuriteNISSAN.jpg", 
        desc: "Durites aviation en téflon et tresse inox pour une meilleure résistance à la pression. Améliorent la sensation à la pédale et la constance du freinage." 
      },
    ],

    "Porsche GT3 RS": [
      { 
        name: "Disques Avant céramique", 
        price: "2499€", 
        img: "DisquePORSCHE.jpg", 
        desc: "Disques avant en céramique ultra-légers. Réduisent la masse non suspendue et assurent un freinage constant même après plusieurs tours de circuit." 
      },
      { 
        name: "LOT 4 Étriers 4 pistons jaunes", 
        price: "416€", 
        img: "EtrierPORSCHE.jpg", 
        desc: "Jeu complet d’étriers à 4 pistons anodisés jaunes. Combine puissance, légèreté et esthétique agressive typique de la GT3 RS." 
      },
      { 
        name: "Plaquettes de frein", 
        price: "778€", 
        img: "PlaquettePORSCHE.jpg", 
        desc: "Plaquettes haut de gamme Pagid RS conçues pour un mordant immédiat et une résistance extrême à la chaleur. Recommandées pour une conduite sportive intensive." 
      }
    ]
  },

  echappement: { "BMW M3": [], "Audi RS3": [], "Nissan GT-R": [], "Porsche GT3 RS": [], },
  carrosserie: { "BMW M3": [], "Audi RS3": [], "Nissan GT-R": [], "Porsche GT3 RS": [], }
};


const categorySelect = document.getElementById("category");
const modelSelect = document.getElementById("model");
const productsContainer = document.getElementById("products");
const placeholder = document.getElementById("placeholder");

categorySelect.addEventListener("change", () => {
  const category = categorySelect.value;
  modelSelect.innerHTML = '<option value="">Choisir un modèle</option>';
  productsContainer.innerHTML = "";

  if (!category && !modelSelect.value) {
    placeholder.style.display = "block";
  } else {
    placeholder.style.display = !modelSelect.value ? "block" : "none";
  }

  if (category && data[category]) {
    modelSelect.disabled = false;
    Object.keys(data[category]).forEach(model => {
      const option = document.createElement("option");
      option.value = model;
      option.textContent = model;
      modelSelect.appendChild(option);
    });
  } else {
    modelSelect.disabled = true;
  }
});

modelSelect.addEventListener("change", () => {
  const model = modelSelect.value;

  placeholder.style.display = model ? "none" : "block";

  productsContainer.innerHTML = "";

  const category = categorySelect.value;
  if (category && model && data[category][model]) {
    const produits = data[category][model];
    if (produits.length === 0) {
      productsContainer.innerHTML = "<p style='text-align:center'>Aucune pièce disponible pour ce modèle pour l’instant.</p>";
      return;
    }
    produits.forEach(prod => {
  const card = document.createElement("div");
  card.classList.add("product-card");
  card.innerHTML = `
    <img src="${prod.img}" alt="${prod.name}">
    <h3>${prod.name}</h3>
    <span class="price">${prod.price}</span>
    <button class="btn">Ajouter au panier</button>
  `;
  productsContainer.appendChild(card);
});

  }
});

const modal = document.getElementById("product-modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalPrice = document.getElementById("modal-price");
const modalClose = document.querySelector(".close");

productsContainer.addEventListener("click", (e) => {
  const img = e.target.closest(".product-card img");
  if (!img) return;

  const card = img.closest(".product-card");
  const title = card.querySelector("h3").textContent;
  const price = card.querySelector(".price").textContent;

  const category = categorySelect.value;
  const model = modelSelect.value;
  const produit = data[category][model].find(p => p.name === title);

  const desc = produit.desc;

  modalImg.src = img.src;
  modalTitle.textContent = title;
  modalPrice.textContent = price;
  modalDesc.textContent = desc;

  modal.style.display = "flex";
});

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
