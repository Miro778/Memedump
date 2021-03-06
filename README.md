# MemeDump
Sovellus on käynnissä osoitteessa: https://thememedump.herokuapp.com/

Sovelluksen pointtina on toimia meemisivustona, jonne rekisteröityneet käyttäjät voivat julkasta videoita ja kuvia. Käyttäjät voivat tykätä ja kommentoida muiden julkaisuja.
Käyttäjät saavat aktiivisuuspisteitä aktiivisuutensa mukaan. Jokaisesta julkaisusta käyttäjä saa 3 pistettä + 1 piste * julkaisun tykkäysten määrä. Yhden pisteen saa myös
kommentoimalla julkaisuja.
 
# Käyttöohje
Uusi käyttäjä voi rekisteröityä nopeasti pääsivulta, ja kirjautumalla rekisteröinnissä annetuilla tiedoilla päästä sovellukseen.

Sovelluksessa on seuraavia ominaisuuksia:
- Kirjautuminen ja uuden käyttäjän luominen kirjautumissivulta.
- Top-sivu näyttää julkaisut niiden saamien tykkäysten perusteella suosituimmasta alaspäin.
- Fresh-sivu näyttää julkaisut niiden julkaisupäivämäärän perusteella uusimmasta vanhimpaan.
- New Post -sivu mahdollistaa uuden julkaisun tekemisen. Julkaisuun kirjoitetaan teksti, sekä kuva/videotiedoston URL.
- Users-sivu näyttää käyttäjät lajitellen ne aktiivisuuspisteiden mukaan enimmästä pienimpään. Sivulla on hakupalkki, jonka avulla sivu näyttää vain hakua vastaavat käyttäjät.
  Klikkaamalla käyttäjää listalta näyttää se kyseisen käyttäjän profiilisuvn joka näyttää käyttäjästä tietoja sekä hänen julkaisut.
- My Profile -sivu näyttää oman profiilisivun joka on muuten samanlainen, mutta sisältää mahdollisuuden päivittää avatar ja poistaa omia julkaisuja.
- Info & Support -sivu sisältää tarkemmat käyttöohjeet (englanniksi). Lisäksi sivulla voi lähettää tickettejä, jos käyttäjä haluaa olla yhteydessä ylläpitäjään.
- Logout kirjaa käyttäjän ulos. 

# Video käyttöliittymästä

https://user-images.githubusercontent.com/83011341/153861401-ee4cb886-3514-4fdf-aa7e-e610d3b1eb2b.mp4


# Tuntikirjanpito
| päivä | aika | mitä tein  |
| :----:|:-----| :-----|
| 29.8 | 6    | Backend toteutettu alustavasti |
| 30.8 | 1,5  | Suunnitelma käyttöliittymälle & Frontendin toteutukselle |
|      | 2,5  | Aloitettu Front endin toteutus. Sovellus osaa nyt hakea back endistä meemit ja käyttäjät HTTP-pyynnöillä, ja tallettaa ne storeen. |
| 31.8 | 5    | Tutustuttu material-ui:n ominaisuuksiin käyttöliittymän toteutusta varten. Toteutettu sisäänkirjautumissivu, pääsivu ja navigointipalkki material-ui:n avulla. 
|      |      | Lisäksi toteutettu mahdollisuus lisätä postauksia sovelluksessa ilman kovakoodausta. |
| 1.9  |  3   | Lisätty sivu joka näyttää kaikkien käyttäjien listan ja lisätty sivu yksittäisen käyttäjän profiilin tarkasteluun |
| 3.9  |  2   | Korjattu 'My Profile'-linkki toimimaan kaikilla käyttäjillä. Tutustuttu mahdollisuuksiin material-ui:n avulla muuttaa navigointipalkin tyyliä. |
| 7.9  |  2   | Päivitetty material-ui:lla käyttöliittymästä seuraavia asioita: Teema, uuden postauksen lisäyssivu, postauksen like-painike |
| 8.9  |  2   | Tehty yksittäisille meemeille oma sivu. |
| 9.9  |  4   | Toteutettu kommenttikenttää meemeille. Ei vielä täysin toimiva. Lisäksi selvitetty ja korjattu bugeja. |
| 10.9 |  2   | Korjattu kommenttikentän aiheuttama error ja viimeistelty kommenttien ulkoasu. |
| 11.9 |  5   | Muutettu backendiä siten että käyttäjien tietoja voidaan muuttaa. Lisätty käyttöliittymästä mahdollisuus päivittää avatar ollessa omalla profiilisivulla. Selvitetty ja korjattu bugia, joka aiheutti errorin päivittäessä profiilisivua. |
| 14.9 |  2   | Kirjautumissivulla nyt register-nappi jota kautta voi luoda uuden käyttäjän.
| 15.9 |  3   | Työstetty meemien lajittelupalkkia pääsivulle. Algoritmi saatu toimimaan.
| 16.9 |  5   | Tehty erillinen sivu suosituimmille ja uusimmille meemeille. Asennettu Eslint ja siistitty sillä koodia. Refaktoroitu Frontendin koodia tekemällä Login-sivusta erillinen komponentti. Päivitetty Login-sivun ulkoasu.
| 17.9 |  5   | Käyttöliittymää paranneltu. Lisätty users-sivu näyttämään käyttäjien postausten, kommenttien ja tykkäysten määrät, sekä näiden perusteella aktiivisuuspisteet |
| 20.9 |  1   | Toteutettu algoritmi, joka lajittelee käyttäjien listan sen mukaan kenellä on eniten activity pointseja. Tämän mukana käyttäjät lajitellaan users-sivulla. Lisätty dataa (enemmän postauksia ja kommentteja)
| 21.9 |  3   | Profiilisivu näyttää nyt aktiivisuuspisteet, ja niihin perustuvan rankin. Lisätty infosivu, joka sisältää käyttöohjeet ja tietoa sovelluksesta.
| 22.9 |  2   | Tehty hakupalkki users-sivulle. Satunnaisia käyttöliittymän parannuksia.
| 23.9 |  3,5 | Työstetty mahdollisuutta päivittää avatar lataamalla tiedosto. Tutustuttu Multerin dokumentaatioon tätä varten, ja yritetty toteuttaa se siten. Erittäin useiden virheilmoituksen jälkeen todettu kyseinen tapa liian monimutkaiseksi. Päädytty vaihtamaan toteutustapa HTML form -tapaan. Saatu muuten virheettömästi upload toimimaan, mutta tiedosto korruptoitui lähetyksen jälkeen. 
| 24.9 |  2   | Selvitetty ongelmaa, jonka vuoksi ladatut tiedostot korruptoituvat. Muutettu backendiä, ja saatu ongelma korjattua.
| 27.9 |  2   | Tehty backend ticketille. Laitettu meemiin sivulle linkki tekijän profiiliin. Profiilisivu näyttää meemien listassa myös jokaisen meemin kuvan, tykkäysten ja kommenttien määrän.
| 28.9 |  3   | Tehty tickettien lähetys sovelluksesta mahdolliseksi. Korjattu varoituksia joita ilmeni koodissa.  Muutettu navigointipalkissa 'My Profile' tärkeäksi, ja laitettu 'Info & Support' vähemmän tärkeäksi.
| 1.10 |  1   | Tehty mahdollisuus poistaa omia meemejä oman profiilisivun kautta.
| 3.10 |  1   | Käyty läpi eri käyttöliittymän toimintoja ja tarkasteltu konsolia varoituksien varalta. Löydetty 5, jotka selvitetty ja korjattu.
| 4.10 |  1   | Korjattu tekstikenttien bugisuus luodessa uutta käyttäjää ja postausta.
|      |  2   | Refaktoroitu koodia siirtämällä App.js tiedostosta NewPost-komponentti omaan tiedostoon. Tehty sekä frontend ja backend tarkastamaan vastaanotetun datan validius rekisteröitäessä käyttäjää, tehdessä uutta postausta, kommentoidessa ja lähetettäessä ticketin.
| 5.10 |  2   | Tehty uusi komponentti MediaType, joka tarkastaa onko Meme-objektin media .mp4 tiedosto. Tällöin komponentti palauttaa videon img sijaan. Lisätty komponentti kaikille sivuille, joilla meemejä voi nähdä, ja katsottu että mp4 tiedostot toimivat oikein käyttöliittymässä.
| 10.10|  4   | Saatu backend toimimaan internetissä herokulla. Vastaan tuli lukuisia ongelmia herokuun liittyen. Aluksi selvitetty, miten repositorion alemmasta kansiosta saadaan luotua heroku-sovellus. Tämä ei kuitenkaan onnistunut heti, vaan konsoli ilmoitti lukuisista virheistä. Luettu ohjeita netistä ja selvitetty ongelmaa, jonka johdosta tehty muutoksia moduuleihin, package.jsoniin yms. Lopulta saatu errorit korjattua ja backend internettiin.
| 11.10|  2   | Muutoksia backendiin ja frontendiin, jotta se toimii ns. single page appina. Tehty frontendin tuotantoversio ja lisätty backendiin, testattu kokonaisuus toimivaksi herokussa.
| 12.10| 0,5  | Eritelty avatarin päivityksessä tiedoston upload omaksi komponentiksi, joka on toistaiseksi poissa käytöstä.
|      |  2   | Lisätty tarpeellista dokumentaatiota Frontendiin.
|      |  1,5 | Refaktoroitu frontendin koodia ja vähennetty toisteisuutta lisäämällä functions.js tiedosto, jonne siirretty sekä App.js ja user.js tiedostoissa käytettyjä funktioita. Lisätty myös Menu omaksi komponentikseen App.js tiedostosta.
| 13.10|  3   | Käyttäjien hakupalkki toimi virheellisesti, joten siirretty se App.js:sta omaksi komponentiksi. Hakupalkki ei kuitenkaan toiminut, sillä konsoli ilmoitti virheestä liittyen UseStaten käyttöön renderöidessä erillistä komponenttia. Debugattu, ja yritetty löytää ratkaisua eri keinoin pitkään. Lopulta onnistuttu korjaamaan virhe tekemällä App.js sisään metodi setFilterData joka käyttää setFilteriä. Täten viety propsien avulla UserSearchBariin tämä metodi itse setFilterin sijaan.
|      |  1   | Parannettu info-sivun ticketin lähetyksen kohdasta käyttöliittymää toteuttamalla syöttökenttä ja ticketin tyypin valintapalkki material-ui:n avulla.
|      |  0,5 | Tehty käyttöohjeet
| yht: |  88  |
