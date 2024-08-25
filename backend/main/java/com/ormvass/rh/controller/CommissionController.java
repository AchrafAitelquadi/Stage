package com.ormvass.rh.controller;
 
import com.ormvass.rh.model.Commission;
import com.ormvass.rh.service.CommissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/commissions")
public class CommissionController {

    @Autowired
    private CommissionService commissionService;

    @GetMapping
    public List<Commission> getAllCommissions() {
        return commissionService.getAllCommissions();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Commission> getCommissionById(@PathVariable int id) {
        System.out.println("Fetching Commission with ID: " + id); // Logging example
        Optional<Commission> commission = commissionService.getCommissionById(id);
        return commission.map(ResponseEntity::ok)
                .orElseGet(() -> {
                    System.out.println("Commission not found with ID: " + id); // Logging example
                    return ResponseEntity.notFound().build();
                });
    }


    @PostMapping
    public Commission createCommission(@RequestBody Commission commission) {
        return commissionService.saveCommission(commission);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCommission(@PathVariable int id) {
        if (commissionService.getCommissionById(id).isPresent()) {
        	commissionService.deleteCommission(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
