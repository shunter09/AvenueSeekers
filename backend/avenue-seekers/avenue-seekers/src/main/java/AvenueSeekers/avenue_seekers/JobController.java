package AvenueSeekers.avenue_seekers;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/jobs")
public class JobController {

    private final JobRepository repo;

    public JobController(JobRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Job> search(@RequestParam(defaultValue = "") String q,
                            @RequestParam(defaultValue = "") String location) {
        return repo.search(q.trim(), location.trim());
    }

    @PostMapping
    public Job create(@RequestBody Job job) {
        return repo.save(job);
    }
}