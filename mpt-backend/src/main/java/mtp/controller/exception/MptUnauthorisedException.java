package mtp.controller.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.UNAUTHORIZED)
public class MptUnauthorisedException extends RuntimeException {
    public MptUnauthorisedException(String message) {
        super(message);
    }

    public MptUnauthorisedException(String message, Throwable ex) {
        super(message, ex);
    }
}
