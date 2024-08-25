package com.ormvass.rh.service;

import com.ormvass.rh.model.Jury;
import com.ormvass.rh.repository.JuryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JuryService {

    @Autowired
    private JuryRepository juryRepository;

    public List<Jury> getAllJurys() {
        return juryRepository.findAll();
    }

    public Optional<Jury> getJuryById(int id) {
        return juryRepository.findById(id);
    }

    public Jury saveJury(Jury jury) {
        return juryRepository.save(jury);
    }

    public void deleteJury(int id) {
    	juryRepository.deleteById(id);
    }
}
