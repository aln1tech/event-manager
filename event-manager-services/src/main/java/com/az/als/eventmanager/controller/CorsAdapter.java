package com.az.als.eventmanager.controller;

import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

public class CorsAdapter extends WebMvcConfigurerAdapter {

    @Override
    public final void addCorsMappings(final CorsRegistry registry) {
        registry.addMapping("/**");
    }

}
