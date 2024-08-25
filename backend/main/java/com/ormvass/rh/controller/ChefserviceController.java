package com.ormvass.rh.controller;

import com.ormvass.rh.model.Chefservice;
import com.ormvass.rh.service.ChefserviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/chefservices")
public class ChefserviceController {

    @Autowired
    private ChefserviceService chefserviceService;
    

    @GetMapping
    public List<Chefservice> getAllChefservices() {
        return chefserviceService.getAllChefservices();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Chefservice> getChefserviceById(@PathVariable int id) {
        Optional<Chefservice> chefservice = chefserviceService.getChefserviceById(id);
        return chefservice.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Chefservice createChefservice(@RequestBody Chefservice chefservice) {
        return chefserviceService.saveChefservice(chefservice);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteChefservice(@PathVariable int id) {
    	chefserviceService.deleteChefservice(id);
        return ResponseEntity.noContent().build();
    }
}
