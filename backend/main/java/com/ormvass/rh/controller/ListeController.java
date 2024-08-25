package com.ormvass.rh.controller;

import com.ormvass.rh.model.Liste;
import com.ormvass.rh.service.ListeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/listes")
public class ListeController {
	
	  @Autowired
	    private ListeService listeService;

	    @GetMapping
	    public List<Liste> getAllListes() {
	        return listeService.getAllListes();
	    }

	    @GetMapping("/{id}")
	    public ResponseEntity<Liste> getListeById(@PathVariable int id) {
	        Optional<Liste> liste = listeService.getListeById(id);
	        return liste.map(ResponseEntity::ok)
	                .orElseGet(() -> ResponseEntity.notFound().build());
	    }

	    @PostMapping
	    public Liste createJury(@RequestBody Liste liste) {
	        return listeService.saveListe(liste);
	    }

	    @DeleteMapping("/{id}")
	    public ResponseEntity<Void> deleteListe(@PathVariable int id) {
	        if (listeService.getListeById(id).isPresent()) {
	        	listeService.deleteListe(id);
	            return ResponseEntity.noContent().build();
	        } else {
	            return ResponseEntity.notFound().build();
	        }
	    }

}
