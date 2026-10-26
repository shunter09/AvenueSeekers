package AvenueSeekers.avenue_seekers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface JobRepository extends JpaRepository<Job, Long> {

    @Query("""
        SELECT j FROM Job j
        WHERE (LOWER(j.title) LIKE LOWER(CONCAT('%', :q, '%'))
            OR LOWER(j.company) LIKE LOWER(CONCAT('%', :q, '%')))
          AND (
                LOWER(COALESCE(j.city, '')) LIKE LOWER(CONCAT('%', :loc, '%'))
             OR LOWER(COALESCE(j.state, '')) LIKE LOWER(CONCAT('%', :loc, '%'))
             OR COALESCE(j.zip, '') LIKE CONCAT(:loc, '%')
             OR LOWER(CONCAT(COALESCE(j.city, ''), ', ', COALESCE(j.state, ''))) LIKE LOWER(CONCAT('%', :loc, '%'))
          )
        ORDER BY j.id DESC
        """)
    List<Job> search(@Param("q") String q, @Param("loc") String loc);
}