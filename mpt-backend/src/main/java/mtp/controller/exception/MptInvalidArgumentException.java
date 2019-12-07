package mtp.controller.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class MptInvalidArgumentException extends RuntimeException {

    public MptInvalidArgumentException(String message) {
        super(message);
    }

    public MptInvalidArgumentException(String message, Throwable cause) {
        super(message, cause);
    }
}
