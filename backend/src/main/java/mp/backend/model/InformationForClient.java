package mp.backend.model;

import javax.persistence.*;

@Entity
@Table(name = "INFO_DLA_KLIENTA")
public class InformationForClient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_INFO_DLA_KLIENTA")
    private Integer id;

    @Column(name = "ID_ZLECENIE")
    private Integer orderId;

    @ManyToOne
    @JoinColumn(name = "ID_ZLECENIE", updatable = false, insertable = false)
    private Order order;

    @Column(name = "ID_PRACOWNIK")
    private Integer userId;

    @ManyToOne
    @JoinColumn(name = "ID_PRACOWNIK", updatable = false, insertable = false)
    private User user;

    @Column(name = "INFORMACJA")
    private String information;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getOrderId() {
        return orderId;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
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

    public String getInformation() {
        return information;
    }

    public void setInformation(String information) {
        this.information = information;
    }
}
