package com.ormvass.rh.service;

import com.ormvass.rh.model.Candidat;
import com.ormvass.rh.repository.CandidatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CandidatService {

    @Autowired
    private CandidatRepository candidatRepository;

    public List<Candidat> getAllCandidats() {
        return candidatRepository.findAll();
    }

    public Optional<Candidat> getCandidatById(int id) {
        return candidatRepository.findById(id);
    }

    public Candidat saveCandidat(Candidat candidat) {
        System.out.println("Saving Candidat: " + candidat);
        return candidatRepository.save(candidat);
    }

    public void deleteCandidat(int id) {
        System.out.println("Deleting Candidat with ID: " + id);
        candidatRepository.deleteById(id);
    }
}
