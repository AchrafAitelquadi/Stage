package com.ormvass.rh.service;

import com.ormvass.rh.model.Specialite;
import com.ormvass.rh.repository.SpecialiteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SpecialiteService {

    @Autowired
    private SpecialiteRepository specialiteRepository;

    public List<Specialite> getAllSpecialites() {
        return specialiteRepository.findAll();
    }

    public Optional<Specialite> getSpecialiteById(int id) {
        return specialiteRepository.findById(id);
    }

    public Specialite saveSpecialite(Specialite specialite) {
        return specialiteRepository.save(specialite);
    }

    public void deleteSpecialite(int id) {
        specialiteRepository.deleteById(id);
    }
}
