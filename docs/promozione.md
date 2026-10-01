# Promozione e indicizzazione di TikTok Chat

Cose da fare a mano, perché richiedono i tuoi account. I testi sono pronti da incollare.

## 1. Google Search Console e Bing

Il sito `hugoreynoso.github.io` ha già la verifica Google, e copre anche `/utility-tiktok-chat/`.

1. Apri [Search Console](https://search.google.com/search-console) sulla proprietà `hugoreynoso.github.io`.
2. In **Sitemap** aggiungi `utility-tiktok-chat/sitemap.xml`.
3. In **Controllo URL** incolla uno alla volta questi indirizzi e premi **Richiedi indicizzazione**:
   - `https://hugoreynoso.github.io/utility-tiktok-chat/`
   - `https://hugoreynoso.github.io/utility-tiktok-chat/en/`
   - `https://hugoreynoso.github.io/utility-tiktok-chat/es/`
   - `https://hugoreynoso.github.io/utility-tiktok-chat/alternativa-tikfinity/`
   - `https://hugoreynoso.github.io/utility-tiktok-chat/en/tikfinity-alternative/`
   - `https://hugoreynoso.github.io/utility-tiktok-chat/es/alternativa-tikfinity/`
   - `https://hugoreynoso.github.io/utility-tiktok-chat/come-leggere-commenti-live-tiktok/`
   - `https://hugoreynoso.github.io/utility-tiktok-chat/en/read-tiktok-live-comments-aloud/`
   - `https://hugoreynoso.github.io/utility-tiktok-chat/es/leer-comentarios-live-tiktok/`
4. Su [Bing Webmaster Tools](https://www.bing.com/webmasters) scegli **Importa da Google Search Console**: porta con sé sito e sitemap.

## 2. Repository GitHub

Nella pagina del repo, ingranaggio accanto ad **About**:

- **Website**: `https://hugoreynoso.github.io/utility-tiktok-chat/`
- **Description**: `Free TikTok LIVE chat text to speech: a bot reads comments aloud in your browser. No install, no sign-up.`
- **Topics**: `tiktok`, `tiktok-live`, `text-to-speech`, `tts`, `tiktok-live-chat`, `streaming-tools`, `vue`, `tikfinity-alternative`

## 3. AlternativeTo

Su [alternativeto.net](https://alternativeto.net/) aggiungi l'app e indicala come alternativa a TikFinity.

- **Name**: TikTok Chat
- **Licenza / prezzo**: Free
- **Piattaforme**: Web, Online
- **Tag**: tiktok, text-to-speech, live-streaming, chat-reader
- **Descrizione**:

  > TikTok Chat reads your TikTok LIVE chat aloud with text to speech, right in the browser. Enter the username of an account that is live, connect, and a voice reads comments as they arrive. It also plays sounds for gifts, follows and shares, and shows gift and like rankings. Free, with no install and no sign-up. Independent tool, not affiliated with TikTok.

## 4. Video brevi (TikTok, Reels, YouTube Shorts)

È il canale più utile: chi fa le LIVE è già lì. Tre idee da 20-30 secondi:

1. **Dimostrazione**: schermo diviso, a sinistra la LIVE e a destra l'app che legge i commenti. Testo a schermo: "Fai leggere la chat della tua LIVE, gratis".
2. **Tre passi**: username, Connetti, Leggi i commenti. Chiudi con l'indirizzo dell'app.
3. **Confronto**: "Ti serve solo la voce in chat? Non devi pagare un abbonamento".

Descrizione da usare:

> Fai leggere ad alta voce la chat della tua LIVE TikTok. Gratis, dal browser, senza installare nulla. Link in bio. #tiktoklive #texttospeech #streamer #livetiktok

Su YouTube pubblica anche un tutorial lungo 2-3 minuti con titolo "Come far leggere la chat della LIVE TikTok ad alta voce (gratis)" e il link nella prima riga della descrizione.

## 5. Community

Leggi prima le regole di ogni gruppo: molti vietano l'autopromozione o la permettono solo in thread dedicati.

Testo in inglese (Reddit, Discord):

> I built a free tool that reads your TikTok LIVE chat aloud with text to speech. It runs in the browser: type the username of the account that is live, connect, and it starts reading comments. No install, no sign-up, no paid plan. It also plays sounds for gifts and follows. It is unofficial and still young, so feedback is welcome: https://hugoreynoso.github.io/utility-tiktok-chat/en/

Testo in italiano:

> Ho creato uno strumento gratuito che legge ad alta voce la chat della LIVE TikTok. Funziona dal browser: scrivi lo username dell'account in diretta, ti colleghi e la voce legge i commenti. Niente da installare, nessuna registrazione, nessun abbonamento. Non è ufficiale ed è ancora giovane, quindi ogni parere è utile: https://hugoreynoso.github.io/utility-tiktok-chat/

## 6. Prima di spingere

- Il backend gratuito su Render regge poche connessioni insieme e va in pausa quando è fermo.
- Il collegamento a TikTok non è ufficiale e passa da un servizio di firma con limiti.

Se un video va bene, tieni d'occhio i log di Render: quando le connessioni iniziano a fallire è il momento di passare a un piano a pagamento o di mettere un limite.
