package mp.backend.model;

import javax.persistence.*;

@Entity
@Table(name = "PRODUCENT")
public class Producer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_PRODUCENT")
    private Integer id;

    @Column(name = "NAZWA_PRODUCENTA")
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
