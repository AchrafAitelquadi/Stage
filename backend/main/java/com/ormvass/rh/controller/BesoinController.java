package com.ormvass.rh.controller;

import com.ormvass.rh.model.Besoin;
import com.ormvass.rh.service.BesoinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/besoins")
public class BesoinController {
	
	  @Autowired
	    private BesoinService besoinService;

	    @GetMapping
	    public List<Besoin> getAllBesoin() {
	        return besoinService.getAllBesoin();
	    }

	    @GetMapping("/{id}")
	    public ResponseEntity<Besoin> getBesoinById(@PathVariable int id) {
	        Optional<Besoin> besoin = besoinService.getBesoinById(id);
	        return besoin.map(ResponseEntity::ok)
	                .orElseGet(() -> ResponseEntity.notFound().build());
	    }

	    @PostMapping
	    public Besoin createBesoin(@RequestBody Besoin besoin) {
	        return besoinService.saveBesoin(besoin);
	    }

	    @DeleteMapping("/{id}")
	    public ResponseEntity<Void> deleteBesoin(@PathVariable int id) {
	        if (besoinService.getBesoinById(id).isPresent()) {
	           besoinService.deleteBesoin(id);
	            return ResponseEntity.noContent().build();
	        } else {
	            return ResponseEntity.notFound().build();
	        }
	    }

}
