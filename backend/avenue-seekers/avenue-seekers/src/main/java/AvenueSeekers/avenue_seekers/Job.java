package AvenueSeekers.avenue_seekers;
import jakarta.persistence.*;

@Entity
@Table(name = "jobs")
public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String company;
    private String city;
    private String state;   // store as "TN"
    private String zip;
    private String type;    // JOB, INTERNSHIP, VOLUNTEER

    @Column(length = 2000)
    private String url;

    public Job() { }

    public Job(String title, String company, String city, String state, String zip, String type, String url) {
        this.title = title;
        this.company = company;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.type = type;
        this.url = url;
    }

    public Long getId() { return id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getCompany() { return company; }
    public void setCompany(String company) { this.company = company; }
    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }
    public String getState() { return state; }
    public void setState(String state) { this.state = state; }
    public String getZip() { return zip; }
    public void setZip(String zip) { this.zip = zip; }
    public String getType() { return type; }
    public void setType(String type) { this.type = type; }
    public String getUrl() { return url; }
    public void setUrl(String url) { this.url = url; }
}