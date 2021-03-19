package br.com.juanpeter.restaurantManager.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.juanpeter.restaurantManager.models.PratoRestaurante;

public interface PratosRestauranteRepository extends JpaRepository<PratoRestaurante, Long>{

}
