const data = {
  moteur: {
    "BMW M3": [
      { 
        name: "Turbo Compresseur (F30 / F80)", 
        price: "899€", 
        img: "https://www.mister-turbo.com/25949-thickbox_default/turbo-pour-bmw-m3-30-f80-30-431-cv-49335-02054.jpg", 
        desc: "Ce turbo compresseur haute performance pour BMW M3 (F30/F80) améliore considérablement la puissance et la réactivité du moteur. Conçu en alliage renforcé, il offre une montée en pression rapide et une durabilité exceptionnelle, idéal pour une conduite sportive exigeante." 
      },
      { 
        name: "Filtre à air sport", 
        price: "73€", 
        img: "https://strperformance.com/46570-thickbox_default/filtres-a-air-sport-bmc-13201-pour-bmw-m3-e46-32-343cv.jpg", 
        desc: "Ce filtre à air sport BMC améliore le flux d’air vers le moteur tout en assurant une filtration optimale. Résultat : un gain de performance, un meilleur son moteur et une consommation réduite." 
      },
      { 
        name: "Bougie", 
        price: "23€", 
        img: "https://www.shop.japanautosperformances.fr/3901-large_default/8x-bougie-ngk-lkr8ap-pour-bmw-m3-v8-e9x-s%C3%A9rie-e.jpg", 
        desc: "Bougies hautes performances, conçues pour une combustion optimale et une réponse moteur plus fluide. Idéales pour les moteurs sportifs exigeant fiabilité et précision d’allumage." 
      },
      { 
        name: "Pompe à essence haute pression", 
        price: "249€", 
        img: "https://www.driftshop.fr/media/catalog/product/1/3/1/9/6/7/xlarge-c067bc500ed86a088434f41fee65d000.jpg", 
        desc: "Pompe à essence haute pression spécialement calibrée pour la BMW M3. Elle garantit un débit constant, même à haut régime, assurant une alimentation parfaite du moteur en toutes circonstances." 
      },
      { 
        name: "Injecteurs performance", 
        price: "168€", 
        img: "https://www.speedingparts.fr/thumb/27876/1024x0/Bosch-Motorsport--injector-1100cc.jpg",
        desc: "Injecteurs Bosch Motorsport haute précision. Améliorent la pulvérisation du carburant pour une combustion plus homogène et une puissance accrue. Idéals pour les préparations moteur." 
      },
      { 
        name: "Radiateur en alu", 
        price: "349€", 
        img: "https://www.dtmparts.com/upload/image/radiateur-en-alu-bmw-m3-e46-p-image-79461-grande.jpg", 
        desc: "Radiateur en aluminium renforcé à haut rendement. Permet une dissipation thermique supérieure, évitant toute surchauffe même lors de sessions intensives sur circuit." 
      }
    ],

    "Audi RS3": [
      { 
        name: "Kit admission Forge", 
        price: "916€", 
        img: "https://www.suprcars.fr/118169-large_default/admission-carbone-forge-pour-audi-rs3-8v2-25-tfsi-400ch-2017-2020.jpg", 
        desc: "Le kit d’admission Forge en carbone améliore le flux d’air et la sonorité moteur. Il augmente la puissance et offre une esthétique haut de gamme sous le capot." 
      },
      { 
        name: "Kit piston", 
        price: "2469€", 
        img: "https://www.ecodetuning.com/images/product/EC0414-0301-Eurocode-piston-rod-combo-rs3-ttrs-3_2.png", 
        desc: "Kit piston forgé haute résistance conçu pour les moteurs turbo. Permet une meilleure compression et supporte des pressions extrêmes lors de préparations moteur." 
      },
      { 
        name: "Turbo hybride", 
        price: "3000€", 
        img: "https://www.turbobyintec.com/2110/turbo-hybride-ttrs-et-rs3-5-cyl-25-tfsi-340-cv.jpg", 
        desc: "Turbo hybride Intec pour Audi RS3, offrant un équilibre parfait entre puissance et fiabilité. Optimisé pour une montée en pression plus rapide et une poussée prolongée." 
      },
      { 
        name: "Intercooler Wagner Evo", 
        price: "177€", 
        img: "https://www.ultraperformance.fr/sites/default/files/images/moteur/echangeurs/wagner-tuning/wagner-tuning-echangeurs-intercooler-performance-competition.jpg", 
        desc: "Intercooler Wagner EVO, conçu pour réduire les températures d’admission et améliorer la performance du moteur. Construction robuste et flux d’air optimisé." 
      },
      { 
        name: "Kit durites silicone rouge", 
        price: "400€", 
        img: "https://www.gt2i.ch/312986-facebook_large/kit-durites-silicone-turbo-5-durites-incluant-durite-aluminium-70-mm-rs3-8v2-8y-ttrs.jpg", 
        desc: "Kit de durites silicone rouge résistant aux hautes températures. Améliore la fiabilité du circuit d’air et apporte une touche racing au compartiment moteur." 
      },
      { 
        name: "Collecteur inox", 
        price: "1999€", 
        img: "https://www.dprturbo.fr/wp-content/uploads/2017/10/dprturbo-Collecteur-Audi-TT-RS-_1-1.jpg", 
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
        img: "https://ceikaperformance.fr/cdn/shop/products/CEIKA_Custom_Big_Brake_Kit_heic_39c05ae8-0624-4253-a0c4-4e84e4685da9_2000x.jpg?v=1704016171", 
        desc: "Kit complet de freinage haute performance Ceika pour Nissan GT-R. Étriers monoblocs en aluminium et disques ventilés assurent un freinage précis et constant, même en conditions extrêmes." 
      },
      { 
        name: "Plaquettes de frein", 
        price: "434€", 
        img: "https://www.ultraperformance.fr/sites/default/files/images/freinage/plaquettes/pfc/pfc-plaquettes-frein.jpeg", 
        desc: "Plaquettes de frein haute friction conçues pour une endurance maximale. Excellente stabilité thermique et usure homogène pour un contrôle total du freinage." 
      },
      { 
        name: "Disques Avant ventilés sport", 
        price: "567€", 
        img: "https://www.driftshop.fr/media/catalog/product/1/8/3/3/8/8/xlarge-pfc-discs-v3-generic1.jpg", 
        desc: "Disques avant ventilés sport en acier traité. Offrent une dissipation thermique optimale et réduisent considérablement le fading à haute température." 
      },
      { 
        name: "Durites aviation", 
        price: "278€", 
        img: "https://www.ultraperformance.fr/sites/default/files/images/freinage/durites/hel/hel-performance-durites-frein-aviation-4-transparent.jpg", 
        desc: "Durites aviation en téflon et tresse inox pour une meilleure résistance à la pression. Améliorent la sensation à la pédale et la constance du freinage." 
      },
    ],

    "Porsche GT3 RS": [
      { 
        name: "Disques Avant céramique", 
        price: "2499€", 
        img: "https://www.suprcars.fr/120117-thickbox_default/disques-de-freins-avant-girodisc-pour-porsche-992-gt3-rs-gt3-origine-c%C3%A9ramique.jpg", 
        desc: "Disques avant en céramique ultra-légers. Réduisent la masse non suspendue et assurent un freinage constant même après plusieurs tours de circuit." 
      },
      { 
        name: "LOT 4 Étriers 4 pistons jaunes", 
        price: "416€", 
        img: "https://www.design911.com/uploads/products/0832f10c-bd66-4b07-bbff-7264aca6fc1c/3604209302_1.jpg", 
        desc: "Jeu complet d’étriers à 4 pistons anodisés jaunes. Combine puissance, légèreté et esthétique agressive typique de la GT3 RS." 
      },
      { 
        name: "Plaquettes de frein", 
        price: "778€", 
        img: "https://www.design911.com/uploads/products/444426c5-2546-42d3-872b-5a093a98ce5f/9GT698151T_1.jpg", 
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

document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", () => {
    window.location.href = "panier.html";
  });
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
