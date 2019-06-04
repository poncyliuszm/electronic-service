package mp.backend.model;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "DOK_SPRZEDAZY")
public class Document {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_DOK_SPRZEDAZY")
    private Integer id;

    @Column(name = "ID_ZLECENIE")
    private Integer orderId;

    @ManyToOne
    @JoinColumn(name = "ID_ZLECENIE", updatable = false, insertable = false)
    private Order order;

    @Column(name = "DATA_WYSTAWIENIA")
    private LocalDate date;

    @Column(name = "CENA_NETTO")
    private BigDecimal netto;

    @Column(name = "WARTOSC_VAT")
    private Integer vat;

    @Column(name = "ID_FORMA_PLATNOSCI")
    private Integer paymentTypeId;

    @ManyToOne
    @JoinColumn(name = "ID_FORMA_PLATNOSCI", updatable = false, insertable = false)
    private PaymentType paymentType;

    @Column(name = "ID_RODZAJ_DOKUMENTU")
    private Integer documentTypeId;

    @ManyToOne
    @JoinColumn(name = "ID_RODZAJ_DOKUMENTU", updatable = false, insertable = false)
    private DocumentType documentType;

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

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
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

    public Integer getPaymentTypeId() {
        return paymentTypeId;
    }

    public void setPaymentTypeId(Integer paymentTypeId) {
        this.paymentTypeId = paymentTypeId;
    }

    public PaymentType getPaymentType() {
        return paymentType;
    }

    public void setPaymentType(PaymentType paymentType) {
        this.paymentType = paymentType;
    }

    public Integer getDocumentTypeId() {
        return documentTypeId;
    }

    public void setDocumentTypeId(Integer documentTypeId) {
        this.documentTypeId = documentTypeId;
    }

    public DocumentType getDocumentType() {
        return documentType;
    }

    public void setDocumentType(DocumentType documentType) {
        this.documentType = documentType;
    }
}
