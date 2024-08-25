package com.ormvass.rh.service;

import com.ormvass.rh.model.Besoin;
import com.ormvass.rh.repository.BesoinRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BesoinService {
	  @Autowired
	    private BesoinRepository besoinRepository;

	    public List<Besoin> getAllBesoin() {
	        return besoinRepository.findAll();
	    }

	    public Optional<Besoin> getBesoinById(int id) {
	        return besoinRepository.findById(id);
	    }

	    public Besoin saveBesoin(Besoin besoin) {
	        System.out.println("Saving besoin: " + besoin);
	        return besoinRepository.save(besoin);
	    }

	    public void deleteBesoin(int id) {
	        System.out.println("Deleting besoin with ID: " + id);
	        besoinRepository.deleteById(id);
	    }
}
