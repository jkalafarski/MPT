package mtp.model.user;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TestUser {
    private String id;
    private String name;
    private String surname;
    private int age;
}
