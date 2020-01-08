package mtp.model.user;


public enum UserRole {
    COMPANY("COMPANY"),
    INFLUENCER("INFLUENCER"),
    ADMINISTRATOR("ADMINISTRATOR");

    private String value;

    UserRole(String value) {
        this.value = value;
    }

    public String getValue() { return value; }
}
