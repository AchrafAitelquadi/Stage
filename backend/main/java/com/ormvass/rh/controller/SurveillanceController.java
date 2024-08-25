package com.ormvass.rh.controller;

import com.ormvass.rh.model.Surveillance;
import com.ormvass.rh.service.SurveillanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/surveillances")
public class SurveillanceController {
	
    @Autowired
    private SurveillanceService surveillanceService;

    @GetMapping
    public List<Surveillance> getAllSurveillances() {
        return surveillanceService.getAllSurveillances();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Surveillance> getSurveillanceById(@PathVariable int id) {
        Optional<Surveillance> surveillance = surveillanceService.getSurveillanceById(id);
        return surveillance.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Surveillance createSurveillance(@RequestBody Surveillance surveillance) {
        return surveillanceService.saveSurveillance(surveillance);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSurveillance(@PathVariable int id) {
        if (surveillanceService.getSurveillanceById(id).isPresent()) {
            surveillanceService.deleteSurveillance(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
