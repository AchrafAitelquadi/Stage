package com.ormvass.rh.controller;

import com.ormvass.rh.model.Serv;
import com.ormvass.rh.service.ServService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/services")
public class ServController {
	
	  @Autowired
	    private ServService serviceService;

	    @GetMapping
	    public List<Serv> getAllService() {
	        return serviceService.getAllService();
	    }

	    @GetMapping("/{id}")
	    public ResponseEntity<Serv> getServiceById(@PathVariable int id) {
	        Optional<Serv> service = serviceService.getServiceById(id);
	        return service.map(ResponseEntity::ok)
	                .orElseGet(() -> ResponseEntity.notFound().build());
	    }

	    @PostMapping
	    public Serv createService(@RequestBody Serv service) {
	        return serviceService.saveService(service);
	    }

	    @DeleteMapping("/{id}")
	    public ResponseEntity<Void> deleteService(@PathVariable int id) {
	        if (serviceService.getServiceById(id).isPresent()) {
	        	serviceService.deleteService(id);
	            return ResponseEntity.noContent().build();
	        } else {
	            return ResponseEntity.notFound().build();
	        }
	    }

}
