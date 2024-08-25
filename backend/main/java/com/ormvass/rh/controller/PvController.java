package com.ormvass.rh.controller;

import com.ormvass.rh.model.Pv;
import com.ormvass.rh.service.PvService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/pvs")
public class PvController {
	
    @Autowired
    private PvService pvService;

    @GetMapping
    public List<Pv> getAllPvs() {
        return pvService.getAllPvs();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Pv> getPvById(@PathVariable int id) {
        Optional<Pv> pv = pvService.getPvById(id);
        return pv.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Pv createPv(@RequestBody Pv pv) {
        return pvService.savePv(pv);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePv(@PathVariable int id) {
        if (pvService.getPvById(id).isPresent()) {
            pvService.deletePv(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
