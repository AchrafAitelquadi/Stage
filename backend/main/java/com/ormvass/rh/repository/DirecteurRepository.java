package com.ormvass.rh.repository;

import com.ormvass.rh.model.Directeur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DirecteurRepository extends JpaRepository<Directeur, Integer> {
}