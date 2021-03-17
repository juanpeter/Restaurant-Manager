package br.com.juanpeter.restaurantManager.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Pedido {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@GenericGenerator(name ="increment", strategy = "incremet")
	private Long numeroPedido;
	
	
	private String itemRestaurante;
	private Double valor;
	
	private TipoSituacaoPedido situacaoPedido;
	private int mesa;
 
}
