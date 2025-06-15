package com.hakimdev.portfolio.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class About {

    @Id
    private Long id = 1L; // Toujours 1 car on aura qu'une seule entrée "About"

    private String fullName;
    private String bio;
    private String location;
    private int age;
    private String profession;

    // Constructeurs, getters, setters

    public About() {}

    public About(Long id, String fullName, String bio, String location, int age, String profession) {
        this.id = id;
        this.fullName = fullName;
        this.bio = bio;
        this.location = location;
        this.age = age;
        this.profession = profession;
    }

    // getters et setters ici
    // ...
}
