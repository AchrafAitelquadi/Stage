package com.ormvass.rh.service;

import com.ormvass.rh.model.Avis;
import com.ormvass.rh.repository.AvisRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AvisService {
	  @Autowired
	    private AvisRepository avisRepository;

	    public List<Avis> getAllAvis() {
	        return avisRepository.findAll();
	    }

	    public Optional<Avis> getAvisById(int id) {
	        return avisRepository.findById(id);
	    }

	    public Avis saveAvis(Avis avis) {
	        System.out.println("Saving avis: " + avis);
	        return avisRepository.save(avis);
	    }

	    public void deleteAvis(int id) {
	        System.out.println("Deleting avis with ID: " + id);
	        avisRepository.deleteById(id);
	    }
}
