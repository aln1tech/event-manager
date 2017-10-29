package com.az.als.eventmanager;

import com.az.als.eventmanager.controller.CorsAdapter;
import com.az.als.eventmanager.services.StorageService;
import com.google.common.base.Predicate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import javax.annotation.Resource;

import static springfox.documentation.builders.PathSelectors.regex;

@SpringBootApplication
@EnableSwagger2
@EnableJpaRepositories
public class SpringBootApp implements CommandLineRunner {

    @Resource
    StorageService storageService;

    private static final Logger LOGGER = LoggerFactory.getLogger(SpringBootApp.class);

    public static void main(final String[] args) {
        SpringApplication.run(SpringBootApp.class, args);
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new CorsAdapter();
    }

    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2).groupName("messages-api").apiInfo(apiInfo()).select()
                .apis(RequestHandlerSelectors.basePackage("com.astrazeneca.als.alsomegaws9ui")).paths(apiPaths()).build();
    }

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder().title("Messages API")
                .description("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
                        + "has been the industry's standard dummy text ever since the 1500s, when an unknown printer " + "took a "
                        + "galley of type and scrambled it to make a type specimen book. It has survived not only five "
                        + "centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                        + "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum "
                        + "passages, and more recently with desktop publishing software like Aldus PageMaker including " + "versions of Lorem Ipsum.")
                .termsOfServiceUrl("http://astrazeneca.com").license("Apache License Version 2.0").licenseUrl("https://astrazeneca.com/LICENSE")
                .version("2.0").build();
    }

    private Predicate<String> apiPaths() {
        return regex("/api*");
    }

    @Override
    public void run(String... arg) throws Exception {
        storageService.deleteAll();
        storageService.init();
    }
}
