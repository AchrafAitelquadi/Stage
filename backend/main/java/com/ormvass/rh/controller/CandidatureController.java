package com.ormvass.rh.controller;
 
import com.ormvass.rh.model.Candidature;
import com.ormvass.rh.service.CandidatureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/candidatures")
public class CandidatureController {

    @Autowired
    private CandidatureService candidatureService;

    @GetMapping
    public List<Candidature> getAllCandidatures() {
        return candidatureService.getAllCandidatures();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Candidature> getCandidatureById(@PathVariable int id) {
        System.out.println("Fetching Candidature with ID: " + id); // Logging example
        Optional<Candidature> candidature = candidatureService.getCandidatureById(id);
        return candidature.map(ResponseEntity::ok)
                .orElseGet(() -> {
                    System.out.println("Candidature not found with ID: " + id); // Logging example
                    return ResponseEntity.notFound().build();
                });
    }


    @PostMapping
    public Candidature createCandidature(@RequestBody Candidature candidature) {
        return candidatureService.saveCandidature(candidature);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCandidature(@PathVariable int id) {
        if (candidatureService.getCandidatureById(id).isPresent()) {
        	candidatureService.deleteCandidature(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
