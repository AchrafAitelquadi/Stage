package com.ormvass.rh.service;

import com.ormvass.rh.model.Commission;
import com.ormvass.rh.repository.CommissionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CommissionService {

    @Autowired
    private CommissionRepository commissionRepository;

    public List<Commission> getAllCommissions() {
        return commissionRepository.findAll();
    }

    public Optional<Commission> getCommissionById(int id) {
        return commissionRepository.findById(id);
    }

    public Commission saveCommission(Commission commission) {
        return commissionRepository.save(commission);
    }

    public void deleteCommission(int id) {
        System.out.println("Deleting Commission with ID: " + id);
        commissionRepository.deleteById(id);
    }
}
