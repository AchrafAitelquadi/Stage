package com.ormvass.rh.controller;

import com.ormvass.rh.model.Epreuve;
import com.ormvass.rh.service.EpreuveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/epreuves")
public class EpreuveController {
	
	  @Autowired
	    private EpreuveService epreuveService;

	    @GetMapping
	    public List<Epreuve> getAllEpreuve() {
	        return epreuveService.getAllEpreuve();
	    }

	    @GetMapping("/{id}")
	    public ResponseEntity<Epreuve> getEpreuveById(@PathVariable int id) {
	        Optional<Epreuve> epreuve = epreuveService.getEpreuveById(id);
	        return epreuve.map(ResponseEntity::ok)
	                .orElseGet(() -> ResponseEntity.notFound().build());
	    }

	    @PostMapping
	    public Epreuve createEpreuve(@RequestBody Epreuve epreuve) {
	        return epreuveService.saveEpreuve(epreuve);
	    }

	    @DeleteMapping("/{id}")
	    public ResponseEntity<Void> deleteEpreuve(@PathVariable int id) {
	        if (epreuveService.getEpreuveById(id).isPresent()) {
	        	epreuveService.deleteEpreuve(id);
	            return ResponseEntity.noContent().build();
	        } else {
	            return ResponseEntity.notFound().build();
	        }
	    }

}
