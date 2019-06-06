package mp.backend.model;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "USLUGI")
public class Operation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_USLUGI")
    private Integer id;

    @Column(name = "NAZWA_USLUGI")
    private String name;

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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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
