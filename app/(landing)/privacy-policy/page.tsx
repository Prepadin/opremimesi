import Head from 'next/head';
import { LandingFooters } from '@/components/landing-footers'
import { LandingNavbar } from '@/components/landing-navbar'

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Politika Zasebnosti - Opremi Me</title>
        <meta name="description" content="Privacy Policy for Opremi Me" />
        <meta name="robots" content="noindex" />
      </Head>
      <LandingNavbar />
      <main className="container mx-auto px-4 py-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Politika Zasebnosti</h1>

        <section className="mb-12">
       
          <p>
          Storitev Opremi Me, ki jo izvaja Prepad d.o.o. ceni in spoštuje zasebnost naših uporabnikov. 
          Ta pravilnik o zasebnosti pojasnjuje, kako zbiramo, uporabljamo in varujemo vaše osebne podatke, 
          ko dostopate do naših storitev in jih uporabljate.

      Podatki, ki jih zbiramo
Od vas zbiramo podatke, ko uporabljate naše storitve, vključno, vendar ne omejeno na:
<ul className="list-disc list-inside ml-4">
<li>1. Podatki o računu: Ko ustvarite račun pri Opremi Me, zbiramo vaše ime, e-poštni naslov in vse druge podatke, ki jih navedete med postopkom registracije.</li>
<li>2. Podatki o uporabi: zbiramo podatke, povezane z vašo uporabo naših storitev, kot so slike, ki jih ustvarite, datum in čas vaše uporabe ter druga dejanja, ki jih izvajate znotraj naše platforme.</li>

<li>3. Analitični podatki: analitična orodja uporabljamo za zbiranje informacij o tem, kako uporabniki komunicirajo z našimi storitvami, vključno z obiskanimi stranmi, trajanjem obiska in drugimi vedenjskimi podatki, vendar ne omejeno nanje.</li>
</ul>
          </p>
        </section>

        <section className="mb-12">
          
          <p>
          Uporaba zunanjih storitev
Za zagotavljanje naših storitev se lahko zanašamo na storitve in platforme tretjih oseb. Čeprav se po svojih najboljših močeh trudimo zagotoviti, da so te zunanje storitve skladne z našimi standardi zasebnosti, ne moremo zagotoviti zaupnosti vaših podatkov, ko jih obdelujejo ali shranjujejo te zunanje storitve.

Kako uporabljamo vaše podatke
Zbrane podatke uporabljamo za:

<ul className="list-disc list-inside ml-4">
<li>1. Zagotavljanje in vzdrževanje naših storitev;</li>
<li>2. Izboljšati naše storitve in razviti nove funkcije;</li>
<li>3. Preprečevanje goljufij in zlorab;</li>
<li>4. Spremljanje in uveljavljanje skladnosti z našimi pogoji storitve;</li>
<li>5. Komunicirajte z vami o posodobitvah, promocijah in drugih ustreznih informacijah.</li>
</ul>




          </p>
         
        </section>

        <section className="mb-14">
          
          Da zagotovimo uporabo naših storitev v skladu z našimi pogoji storitve, lahko občasno pregledamo slike, ki jih ustvarijo uporabniki. To nam omogoča, da preverimo, ali uporabniki ne ustvarjajo neprimernih slik ali kako drugače kršijo naših pogojev storitve.

Varnost podatkov
Sprejemamo razumne varnostne ukrepe za zaščito vaših osebnih podatkov pred nepooblaščenim dostopom, uporabo ali razkritjem. Vendar pa ne moremo zagotoviti popolne varnosti vaših podatkov in ne bomo odgovorni za morebitne kršitve varnosti.

Spremembe tega pravilnika o zasebnosti
Pridržujemo si pravico do posodobitve ali spremembe tega pravilnika o zasebnosti kadar koli. O morebitnih spremembah vas bomo obvestili z objavo posodobljene politike na naši spletni strani. Vaša nadaljnja uporaba Opremi Me po kakršnih koli spremembah tega pravilnika o zasebnosti pomeni, da se strinjate s posodobljenim pravilnikom.

Kontaktni podatki
Če imate kakršna koli vprašanja ali pomisleke glede tega pravilnika o zasebnosti ali vaše uporabe Opremi Me, nam pišite na info@opremime.si.
        </section>

        

        

       

        
      </main>
      <LandingFooters />
    </>
  );
}
