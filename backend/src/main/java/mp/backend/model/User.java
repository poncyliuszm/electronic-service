package mp.backend.model;

import javax.persistence.*;

@Entity
@Table(name = "PRACOWNIK")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_PRACOWNIK")
    private Integer id;

    @Column(name = "ID_KLIENT")
    private Integer clientId;

    @OneToOne(cascade = {CascadeType.ALL})
    @JoinColumn(name = "ID_KLIENT", insertable = false, updatable = false)
    private Client client;

    @Column(name = "LOGIN")
    private String login;

    @Column(name = "HASLO")
    private String password;

    @Column(name = "FUNKCJA")
    private String role;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getClientId() {
        return clientId;
    }

    public void setClientId(Integer clientId) {
        this.clientId = clientId;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
