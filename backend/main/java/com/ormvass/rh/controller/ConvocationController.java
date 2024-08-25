package com.ormvass.rh.controller;
 
import com.ormvass.rh.model.Convocation;
import com.ormvass.rh.service.ConvocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/convocations")
public class ConvocationController {

    @Autowired
    private ConvocationService convocationService;

    @GetMapping
    public List<Convocation> getAllConvocations() {
        return convocationService.getAllConvocations();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Convocation> getConvocationById(@PathVariable int id) {
        System.out.println("Fetching Convocation with ID: " + id); // Logging example
        Optional<Convocation> convocation = convocationService.getConvocationById(id);
        return convocation.map(ResponseEntity::ok)
                .orElseGet(() -> {
                    System.out.println("Convocation not found with ID: " + id); // Logging example
                    return ResponseEntity.notFound().build();
                });
    }


    @PostMapping
    public Convocation createConvocation(@RequestBody Convocation convocation) {
        return convocationService.saveConvocation(convocation);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteConvocation(@PathVariable int id) {
        if (convocationService.getConvocationById(id).isPresent()) {
        	convocationService.deleteConvocation(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
