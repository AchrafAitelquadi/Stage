package com.ormvass.rh.controller;

import com.ormvass.rh.model.Jury;
import com.ormvass.rh.service.JuryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/jurys")
public class JuryController {
	
	  @Autowired
	    private JuryService juryService;

	    @GetMapping
	    public List<Jury> getAllJurys() {
	        return juryService.getAllJurys();
	    }

	    @GetMapping("/{id}")
	    public ResponseEntity<Jury> getJuryById(@PathVariable int id) {
	        Optional<Jury> jury = juryService.getJuryById(id);
	        return jury.map(ResponseEntity::ok)
	                .orElseGet(() -> ResponseEntity.notFound().build());
	    }

	    @PostMapping
	    public Jury createJury(@RequestBody Jury jury) {
	        return juryService.saveJury(jury);
	    }

	    @DeleteMapping("/{id}")
	    public ResponseEntity<Void> deleteJury(@PathVariable int id) {
	        if (juryService.getJuryById(id).isPresent()) {
	        	juryService.deleteJury(id);
	            return ResponseEntity.noContent().build();
	        } else {
	            return ResponseEntity.notFound().build();
	        }
	    }

}
