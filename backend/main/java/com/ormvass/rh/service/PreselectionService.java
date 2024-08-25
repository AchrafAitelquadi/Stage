package com.ormvass.rh.service;

import com.ormvass.rh.model.Preselection;
import com.ormvass.rh.repository.PreselectionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PreselectionService {

    @Autowired
    private PreselectionRepository preselectionRepository;

    public List<Preselection> getAllPreselections() {
        return preselectionRepository.findAll();
    }

    public Optional<Preselection> getPreselectionById(int id) {
        return preselectionRepository.findById(id);
    }

    public Preselection savePreselection(Preselection preselection) {
        return preselectionRepository.save(preselection);
    }

    public void deletePreselection(int id) {
    	preselectionRepository.deleteById(id);
    }
}
