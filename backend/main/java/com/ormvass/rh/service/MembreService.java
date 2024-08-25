package com.ormvass.rh.service;

import com.ormvass.rh.model.Membre;
import com.ormvass.rh.repository.MembreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MembreService {

    @Autowired
    private MembreRepository membreRepository;

    public List<Membre> getAllMembres() {
        return membreRepository.findAll();
    }

    public Optional<Membre> getMembreById(int id) {
        return membreRepository.findById(id);
    }

    public Membre saveMembre(Membre membre) {
        System.out.println("Saving Membre: " + membre);
        return membreRepository.save(membre);
    }

    public void deleteMembre(int id) {
        System.out.println("Deleting Membre with ID: " + id);
        membreRepository.deleteById(id);
    }
}
