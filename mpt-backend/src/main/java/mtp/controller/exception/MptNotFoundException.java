package mtp.controller.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class MptNotFoundException extends RuntimeException {
    public MptNotFoundException(String message) {
        super(message);
    }

    public MptNotFoundException(String message, Throwable ex) {
        super(message,ex);
    }
}
