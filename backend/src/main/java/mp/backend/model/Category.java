package mp.backend.model;

import javax.persistence.*;

@Entity
@Table(name = "KATEGORIA")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_KATEGORIA")
    private Integer id;

    @Column(name = "NAZWA_KATEGORII")
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
