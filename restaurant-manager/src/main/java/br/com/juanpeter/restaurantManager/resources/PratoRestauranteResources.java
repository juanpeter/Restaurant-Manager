package br.com.juanpeter.restaurantManager.resources;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.juanpeter.restaurantManager.models.Pedido;
import br.com.juanpeter.restaurantManager.models.PratoRestaurante;
import br.com.juanpeter.restaurantManager.repository.PratosRestauranteRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@Api
@RestController
@RequestMapping(path = "/api/pratos")
public class PratoRestauranteResources {

    @Autowired
    private PratosRestauranteRepository pratosRestauranteRepository;
    
    @ApiOperation("Cadastrar um novo prato")
    @PostMapping(path = "/cadastrar")
    public ResponseEntity<PratoRestaurante> save(@RequestBody PratoRestaurante novoPrato) {
    	pratosRestauranteRepository.save(novoPrato);
    	
    	return new ResponseEntity<>(novoPrato, HttpStatus.OK);
    }
    
    @ApiOperation("Consulta todos os pratos, retornando uma lista.")
    @GetMapping
    public ResponseEntity<List<PratoRestaurante>> getAll() {
        List<PratoRestaurante> pratos = pratosRestauranteRepository.findAll();
        return new ResponseEntity<>(pratos, HttpStatus.OK);
    }
    
    @ApiOperation("Exclui um prato pelo id.")
    @DeleteMapping(path = "excluir/{id}")
    public ResponseEntity<Optional<Pedido>> deleteById(@PathVariable Long id) {
    	try {
          pratosRestauranteRepository.deleteById(id);
          return new ResponseEntity<>(HttpStatus.OK);
    	} catch (NoSuchElementException e) {
          return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    	}
    }
    
    @ApiOperation("Altera as informações de um prato, por id")
    @PutMapping(path = "/alterar/{id}")
    public ResponseEntity<PratoRestaurante> updatePrato(@PathVariable Long id, @RequestBody PratoRestaurante pratoAtualizado) {
	    return pratosRestauranteRepository.findById(id)
			.map(prato -> {
				prato.setNomePrato(pratoAtualizado.getNomePrato());
				prato.setValorPrato(pratoAtualizado.getValorPrato());
				PratoRestaurante pratoAtual = pratosRestauranteRepository.save(prato);
	            return ResponseEntity.ok().body(pratoAtual);
			}).orElse(ResponseEntity.notFound().build());
    }
    
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleValidationExceptions(
        MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return errors;
    }
}
