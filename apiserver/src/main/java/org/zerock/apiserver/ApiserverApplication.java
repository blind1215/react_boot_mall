package org.zerock.apiserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ApiserverApplication {

    public static void main(String[] args) {
        System.out.println("test");
        SpringApplication.run(ApiserverApplication.class, args);
    }

}
