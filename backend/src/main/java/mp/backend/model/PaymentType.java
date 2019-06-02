package mp.backend.model;

import javax.persistence.*;

@Entity
@Table(name = "FORMA_PLATNOSCI")
public class PaymentType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_FORMA_PLATNOSCI")
    private Integer id;

    @Column(name = "NAZWA")
    private String name;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
