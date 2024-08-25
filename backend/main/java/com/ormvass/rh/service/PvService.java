package com.ormvass.rh.service;

import com.ormvass.rh.model.Pv;
import com.ormvass.rh.repository.PvRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PvService {

    @Autowired
    private PvRepository pvRepository;

    public List<Pv> getAllPvs() {
        return pvRepository.findAll();
    }

    public Optional<Pv> getPvById(int id) {
        return pvRepository.findById(id);
    }

    public Pv savePv(Pv pv) {
        return pvRepository.save(pv);
    }

    public void deletePv(int id) {
        pvRepository.deleteById(id);
    }
}
