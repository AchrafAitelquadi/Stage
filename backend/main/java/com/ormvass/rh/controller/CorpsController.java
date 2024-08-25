package com.ormvass.rh.controller;
 
import com.ormvass.rh.model.Corps;
import com.ormvass.rh.service.CorpsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/corps")
public class CorpsController {

    @Autowired
    private CorpsService corpsService;

    @GetMapping
    public List<Corps> getAllCorps() {
        return corpsService.getAllCorps();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Corps> getCorpsById(@PathVariable int id) {
        System.out.println("Fetching Corps with ID: " + id); // Logging example
        Optional<Corps> corps = corpsService.getCorpsById(id);
        return corps.map(ResponseEntity::ok)
                .orElseGet(() -> {
                    System.out.println("Corps not found with ID: " + id); // Logging example
                    return ResponseEntity.notFound().build();
                });
    }


    @PostMapping
    public Corps createCorps(@RequestBody Corps corps) {
        return corpsService.saveCorps(corps);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCorps(@PathVariable int id) {
        if (corpsService.getCorpsById(id).isPresent()) {
        	corpsService.deleteCorps(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
