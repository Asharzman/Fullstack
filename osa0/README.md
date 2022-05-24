# Osa0 dokumentointi
Mitä on tehty ja mitkä ovat olleet toimeksiannot.

## 0.1: HTML
Kertaa HTML:n perusteet lukemalla Mozillan tutoriaali [HTML:stä.](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)

Tätä tehtävää ei palauteta GitHubiin, riittää että luet tutoriaalin.

## 0.2: CSS
Kertaa CSS:n perusteet lukemalla Mozillan tutoriaali [CSS:stä.](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)

Tätä tehtävää ei palauteta GitHubiin, riittää että luet tutoriaalin.

## 0.3: HTML:n lomakkeet
Tutustu HTML:n lomakkeiden perusteisiin lukemalla Mozillan tutoriaali [Your first form.](https://developer.mozilla.org/en-US/docs/learn/forms/your_first_form)

Tätä tehtävää ei palauteta GitHubiin, riittää että luet tutoriaalin.

## 0.4: uusi muistiinpano
Luvussa JavaScriptia sisältävän sivun lataaminen - kertaus kuvataan sekvenssikaavion avulla sivun https://studies.cs.helsinki.fi/exampleapp/notes avaamisen aikaansaama tapahtumasarja.

Kaavio on luotu WebSequenceDiagrams-palvelussa, seuraavasti:

```
selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
palvelin-->selain: HTML-koodi
selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
palvelin-->selain: main.css
selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
palvelin-->selain: main.js

note over selain:
selain alkaa suorittaa js-koodia
joka pyytää JSON-datan palvelimelta
end note

selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
palvelin-->selain: [{ content: "HTML on helppoa", date: "2019-01-01" }, ...]

note over selain:
selain suorittaa tapahtumankäsittelijän
joka renderöi muistiinpanot näytölle
end note
```

Tee vastaavanlainen kaavio, joka kuvaa mitä tapahtuu tilanteessa, missä käyttäjä luo uuden muistiinpanon ollessaan sivulla https://studies.cs.helsinki.fi/exampleapp/notes, eli kirjoittaa tekstikenttään jotain ja painaa nappia tallenna.

Kirjoita tarvittaessa palvelimella tai selaimessa tapahtuvat operaatiot sopivina kommentteina kaavion sekaan.

Kaavion ei ole pakko olla sekvenssikaavio. Mikä tahansa järkevä kuvaustapa käy.

Kaikki oleellinen tieto tämän ja seuraavien kahden tehtävän tekemiseen on tässä osassa. Näiden tehtävien ideana on, että luet tekstin vielä kerran ja mietit tarkkaan mitä missäkin tapahtuu. Ohjelman koodin lukemista ei näissä tehtävissä edellytetä, vaikka sekin on toki mahdollista.

## 0.5: Single Page App
Tee kaavio tilanteesta, jossa käyttäjä menee selaimella osoitteeseen https://studies.cs.helsinki.fi/exampleapp/spa eli muistiinpanojen Single Page App-versioon

## 0.6: Uusi muistiinpano
Tee kaavio tilanteesta, jossa käyttäjä luo uuden muistiinpanon single page -versiossa.

Tämä oli osan viimeinen tehtävä ja on aika pushata vastaukset GitHubiin sekä merkata tehdyt tehtävät palautussovellukseen.