package com.ormvass.rh.service;

import com.ormvass.rh.model.Chefservice;
import com.ormvass.rh.repository.ChefserviceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ChefserviceService {

    @Autowired
    private ChefserviceRepository chefserviceRepository;

    public List<Chefservice> getAllChefservices() {
        return chefserviceRepository.findAll();
    }

    public Optional<Chefservice> getChefserviceById(int id) {
        return chefserviceRepository.findById(id);
    }

    public Chefservice saveChefservice(Chefservice chefservice) {
        return chefserviceRepository.save(chefservice);
    }

    public void deleteChefservice(int id) {
    	chefserviceRepository.deleteById(id);
    }
}
