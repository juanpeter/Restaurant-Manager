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
public class PratoRestaurante {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@GenericGenerator(name ="increment", strategy = "incremet")
	private Long idPrato;
	
	private String nomePrato;
	private Double valorPrato;
}
