# Creare gioco mastermind:

https://www.wikihow.it/Giocare-a-Mastermind

## Per eseguire il progetto:

-   Clonare il progetto `git clone https://github.com/sariodesign/mastermind.git`
-   Eseguire il comando `tsc --watch`

## Regole del gioco:

-   Si parte da un numero di colori predefiniti, nello specifico 4, che andranno a generare una combinazione di colori visivamente 'nascosti'. "combination"
-   Al di sotto della combinazione di colori nascosti verrà generata la lista di tutti i colori presenti nella combinazione, più 2 colori non presenti, che denomineremo "selection"
-   L'utente potrà scegliere i colori presenti nella "selection" tentando di indovinare la "combination" nascoto.
-   L'utente avrà a disposizione un numero limitato di tentativi "attempt", da 1 a 100, settabile, con 10 tentativi di partenza (default attempt).
-   Ogni combinazione di tentativi effettuati dall'utente, verrà memorizzato e visualizzato lateralmente nella view.

## Extra:

-   Scegliere il numero di colori da presentare all'inizio del gioco.
-   Rendere i colori selezionabili dall'utente.

### Config:

-   Palette Colori:
    Red: #8B0000
    DarkBlue: #00008B
    Green: #006400
    Purple: #4B0082
    Orange: #FF4500
    LightBlue: #008B8B

Sito per generare palette:
https://coolors.co/caa8f5-9984d4-592e83-230c33-b27c66-b98874
