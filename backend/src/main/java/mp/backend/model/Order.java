package mp.backend.model;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "ZLECENIE")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_ZLECENIE")
    private Integer id;

    @Column(name = "ID_KLIENT")
    private Integer clientId;

    @ManyToOne
    @JoinColumn(name = "ID_KLIENT", updatable = false, insertable = false)
    private Client client;

    @Column(name = "ID_PRACOWNIK")
    private Integer userId;

    @ManyToOne
    @JoinColumn(name = "ID_PRACOWNIK", updatable = false, insertable = false)
    private User user;

    @Column(name = "ID_PRODUKT")
    private Integer productId;

    @ManyToOne
    @JoinColumn(name = "ID_PRODUKT", updatable = false, insertable = false)
    private Product product;

    @Column(name = "OPIS_USZKODZENIA")
    private String description;

    @Column(name = "DATA_PRZYJECIA")
    private LocalDate acceptanceDate;

    @Column(name = "DATA_WYDANIA")
    private LocalDate releaseDate;

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

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getAcceptanceDate() {
        return acceptanceDate;
    }

    public void setAcceptanceDate(LocalDate acceptanceDate) {
        this.acceptanceDate = acceptanceDate;
    }

    public LocalDate getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(LocalDate releaseDate) {
        this.releaseDate = releaseDate;
    }
}
