package com.ormvass.rh.repository;

import com.ormvass.rh.model.Membre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface MembreRepository extends JpaRepository<Membre, Integer> {
}