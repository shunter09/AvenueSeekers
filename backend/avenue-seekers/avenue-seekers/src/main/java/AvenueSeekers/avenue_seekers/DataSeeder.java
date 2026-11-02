package AvenueSeekers.avenue_seekers;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class DataSeeder {

    @Bean
    CommandLineRunner seed(JobRepository repo,
                           @Value("${app.seed.enabled:false}") boolean enabled) {
        return args -> {
            if (!enabled || repo.count() > 0) return;

            repo.saveAll(List.of(
                new Job("Dog Walker", "Paws & Co", "Chattanooga", "TN", "37402", "JOB", "PCS", "https://example.com/dog-walker"),
                   new Job("Babysitter", "Happy Kids", "Chattanooga", "TN", "37405", "JOB", "PCS", "https://example.com/babysitter"),
                   new Job("Software Engineering Intern", "Riverbend Tech", "Nashville", "TN", "37203", "INTERNSHIP", "CIT", "https://example.com/swe-intern"),
                   new Job("Food Bank Volunteer", "Chattanooga Food Bank", "Chattanooga", "TN", "37406", "VOLUNTEER", "CSS", "https://example.com/food-bank"),
                   new Job("Construction Manager", "BuildRight", "Atlanta", "GA", "30303", "JOB", "CE", "https://example.com/construction"),
                   new Job("HR Assistant", "Peachtree HR", "Atlanta", "GA", "30309", "JOB", "BF", "https://example.com/hr-assistant"),
                   new Job("Animal Shelter Volunteer", "Second Chance Rescue", "Knoxville", "TN", "37902", "VOLUNTEER", "PCS", "https://example.com/shelter"),
                   new Job("Marketing Intern", "Smoky Media", "Knoxville", "TN", "37919", "INTERNSHIP", "MC", "https://example.com/marketing-intern"),
                   new Job("Full Stack Developer", "Lookout Labs", "Chattanooga", "TN", "37402", "JOB", "CIT", "https://example.com/fullstack"),
                   new Job("Park Cleanup Volunteer", "Green Birmingham", "Birmingham", "AL", "35203", "VOLUNTEER", "BGC", "https://example.com/park-cleanup"),
                   new Job("Data Analyst Intern", "Magnolia Analytics", "Huntsville", "AL", "35801", "INTERNSHIP", "M", "https://example.com/data-intern"),
                   new Job("Software Engineer", "Bluegrass Systems", "Louisville", "KY", "40202", "JOB", "CIT", "https://example.com/swe")
            ));
        };
    }
}
