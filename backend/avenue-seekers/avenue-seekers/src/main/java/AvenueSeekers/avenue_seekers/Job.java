package AvenueSeekers.avenue_seekers;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Entity
@Table(name = "jobs")
public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter
    private String title;
    @Setter
    private String company;
    @Setter
    private String city;
    @Setter
    private String state;   // store as "TN"
    @Setter
    private String zip;
    @Setter
    private String type;    // JOB, INTERNSHIP, VOLUNTEER

    @Setter
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

}