package mp.backend.model;

import javax.persistence.*;

@Entity
@Table(name = "Klient")
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_KLIENT")
    private Integer id;

    @Column(name = "IMIE")
    private String name;

    @Column(name = "NAZWISKO")
    private String surname;

    @Column(name = "PLEC")
    private String gender;

    @Column(name = "NAZWA_FIRMY")
    private String company;

    @Column(name = "REGON")
    private String regon;

    @Column(name = "NIP")
    private String nip;

    @Column(name = "MIASTO")
    private String city;

    @Column(name = "KOD_POCZTOWY")
    private String postalCode;

    @Column(name = "ULICA_DOM")
    private String street;

    @Column(name = "NR_TEL_1")
    private String phone1;

    @Column(name = "NR_TEL_2")
    private String phone2;

    @Column(name = "FAX")
    private String fax;

    @Column(name = "EMAIL")
    private String email;

    @Column(name = "WWW")
    private String site;


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

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getRegon() {
        return regon;
    }

    public void setRegon(String regon) {
        this.regon = regon;
    }

    public String getNip() {
        return nip;
    }

    public void setNip(String nip) {
        this.nip = nip;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getPhone1() {
        return phone1;
    }

    public void setPhone1(String phone1) {
        this.phone1 = phone1;
    }

    public String getPhone2() {
        return phone2;
    }

    public void setPhone2(String phone2) {
        this.phone2 = phone2;
    }

    public String getFax() {
        return fax;
    }

    public void setFax(String fax) {
        this.fax = fax;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSite() {
        return site;
    }

    public void setSite(String site) {
        this.site = site;
    }
}
