package mp.backend.model;

import javax.persistence.*;

@Entity
@Table(name = "SERWIS")
public class Service {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_SERWIS")
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

    @Column(name = "OPIS_NAPRAWY")
    private String description;

    @Column(name = "ID_STATUS")
    private Integer serviceStatusId;

    @ManyToOne
    @JoinColumn(name = "ID_STATUS", updatable = false, insertable = false)
    private ServiceStatus serviceStatus;

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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getServiceStatusId() {
        return serviceStatusId;
    }

    public void setServiceStatusId(Integer serviceStatusId) {
        this.serviceStatusId = serviceStatusId;
    }

    public ServiceStatus getServiceStatus() {
        return serviceStatus;
    }

    public void setServiceStatus(ServiceStatus serviceStatus) {
        this.serviceStatus = serviceStatus;
    }
}
