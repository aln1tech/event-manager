package com.az.als.eventmanager.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
public class HomeController {
    @RequestMapping(value = "/", method = RequestMethod.GET)
    void handleDefaultMapping(HttpServletResponse response) throws IOException {
        response.sendRedirect("index.html");
    }
}
