package com.ormvass.rh.repository;

import com.ormvass.rh.model.Pv;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PvRepository extends JpaRepository<Pv, Integer> {
}