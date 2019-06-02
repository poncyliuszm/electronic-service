package mp.backend.model;

import javax.persistence.*;

@Entity
@Table(name = "RODZAJ_DOKUMENTU")
public class DocumentType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_RODZAJ_DOKUMENTU")
    private Integer id;

    @Column(name = "RODZAJ")
    private String type;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
