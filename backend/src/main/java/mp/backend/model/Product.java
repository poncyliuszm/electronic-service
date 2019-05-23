package mp.backend.model;

import javax.persistence.*;

@Entity
@Table(name = "PRODUKT")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_PRODUKT")
    private Integer id;

    @Column(name = "ID_KATEGORIA")
    private Integer categoryId;

    @ManyToOne
    @JoinColumn(name = "ID_KATEGORIA", insertable = false, updatable = false)
    private Category category;

    @Column(name = "ID_PRODUCENT")
    private Integer producerId;

    @ManyToOne
    @JoinColumn(name = "ID_PRODUCENT", insertable = false, updatable = false)
    private Producer producer;

    @Column(name = "TYP")
    private String type;

    @Column(name = "WERSJA")
    private String version;

    @Column(name = "OPIS")
    private String description;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Integer categoryId) {
        this.categoryId = categoryId;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Integer getProducerId() {
        return producerId;
    }

    public void setProducerId(Integer producerId) {
        this.producerId = producerId;
    }

    public Producer getProducer() {
        return producer;
    }

    public void setProducer(Producer producer) {
        this.producer = producer;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
