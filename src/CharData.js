function CharData(props) {
  return (
    <div class="builds-list-item">
      <div class="build-character">
        <a class="character-portrait" href="/characters/albedo/">
          <img
            src={props.charObj.charImg}
            class={`character-icon ${props.charObj.charRarity}`}
            alt={props.alt}
          ></img>
          <img
            src={props.charObj.charElem}
            class="character-type"
            alt={props.alt}
          ></img>
        </a>
      </div>
      <div class="build-header">
        <div class="build-name">{props.charObj.name}</div>
        <div class="build-role">{props.charObj.role}</div>
      </div>
      <div class="build-content">
        <div class="build-weapon full">
          <img
            class={`build-weapon-icon ${props.charObj.weapRarity}`}
            src={props.charObj.weapImg}
            alt={props.alt}
          ></img>
          <div class="build-weapon-name">
            "{props.charObj.weapName} "
            <span>{props.charObj.weapRefinement}</span>
          </div>
        </div>
        <div class="build-weapon full">
          <div class="build-weapon-content">
            <img
              class={`build-weapon-icon ${props.charObj.artRarity}`}
              src={props.charObj.artiImg}
              alt={props.alt}
            ></img>
            <div class="build-weapon-name">{props.charObj.artName}</div>
            <div class="build-weapon-count">{props.charObj.artStarCount}</div>
          </div>
        </div>
      </div>
      <div class="build-stats">
        <div class="build-stats-item">
          <b>Sands:</b>"{props.charObj.artSands}"
        </div>
        <div class="build-stats-item">
          <b>Goblet:</b>"{props.charObj.artGoblet}"
        </div>
        <div class="build-stats-item">
          <b>Circlet:</b>"{props.charObj.artCirclet}"
        </div>
      </div>
      <div class="build-more">
        <i class="arrow down"></i>
      </div>
    </div>
  );
}

export default CharData;
