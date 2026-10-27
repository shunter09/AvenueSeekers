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
                new Job("Dog Walker", "Paws & Co", "Chattanooga", "TN", "37402", "JOB", "https://example.com/dog-walker"),
                new Job("Babysitter", "Happy Kids Care", "Chattanooga", "TN", "37405", "JOB", "https://example.com/babysitter"),
                new Job("Software Engineer Intern", "Riverbend Tech", "Nashville", "TN", "37203", "INTERNSHIP", "https://example.com/swe-intern"),
                new Job("Junior Software Engineer", "Volunteer State Labs", "Knoxville", "TN", "37902", "JOB", "https://example.com/junior-swe"),
                new Job("Food Bank Volunteer", "Chattanooga Food Bank", "Chattanooga", "TN", "37406", "VOLUNTEER", "https://example.com/food-bank"),
                new Job("Animal Shelter Helper", "Second Chance Shelter", "Atlanta", "GA", "30303", "VOLUNTEER", "https://example.com/shelter"),
                new Job("Construction Manager", "BuildRight", "Atlanta", "GA", "30309", "JOB", "https://example.com/construction-manager"),
                new Job("Human Resources Assistant", "Peak Staffing", "Birmingham", "AL", "35203", "JOB", "https://example.com/hr-assistant"),
                new Job("Marketing Intern", "Brightside Media", "Nashville", "TN", "37210", "INTERNSHIP", "https://example.com/marketing-intern"),
                new Job("Park Cleanup Volunteer", "Green Spaces Alliance", "Knoxville", "TN", "37917", "VOLUNTEER", "https://example.com/park-cleanup"),
                new Job("Customer Support Associate", "Lookout Software", "Chattanooga", "TN", "37402", "JOB", "https://example.com/support"),
                new Job("Electrician Apprentice", "Southern Electric", "Huntsville", "AL", "35801", "INTERNSHIP", "https://example.com/apprentice")
            ));
        };
    }
}