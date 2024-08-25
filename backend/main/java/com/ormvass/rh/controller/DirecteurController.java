package com.ormvass.rh.controller;

import com.ormvass.rh.model.Directeur;
import com.ormvass.rh.service.DirecteurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/directeurs")
public class DirecteurController {

    @Autowired
    private DirecteurService directeurService;
    
  
    @GetMapping
    public List<Directeur> getAllDirecteurs() {
        return directeurService.getAllDirecteurs();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Directeur> getDirecteurById(@PathVariable int id) {
        Optional<Directeur> directeur = directeurService.getDirecteurById(id);
        return directeur.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Directeur createDirecteur(@RequestBody Directeur directeur) {
        return directeurService.saveDirecteur(directeur);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDirecteur(@PathVariable int id) {
    	directeurService.deleteDirecteur(id);
        return ResponseEntity.noContent().build();
    }
}
