package com.ormvass.rh.repository;

import com.ormvass.rh.model.Besoin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface BesoinRepository extends JpaRepository<Besoin, Integer> {
}