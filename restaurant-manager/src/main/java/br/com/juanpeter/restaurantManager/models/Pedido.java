package br.com.juanpeter.restaurantManager.models;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
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
	
	private String nomePrato;
	private Double valorPrato;
	
	@Enumerated(EnumType.STRING)
	private TipoSituacaoPedido situacaoPedido;

	private int mesa;
 
}
