package com.ormvass.rh.service;

import com.ormvass.rh.model.Surveillance;
import com.ormvass.rh.repository.SurveillanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SurveillanceService {

    @Autowired
    private SurveillanceRepository surveillanceRepository;

    public List<Surveillance> getAllSurveillances() {
        return surveillanceRepository.findAll();
    }

    public Optional<Surveillance> getSurveillanceById(int id) {
        return surveillanceRepository.findById(id);
    }

    public Surveillance saveSurveillance(Surveillance surveillance) {
        return surveillanceRepository.save(surveillance);
    }

    public void deleteSurveillance(int id) {
        surveillanceRepository.deleteById(id);
    }
}
