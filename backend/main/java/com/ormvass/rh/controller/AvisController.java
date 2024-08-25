package com.ormvass.rh.controller;

import com.ormvass.rh.model.Avis;
import com.ormvass.rh.service.AvisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/avis")
public class AvisController {
	
	  @Autowired
	    private AvisService avisService;

	    @GetMapping
	    public List<Avis> getAllAvis() {
	        return avisService.getAllAvis();
	    }

	    @GetMapping("/{id}")
	    public ResponseEntity<Avis> getAvisById(@PathVariable int id) {
	        Optional<Avis> avis = avisService.getAvisById(id);
	        return avis.map(ResponseEntity::ok)
	                .orElseGet(() -> ResponseEntity.notFound().build());
	    }

	    @PostMapping
	    public Avis createAvis(@RequestBody Avis avis) {
	        return avisService.saveAvis(avis);
	    }

	    @DeleteMapping("/{id}")
	    public ResponseEntity<Void> deleteAvis(@PathVariable int id) {
	        if (avisService.getAvisById(id).isPresent()) {
	            avisService.deleteAvis(id);
	            return ResponseEntity.noContent().build();
	        } else {
	            return ResponseEntity.notFound().build();
	        }
	    }

}
