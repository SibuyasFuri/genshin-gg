import "./Tierlist.css";
import CharData from "./CharData";

const charBuildData = [
  {
    name: "Albedo",
    charImg: "https://rerollcdn.com/GENSHIN/Characters/1/Albedo.png",
    charRarity: "rarity-5",
    charElem: "https://rerollcdn.com/GENSHIN/Characters/1/Albedo.png",
    role: "Sub DPS",
    weapImg: "https://rerollcdn.com/GENSHIN/Weapons/Cinnabar_Spindle.png",
    weapName: "Cinnabar Spindle",
    weapRarity: "rarity-4",
    weapRefinement: "R5",
    artiImg: "https://rerollcdn.com/GENSHIN/Gear/husk_of_opulent_dreams.png",
    artName: "Husk of Opulent Dreams",
    artRarity: "rarity-5",
    artCount: "4",
    artSands: "DEF%",
    artGoblet: "Geo DMG",
    artCirclet: "CRIT Rate / DMG / DEF%",
  },
  {
    name: "Alhaitham",
    charImg: "https://rerollcdn.com/GENSHIN/Characters/1/Alhaitham.png",
    charRarity: "rarity-5",
    charElem: "https://rerollcdn.com/GENSHIN/Elements/Element_Dendro.png",
    role: "Main DPS",
    weapImg:
      "https://rerollcdn.com/GENSHIN/Weapons/Light_of_Foliar_Incision.png",
    weapName: "Light of Foliar Incision",
    weapRarity: "rarity-5",
    weapRefinement: "R5",
    artiImg: "https://rerollcdn.com/GENSHIN/Gear/gilded_dreams.png",
    artName: "Gilded Dreams",
    artRarity: "rarity-5",
    artCount: "4",
    artSands: "EM / ATK%",
    artGoblet: "Dendro DMG",
    artCirclet: "CRIT Rate / DMG",
  },
  {
    name: "Aloy",
    charImg: "https://rerollcdn.com/GENSHIN/Characters/1/Aloy.png",
    charRarity: "rarity-5",
    charElem: "https://rerollcdn.com/GENSHIN/Elements/Element_Cryo.png",
    role: "Sub DPS",
    weapImg: "https://rerollcdn.com/GENSHIN/Weapons/Thundering_Pulse.png",
    weapName: "Thundering Pulse",
    weapRarity: "rarity-5",
    weapRefinement: "R5",
    artiImg: "https://rerollcdn.com/GENSHIN/Gear/noblesse_oblige.png",
    artName: "Noblesse Oblige",
    artRarity: "rarity-5",
    artCount: "4",
    artSands: "ATK% / EM",
    artGoblet: "Cryo DMG",
    artCirclet: "CRIT Rate / DMG",
  },
  {
    name: "Ayaka",
    charImg: "https://rerollcdn.com/GENSHIN/Characters/1/Ayaka.png",
    charRarity: "rarity-5",
    charElem: "https://rerollcdn.com/GENSHIN/Elements/Element_Cryo.png",
    role: "Main DPS",
    weapImg: "https://rerollcdn.com/GENSHIN/Weapons/Mistsplitter_Reforged.png",
    weapName: "MIstsplitter Reforged",
    weapRarity: "rarity-5",
    weapRefinement: "R5",
    artiImg: "https://rerollcdn.com/GENSHIN/Gear/blizzard_strayer.png",
    artName: "Blizzard Strayer",
    artRarity: "rarity-5",
    artCount: "4",
    artSands: "ATK%",
    artGoblet: "Cryo DMG",
    artCirclet: "CRIT DMG / ATK%",
  },
  {
    name: "Ayato",
    charImg: "https://rerollcdn.com/GENSHIN/Characters/1/Ayato.png",
    charRarity: "rarity-5",
    charElem: "https://rerollcdn.com/GENSHIN/Elements/Element_Hydro.png",
    role: "Main DPS",
    weapImg: "https://rerollcdn.com/GENSHIN/Weapons/Haran_Geppaku_Futsu.png",
    weapName: "Haran Geppaku Futsu",
    weapRarity: "rarity-5",
    weapRefinement: "R5",
    artiImg: "https://rerollcdn.com/GENSHIN/Gear/heart_of_depth.png",
    artName: "Heart of Depth",
    artRarity: "rarity-5",
    artCount: "4",
    artSands: "ATK%",
    artGoblet: "Hydro DMG",
    artCirclet: "CRIT Rate / DMG",
  },
];

function Tierlist() {
  return (
    <section class="container">
      <div id="nn_skinr"></div>
      <div id="nn_skinl"></div>
      <div class="row">
        <main class="content">
          <div class="content-header">
            <h1 class="content-title">Genshin Impact Character Builds</h1>
            <div class="content-filters">
              <div class="search ml-auto">
                <div class="search-icon"></div>
                <input
                  class="search-input"
                  type="text"
                  placeholder="Search for a character..."
                  value=""
                ></input>
                <div class="search-close"></div>
              </div>
            </div>
          </div>
          <div class="wrapper-lb1">
            <div id="nn_lb1"></div>
          </div>
          <div class="wrapper-mpu1">
            <div id="nn_mobile_mpu1"></div>
          </div>
          <div class="builds-disclaimer">
            "Character Builds by "
            <a
              href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRq-sQxkvdbvaJtQAGG6iVz2q2UN9FCKZ8Mkyis87QHFptcOU3ViLh0_PJyMxFSgwJZrd10kbYpQFl1/pubhtml#"
              target="blank"
            >
              Genshin Impact Helper →
            </a>
          </div>
          <div class="filters">
            <div class="filters-list">
              <img
                class="filters-item"
                alt="4"
                src="https://rerollcdn.com/GENSHIN/UI/rarity_4.png"
                filter="4"
              ></img>
              <img
                class="filters-item"
                alt="5"
                src="https://rerollcdn.com/GENSHIN/UI/rarity_5.png"
                filter="5"
              ></img>
              <div class="filters-divider"></div>
              <img
                class="filters-item"
                alt="Anemo"
                src="https://rerollcdn.com/GENSHIN/UI/element_anemo.png"
                filter="Anemo"
              ></img>
              <img
                class="filters-item"
                alt="Cryo"
                src="https://rerollcdn.com/GENSHIN/UI/element_cryo.png"
                filter="Cryo"
              ></img>
              <img
                class="filters-item"
                alt="Electro"
                src="https://rerollcdn.com/GENSHIN/UI/element_electro.png"
                filter="Electro"
              ></img>
              <img
                class="filters-item"
                alt="Dendro"
                src="https://rerollcdn.com/GENSHIN/UI/element_dendro.png"
                filter="Dendro"
              ></img>
              <img
                class="filters-item"
                alt="Geo"
                src="https://rerollcdn.com/GENSHIN/UI/element_geo.png"
                filter="Geo"
              ></img>
              <img
                class="filters-item"
                alt="Hydro"
                src="https://rerollcdn.com/GENSHIN/UI/element_hydro.png"
                filter="Hydro"
              ></img>
              <img
                class="filters-item"
                alt="Pyro"
                src="https://rerollcdn.com/GENSHIN/UI/element_pyro.png"
                filter="Pyro"
              ></img>
              <div class="filters-divider"></div>
              <img
                class="filters-item weapon"
                alt="Bow"
                src="https://rerollcdn.com/GENSHIN/UI/weapon_bow.png"
                filter="Bow"
              ></img>
              <img
                class="filters-item weapon"
                alt="Catalyst"
                src="https://rerollcdn.com/GENSHIN/UI/weapon_catalyst.png"
                filter="Catalyst"
              ></img>
              <img
                class="filters-item weapon"
                alt="Claymore"
                src="https://rerollcdn.com/GENSHIN/UI/weapon_claymore.png"
                filter="Claymore"
              ></img>
              <img
                class="filters-item weapon"
                alt="Polearm"
                src="https://rerollcdn.com/GENSHIN/UI/weapon_polearm.png"
                filter="Polearm"
              ></img>
              <img
                class="filters-item weapon"
                alt="Sword"
                src="https://rerollcdn.com/GENSHIN/UI/weapon_sword.png"
                filter="Sword"
              ></img>
            </div>
          </div>
          <div class="builds-list">
            <div class="builds-list-item">
              <div class="build-character">
                <a class="character-portrait" href="/characters/albedo/">
                  <img
                    src="https://rerollcdn.com/GENSHIN/Characters/1/Albedo.png"
                    class="character-icon rarity-5"
                    alt="Albedo"
                  ></img>
                  <img
                    src="https://rerollcdn.com/GENSHIN/Elements/Element_Geo.png"
                    class="character-type"
                    alt="Geo"
                  ></img>
                </a>
              </div>
              <div class="build-header">
                <div class="build-name">Albedo</div>
                <div class="build-role">Sub DPS</div>
              </div>
              <div class="build-content">
                <div class="build-weapon full">
                  <img
                    class="build-weapon-icon rarity-4"
                    src="https://rerollcdn.com/GENSHIN/Weapons/Cinnabar_Spindle.png"
                    alt="Cinnabar Spindle"
                  ></img>
                  <div class="build-weapon-name">
                    "Cinnabar Spindle "<span>R5</span>
                  </div>
                </div>
                <div class="build-weapon full">
                  <div class="build-weapon-content">
                    <img
                      class="build-weapon-icon rarity-5"
                      src="https://rerollcdn.com/GENSHIN/Gear/husk_of_opulent_dreams.png"
                      alt="Husk of Opulent Dreams"
                    ></img>
                    <div class="build-weapon-name">Husk of Opulent Dreams</div>
                    <div class="build-weapon-count">4</div>
                  </div>
                </div>
              </div>
              <div class="build-stats">
                <div class="build-stats-item">
                  <b>Sands:</b>
                  "DEF%"
                </div>
                <div class="build-stats-item">
                  <b>Goblet:</b>
                  "Geo DMG"
                </div>
                <div class="build-stats-item">
                  <b>Circlet:</b>
                  "CRIT Rate / DMG / DEF%"
                </div>
              </div>
              <div class="build-more">
                <i class="arrow down"></i>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}

export default Tierlist;
