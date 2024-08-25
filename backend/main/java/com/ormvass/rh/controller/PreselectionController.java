package com.ormvass.rh.controller;

import com.ormvass.rh.model.Preselection;
import com.ormvass.rh.service.PreselectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/preselections")
public class PreselectionController {
	
	  @Autowired
	    private PreselectionService preselectionService;

	    @GetMapping
	    public List<Preselection> getAllPreselections() {
	        return preselectionService.getAllPreselections();
	    }

	    @GetMapping("/{id}")
	    public ResponseEntity<Preselection> getPreselectionById(@PathVariable int id) {
	        Optional<Preselection> preselection = preselectionService.getPreselectionById(id);
	        return preselection.map(ResponseEntity::ok)
	                .orElseGet(() -> ResponseEntity.notFound().build());
	    }

	    @PostMapping
	    public Preselection createPreselection(@RequestBody Preselection preselection) {
	        return preselectionService.savePreselection(preselection);
	    }

	    @DeleteMapping("/{id}")
	    public ResponseEntity<Void> deletePreselection(@PathVariable int id) {
	        if (preselectionService.getPreselectionById(id).isPresent()) {
	        	preselectionService.deletePreselection(id);
	            return ResponseEntity.noContent().build();
	        } else {
	            return ResponseEntity.notFound().build();
	        }
	    }

}
