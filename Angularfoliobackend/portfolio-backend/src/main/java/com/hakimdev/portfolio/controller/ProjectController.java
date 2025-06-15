package com.hakimdev.portfolio.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import com.hakimdev.portfolio.entity.Project;
import com.hakimdev.portfolio.repository.ProjectRepository;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin(origins = "http://localhost:4200") // Pour Angular
public class ProjectController {

    @Autowired
    private ProjectRepository projectRepo;

    @GetMapping
    public List<Project> getAllProjects() {
        return projectRepo.findAll();
    }

    @PostMapping
    public Project createProject(@RequestBody Project project) {
        return projectRepo.save(project);
    }
}
