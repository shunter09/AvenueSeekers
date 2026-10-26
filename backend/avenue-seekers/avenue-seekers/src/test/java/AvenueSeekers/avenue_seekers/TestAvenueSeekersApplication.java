package AvenueSeekers.avenue_seekers;

import org.springframework.boot.SpringApplication;

public class TestAvenueSeekersApplication {

	public static void main(String[] args) {
		SpringApplication.from(AvenueSeekersApplication::main).with(TestcontainersConfiguration.class).run(args);
	}

}
