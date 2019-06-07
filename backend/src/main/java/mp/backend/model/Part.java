package mp.backend.model;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "CZESCI")
public class Part {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_CZESCI")
    private Integer id;

    @Column(name = "ID_PRODUKT")
    private Integer productId;

    @ManyToOne
    @JoinColumn(name = "ID_PRODUKT", updatable = false, insertable = false)
    private Product product;

    @Column(name = "NR_SERYJNY")
    private String serialNumber;

    @Column(name = "CENA_NETTO")
    private BigDecimal netto;

    @Column(name = "WARTOSC_VAT")
    private Integer vat;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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

    public String getSerialNumber() {
        return serialNumber;
    }

    public void setSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
    }

    public BigDecimal getNetto() {
        return netto;
    }

    public void setNetto(BigDecimal netto) {
        this.netto = netto;
    }

    public Integer getVat() {
        return vat;
    }

    public void setVat(Integer vat) {
        this.vat = vat;
    }
}
