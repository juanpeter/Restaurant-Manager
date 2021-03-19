package br.com.juanpeter.restaurantManager.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.juanpeter.restaurantManager.models.Pedido;

public interface PedidosRepository extends JpaRepository<Pedido, Long>  {

}
