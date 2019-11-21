FROM openjdk:12
LABEL Author="mukasz<lukas.matuszyk@gmail.com>" 

ARG JAR_FILE_PATH
COPY ${JAR_FILE_PATH} /usr/src/mpt.jar
EXPOSE 8080
ENTRYPOINT [ "java", "-jar", "/usr/src/mpt.jar" ]

