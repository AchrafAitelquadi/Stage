package com.ormvass.rh.controller;

import com.ormvass.rh.model.Option;
import com.ormvass.rh.service.OptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/options")
public class OptionController {
	
	  @Autowired
	    private OptionService optionService;

	    @GetMapping
	    public List<Option> getAllOptions() {
	        return optionService.getAllOptions();
	    }

	    @GetMapping("/{id}")
	    public ResponseEntity<Option> getOptionById(@PathVariable int id) {
	        Optional<Option> option = optionService.getOptionById(id);
	        return option.map(ResponseEntity::ok)
	                .orElseGet(() -> ResponseEntity.notFound().build());
	    }

	    @PostMapping
	    public Option createOption(@RequestBody Option option) {
	        return optionService.saveOption(option);
	    }

	    @DeleteMapping("/{id}")
	    public ResponseEntity<Void> deleteOption(@PathVariable int id) {
	        if (optionService.getOptionById(id).isPresent()) {
	        	optionService.deleteOption(id);
	            return ResponseEntity.noContent().build();
	        } else {
	            return ResponseEntity.notFound().build();
	        }
	    }

}
