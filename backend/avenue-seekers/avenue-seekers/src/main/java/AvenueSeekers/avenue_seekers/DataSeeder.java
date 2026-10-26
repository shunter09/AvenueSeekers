package AvenueSeekers.avenue_seekers;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataSeeder {

    @Bean
    CommandLineRunner seed(JobRepository repo) {
        return args -> {
            if (repo.count() > 0) return;
            repo.save(new Job("Dog Walker", "Paws & Co", "Chattanooga", "TN", "37402", "JOB", "https://example.com/dog-walker"));
            repo.save(new Job("Software Intern", "Riverbend Tech", "Nashville", "TN", "37203", "INTERNSHIP", "https://example.com/intern"));
            repo.save(new Job("Food Bank Volunteer", "Chattanooga Food Bank", "Chattanooga", "TN", "37406", "VOLUNTEER", "https://example.com/volunteer"));
            repo.save(new Job("Construction Manager", "BuildRight", "Atlanta", "GA", "30303", "JOB", "https://example.com/cm"));
        };
    }
}