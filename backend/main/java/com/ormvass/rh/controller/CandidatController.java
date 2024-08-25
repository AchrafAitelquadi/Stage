package com.ormvass.rh.controller;
 
import com.ormvass.rh.model.Candidat;
import com.ormvass.rh.service.CandidatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/candidats")
public class CandidatController {

    @Autowired
    private CandidatService candidatService;

    @GetMapping
    public List<Candidat> getAllCandidats() {
        return candidatService.getAllCandidats();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Candidat> getCandidatById(@PathVariable int id) {
        System.out.println("Fetching Candidat with ID: " + id); // Logging example
        Optional<Candidat> candidat = candidatService.getCandidatById(id);
        return candidat.map(ResponseEntity::ok)
                .orElseGet(() -> {
                    System.out.println("Candidat not found with ID: " + id); // Logging example
                    return ResponseEntity.notFound().build();
                });
    }


    @PostMapping
    public Candidat createCandidat(@RequestBody Candidat candidat) {
        return candidatService.saveCandidat(candidat);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCandidat(@PathVariable int id) {
        if (candidatService.getCandidatById(id).isPresent()) {
        	candidatService.deleteCandidat(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
