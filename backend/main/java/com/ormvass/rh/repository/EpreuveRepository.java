package com.ormvass.rh.repository;

import com.ormvass.rh.model.Epreuve;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface EpreuveRepository extends JpaRepository<Epreuve, Integer> {
}