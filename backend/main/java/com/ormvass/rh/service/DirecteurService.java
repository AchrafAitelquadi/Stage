package com.ormvass.rh.service;

import com.ormvass.rh.model.Directeur;
import com.ormvass.rh.repository.DirecteurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DirecteurService {

    @Autowired
    private DirecteurRepository directeurRepository;

    public List<Directeur> getAllDirecteurs() {
        return directeurRepository.findAll();
    }

    public Optional<Directeur> getDirecteurById(int id) {
        return directeurRepository.findById(id);
    }

    public Directeur saveDirecteur(Directeur directeur) {
        return directeurRepository.save(directeur);
    }

    public void deleteDirecteur(int id) {
    	directeurRepository.deleteById(id);
    }
}
