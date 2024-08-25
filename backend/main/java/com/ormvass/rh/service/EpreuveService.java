package com.ormvass.rh.service;

import com.ormvass.rh.model.Epreuve;
import com.ormvass.rh.repository.EpreuveRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EpreuveService {
	  @Autowired
	    private EpreuveRepository epreuveRepository;

	    public List<Epreuve> getAllEpreuve() {
	        return epreuveRepository.findAll();
	    }

	    public Optional<Epreuve> getEpreuveById(int id) {
	        return epreuveRepository.findById(id);
	    }

	    public Epreuve saveEpreuve(Epreuve epreuve) {
	        System.out.println("Saving epreuve: " + epreuve);
	        return epreuveRepository.save(epreuve);
	    }

	    public void deleteEpreuve(int id) {
	        System.out.println("Deleting epreuve with ID: " + id);
	        epreuveRepository.deleteById(id);
	    }
}
