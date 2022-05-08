# WebfejlProjekt

Szeretnék egy kis segítséget adni a pontozáshoz, leírtam, hogy melyik pontot nagyjából hol valósítottam meg :)

###### Apró megjegyzés, hogy a favourite komponens az igazából a recept hozzáadásért felelős, a név egy kicsit megtévesztő lehet, csak nem volt kedvem szórakozni azzal, hogy újracsináljam a neve miatt 
###### Valamint a regisztráció során legalább 6 karakter legyen a jelszavadban, különben sír, hogy nem jó
###### Bármi probléma esetén keress fel nyugodtan (Bene Martin, DU0038, Büne#6780)

## Fordítási, futási hiba nincs
  * Nekem nem volt

## Firebase Hosting URL
  * Itt a link: https://webfejl-projekt.web.app/main

## Adatmodell definiálása
  * app/shared/models mappában van 3 db
  * ezeket használom a firebases feltöltéshez

## Alkalmazás felbontása
  * szerintem ez megvan

## Reszponzív, mobil first felület
  * hát ezzel nem igazán foglalkoztam
  * böngészőben még értelmesen néz ki, mobilos felületen nem igazán

## Legalább 2 különböző attribútum direktíva
  * [ngStyle] a forum.component.html-ben
  * [ngClass] a main.component.html-ben

## Legalább 2 különböző strukturális direktíva
  * *ngFor és *ngIf van pl a main.component.html-ben de ezen kívül máshol is van

## Adatátadás szülő és gyerek komponensek között
  * a menu.component és az app.component között csináltam @Inputot és @outputot is

## Legalább 10 különböző Material elem helyes használata
  * Használtam egy csomó fajtát, szinte mindegyik .html-ben van
  * talán megvan a 10

## Adatbevitel Angular form-ok segítségével
  * a bejelentkezés, regisztráció, fórum hozzászólás, recept feltöltés azzal van megvalósítva

## Legalább 1 saját pipe osztály
  * az app/shared/pipes-ben van egy date-format-os, azt használom a fórum hozzászólásainál

## Legalább 2 különböző Lifecycle Hook használata:
  * ngOnInit-et használok csak pl. forum.component.ts-ben

## CRUD műveletek mindegyike megvalósult:
  * Update-t azt sehol se valósítottam meg
  * CRD mindegyike meg van valósítva pl. a recipe.service.ts-ben

## CRUD service-ekben
  * az app/shared/services-en belül vannak az ehhez tartozó servicek

## Firestore adatbázis használatal
  * Azt használok, serviceken belül látszódik

## Legalább 2 komplex firestore lekérdezés
  * recipe.service.ts-ben a readByUserId method-ban van where feltétel
  * a comment.service.ts-ben a read method-ban van orderBy rendezés

## Legalább 4 különböző route
  * app-routing.module.ts-ben ott vannak

## Legalább 2 route levédése AuthGuard-dal
  * app-routing.module.ts-ben a profile és az addRecipe le van védve
  * szerintem van is értelme



