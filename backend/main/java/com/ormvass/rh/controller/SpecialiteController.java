package com.ormvass.rh.controller;

import com.ormvass.rh.model.Specialite;
import com.ormvass.rh.service.SpecialiteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/specialites")
public class SpecialiteController {
    
    @Autowired
    private SpecialiteService specialiteService;

    @GetMapping
    public List<Specialite> getAllSpecialites() {
        return specialiteService.getAllSpecialites();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Specialite> getSpecialiteById(@PathVariable int id) {
        Optional<Specialite> specialite = specialiteService.getSpecialiteById(id);
        return specialite.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Specialite createSpecialite(@RequestBody Specialite specialite) {
        return specialiteService.saveSpecialite(specialite);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSpecialite(@PathVariable int id) {
        if (specialiteService.getSpecialiteById(id).isPresent()) {
            specialiteService.deleteSpecialite(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
