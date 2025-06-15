package com.hakimdev.portfolio.controller;

import com.hakimdev.portfolio.entity.ContactMessage;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/api")
public class ContactController {

    @PostMapping("/contact")
    public ResponseEntity<String> handleContact(@RequestBody ContactMessage message) {
        // Ici tu peux traiter le message, l'enregistrer, envoyer un email, etc.
        System.out.println("Message reçu: " + message);
        return ResponseEntity.ok("Message reçu avec succès");
    }
}
