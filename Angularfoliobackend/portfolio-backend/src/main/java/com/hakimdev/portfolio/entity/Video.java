package com.hakimdev.portfolio.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Video {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String title;
    private String youtubeUrl;
    
    @ManyToOne  // <-- Cette annotation est cruciale
    @JoinColumn(name = "project_id")  // Nom de la colonne FK
    private Project project;  // Doit correspondre au mappedBy
}