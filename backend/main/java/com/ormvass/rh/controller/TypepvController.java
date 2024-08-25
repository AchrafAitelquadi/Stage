package com.ormvass.rh.controller;

import com.ormvass.rh.model.Typepv;
import com.ormvass.rh.service.TypepvService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/typepvs")
public class TypepvController {

    @Autowired
    private TypepvService typepvService;

    @GetMapping
    public List<Typepv> getAllTypepvs() {
        return typepvService.getAllTypepvs();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Typepv> getTypepvById(@PathVariable int id) {
        Optional<Typepv> typepv = typepvService.getTypepvById(id);
        return typepv.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Typepv createTypepv(@RequestBody Typepv typepv) {
        return typepvService.saveTypepv(typepv);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTypepv(@PathVariable int id) {
        if (typepvService.getTypepvById(id).isPresent()) {
            typepvService.deleteTypepv(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
