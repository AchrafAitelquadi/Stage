package com.ormvass.rh.service;

import com.ormvass.rh.model.Candidature;
import com.ormvass.rh.repository.CandidatureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CandidatureService {

    @Autowired
    private CandidatureRepository candidatureRepository;

    public List<Candidature> getAllCandidatures() {
        return candidatureRepository.findAll();
    }

    public Optional<Candidature> getCandidatureById(int id) {
        return candidatureRepository.findById(id);
    }

    public Candidature saveCandidature(Candidature candidature) {
        System.out.println("Saving Candidat: " + candidature);
        return candidatureRepository.save(candidature);
    }

    public void deleteCandidature(int id) {
        System.out.println("Deleting Candidature with ID: " + id);
        candidatureRepository.deleteById(id);
    }
}
