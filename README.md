# MPT

## Backend 

### Środowisko developerskie
Instrukcja uwruchamiania aplikacji w środowisku lokalnym. Dla osób, które beda tworzyć backend. 

#### Konfiguracja
Aby uruchomić aplikacje należy zainstalować lokalnie jdk dla javy w wersji 12(polecam openjdk). Należy dodać zmienną środowiskową JAVA_HOME=<path_do_zainstalowanego_jdk>. Do zmiennej PATH należy również dodać lokalizacje JDK<jdk_path/bin>. Aby sprawdzić działanie javy w lokalnym środowisku należy w wierszu poleceń wywołać: 

`java --version`

Powinna wyświetlić się wersja java wersja 12. 
Należy również zanistalovać program maven: https://maven.apache.org/. Należy dodać scieżkę do zaistalowanego oprogramowanie w zmiennej PATH; <maven_path/bin>. Po tym w nowym oknie terminala wykonać polecenie 

`mvn --version`.

Jeśli wszystko działa należy przejść do pobranego repozytorium, wejść do katalogu mpt-backend i zbudować projekt poleceniem 

`mvn clean package`

Jeśli budowanie zakończy się sukcesem należy sprawdzić czy w katalogu _target_ powstał plik z rozszerzeniem jar.
Aplikacje można uruchomić teraz poleceniem:

`java -jar <path_po_pliku_jar>`

Gdy aplikacja wystartuje można sprawdzić jej działanie poprzez wywołanie RESTowego endpointu:

`GET http://localhost:8080/api/version`

Powinna zostać zwrócona aktualna wersja aplikacji.


## Uruchomienie obrazu dockerowego

TODO

## Budowanie obrazu dockerowego 

TODO

## Deployment aplikacji  

TODO
