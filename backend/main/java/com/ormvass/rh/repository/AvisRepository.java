package com.ormvass.rh.repository;

import com.ormvass.rh.model.Avis;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface AvisRepository extends JpaRepository<Avis, Integer> {
}