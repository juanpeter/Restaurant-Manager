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
import br.com.juanpeter.restaurantManager.models.TipoSituacaoPedido;
import br.com.juanpeter.restaurantManager.repository.Pedidos;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@Api
@RestController
@RequestMapping(path = "/api/pedidos")
public class PedidoResources {

    @Autowired
    private Pedidos pedidosRepository;

    @ApiOperation("Cadastra um único pedido")
    @PostMapping
    public ResponseEntity<Pedido> save(@RequestBody Pedido pedido) {
    	
    	// Um novo pedido sempre será do tipo NOVO
    	pedido.setSituacaoPedido(TipoSituacaoPedido.NOVO);
    	
        pedidosRepository.save(pedido);
        return new ResponseEntity<>(pedido, HttpStatus.OK);
    }

    @ApiOperation("Consulta todos os pedidos, retornando uma lista.")
    @GetMapping
    public ResponseEntity<List<Pedido>> getAll() {
        List<Pedido> pedidos = pedidosRepository.findAll();
        return new ResponseEntity<>(pedidos, HttpStatus.OK);
    }

    @ApiOperation("Consulta um pedido pelo id.")
    @GetMapping(path = "/{id}")
    public ResponseEntity<Optional<Pedido>> getById(@PathVariable Long id) {
        Optional<Pedido> pedido;
        try {
            pedido = pedidosRepository.findById(id);
            return new ResponseEntity<>(pedido, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    @ApiOperation("Altera a situação do pedido de NOVO para CANCELADO")
    @PutMapping(path = "/pedidos/cancelar/{id}")
    public ResponseEntity<Pedido> updateSituacaoPedidoToCancelado(@PathVariable Long id) {
	    return pedidosRepository.findById(id)
    		.map(pedido -> {
    	        pedido.setSituacaoPedido(TipoSituacaoPedido.CANCELADO);
                Pedido pedidoAtual = pedidosRepository.save(pedido);
                return ResponseEntity.ok().body(pedidoAtual);
    		}).orElse(ResponseEntity.notFound().build());
    }


//    @ApiOperation("Exclui um pedido pelo id.")
//    @DeleteMapping(path = "/{id}")
//    public ResponseEntity<Optional<Pedido>> deleteById(@PathVariable Long id) {
//        try {
//            pedidosRepository.deleteById(id);
//            return new ResponseEntity<>(HttpStatus.OK);
//        } catch (NoSuchElementException e) {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }
//
//
//	    @ApiOperation("Atualiza um pedido pelo id.")
//	    @PutMapping(path = "/{id}")
//	    public ResponseEntity<Pedido> update(@PathVariable Long id, @RequestBody Pedido pedidoAtualizado) {
//	        return pedidosRepository.findById(id)
//	            .map(pedido -> {
//	            pedido.setNome(pedidoAtualizado.getNome());
//	            pedido.setEmail(pedidoAtualizado.getEmail());
//	            pedido.setNota(pedidoAtualizado.getNota());
//	            Pedido pedidoAtual = pedidosRepository.save(pedido);
//	            return ResponseEntity.ok().body(pedidoAtual);
//	        }).orElse(ResponseEntity.notFound().build());
//	    }
//
//    @ResponseStatus(HttpStatus.BAD_REQUEST)
//    @ExceptionHandler(MethodArgumentNotValidException.class)
//    public Map<String, String> handleValidationExceptions(
//        MethodArgumentNotValidException ex) {
//        Map<String, String> errors = new HashMap<>();
//        ex.getBindingResult().getAllErrors().forEach((error) -> {
//            String fieldName = ((FieldError) error).getField();
//            String errorMessage = error.getDefaultMessage();
//            errors.put(fieldName, errorMessage);
//        });
//        return errors;
//    }

}

