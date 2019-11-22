# MPT

## Backend 

### Środowisko developerskie
Instrukcja uruchamiania aplikacji w środowisku lokalnym. Dla osób, które beda tworzyć backend. 

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

Instrukcja uruchamiania kontenera dockerowego z obrazu aplikacji. Dle osób niemodyfikujących backendu.

#### Konfiguracja
Aby uruchomić kontener należy mieć zainstalowane oprogramowanie Docker. Instrukcje instalacji:
1. Linux(polecane): https://github.com/docker/docker-snap
2. Windows(Nie polecane): https://docs.docker.com/docker-for-windows/

Jeśli wszystko działa dobrze polecenie
`docker --version` 
powinno zwrócić aktualną wersję aplikacji.

#### Uruchomienie obrazu
**Uwaga!** Aby wykonać tą część konfiguracji należy mieć aktywne konto w domenie *hub.docker.com*. Na potrzy projektu stworzyłęm konto mtpdockeruser, dla osób które nie chcą zakłądać swoejgo konta. Po dane uwierzytelniające pytajcie się mnie bezpośredni ~Łukasz M.

Repozytorium przechowujące wersje obrazów z aplikacją: https://hub.docker.com/repository/docker/mukasz/mpt-backend

W terminalu należy zalogować się na konto w domenie *hub.docker.com*:

 `sudo docker login -u <USERNAME> -p <PASSWORD>`
 
 W następnym kroku należy poprać obraz aplikacji backendowej:
 
  `sudo docker pull mukasz/mpt-backend`
  
  Gdy zakończy się pobieranie należy uruchomić obraz poleceniem:
  
  `sudo docker run -d -p 8080:8080/tcp mukasz/mpt-backend`
  
  W tej chwili aplkacja backendowa powinna działać na porcie TCP 8080. Aby zweryfikować czy wszystko się udało można wysłać rządanie HTTP:
  
  `GET http://localhost:8080/api/version`
  
  W przypadku gdy wszystko działa poprawnie powinna zostać zwrócona odpwiedź HTTP OK zawierająca aktualną wersję aplikacji.
 
## Budowanie obrazu dockerowego 

TODO

## Deployment aplikacji  

TODO
