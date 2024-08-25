package com.ormvass.rh.repository;

import com.ormvass.rh.model.Preselection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PreselectionRepository extends JpaRepository<Preselection, Integer> {
}