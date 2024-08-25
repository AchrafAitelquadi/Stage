package com.ormvass.rh.controller;

import com.ormvass.rh.model.Membre;
import com.ormvass.rh.service.MembreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/membres")
public class MembreController {
	
	  @Autowired
	    private MembreService membreService;

	    @GetMapping
	    public List<Membre> getAllMembres() {
	        return membreService.getAllMembres();
	    }

	    @GetMapping("/{id}")
	    public ResponseEntity<Membre> getMembreById(@PathVariable int id) {
	        Optional<Membre> membre = membreService.getMembreById(id);
	        return membre.map(ResponseEntity::ok)
	                .orElseGet(() -> ResponseEntity.notFound().build());
	    }

	    @PostMapping
	    public Membre createMembre(@RequestBody Membre membre) {
	        return membreService.saveMembre(membre);
	    }

	    @DeleteMapping("/{id}")
	    public ResponseEntity<Void> deleteMembre(@PathVariable int id) {
	        if (membreService.getMembreById(id).isPresent()) {
	        	membreService.deleteMembre(id);
	            return ResponseEntity.noContent().build();
	        } else {
	            return ResponseEntity.notFound().build();
	        }
	    }

}
