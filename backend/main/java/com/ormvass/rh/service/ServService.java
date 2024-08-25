package com.ormvass.rh.service;

import com.ormvass.rh.model.Serv;
import com.ormvass.rh.repository.ServRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ServService {
	  @Autowired
	    private ServRepository servRepository;

	    public List<Serv> getAllService() {
	        return servRepository.findAll();
	    }

	    public Optional<Serv> getServiceById(int id) {
	        return servRepository.findById(id);
	    }

	    public Serv saveService(Serv service) {
	        System.out.println("Saving service: " + service);
	        return servRepository.save(service);
	    }

	    public void deleteService(int id) {
	        System.out.println("Deleting service with ID: " + id);
	        servRepository.deleteById(id);
	    }
}
