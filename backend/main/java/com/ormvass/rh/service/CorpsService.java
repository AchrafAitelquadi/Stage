package com.ormvass.rh.service;

import com.ormvass.rh.model.Corps;
import com.ormvass.rh.repository.CorpsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CorpsService {

    @Autowired
    private CorpsRepository corpsRepository;

    public List<Corps> getAllCorps() {
        return corpsRepository.findAll();
    }

    public Optional<Corps> getCorpsById(int id) {
        return corpsRepository.findById(id);
    }

    public Corps saveCorps(Corps corps) {
        System.out.println("Saving Corps: " + corps);
        return corpsRepository.save(corps);
    }

    public void deleteCorps(int id) {
        System.out.println("Deleting Corps with ID: " + id);
        corpsRepository.deleteById(id);
    }
}
