package com.hakimdev.portfolio.controller;

import com.hakimdev.portfolio.entity.About;
import com.hakimdev.portfolio.repository.AboutRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AboutController {

    private final AboutRepository aboutRepository;

    public AboutController(AboutRepository aboutRepository) {
        this.aboutRepository = aboutRepository;
    }

    @GetMapping("/api/about")
    public About getAbout() {
        // Si pas encore en base, on crée une entrée par défaut (optionnel)
        return aboutRepository.findById(1L).orElseGet(() -> {
            About about = new About(1L, 
                "Abdelhakim Chaabani", 
                "Développeur web full stack basé en Suisse Romande avec licence fondamentale en informatique et plusieurs formations en développement web.", 
                "Suisse Romande", 
                30, 
                "Développeur Web Full Stack");
            aboutRepository.save(about);
            return about;
        });
    }
}
