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
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.juanpeter.restaurantManager.models.Pedido;
import br.com.juanpeter.restaurantManager.models.TipoSituacaoPedido;
import br.com.juanpeter.restaurantManager.repository.PedidosRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@Api
@RestController
@RequestMapping(path = "/api/pedidos")
public class PedidoResources {

    @Autowired
    private PedidosRepository pedidosRepository;

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
    
    @ApiOperation("Altera a situação do pedido para CANCELADO")
    @PatchMapping(path = "/cancelar/{id}")
    public ResponseEntity<Pedido> updateSituacaoPedidoToCancelado(@PathVariable Long id) {
	    return pedidosRepository.findById(id)
    		.map(pedido -> {
    	        pedido.setSituacaoPedido(TipoSituacaoPedido.CANCELADO);
                Pedido pedidoAtual = pedidosRepository.save(pedido);
                return ResponseEntity.ok().body(pedidoAtual);
    		}).orElse(ResponseEntity.notFound().build());
    }

    @ApiOperation("Altera a situação do pedido para CONCLUIDO")
    @PatchMapping(path = "/concluir/{id}")
    public ResponseEntity<Pedido> updateSituacaoPedidoToConcluido(@PathVariable Long id) {
	    return pedidosRepository.findById(id)
    		.map(pedido -> {
    	        pedido.setSituacaoPedido(TipoSituacaoPedido.CONCLUIDO);
                Pedido pedidoAtual = pedidosRepository.save(pedido);
                return ResponseEntity.ok().body(pedidoAtual);
    		}).orElse(ResponseEntity.notFound().build());
    }
    
//    @ApiOperation("Altera todos os pedidos NOVO e CONCLUIDO para FECHADO")
//    @PatchMapping(path = "/fechar")
//    public ResponseEntity<List<Pedido>> updateAllSituacaoPedidoToFechado() {
//        List<Pedido> pedidos = pedidosRepository.findAll();
//        pedidos.stream()
//			.filter(
//				pedido -> pedido.getSituacaoPedido()
//				.equals(TipoSituacaoPedido.CANCELADO)
//			)
//			.map(
//				pedido -> {
//					pedido.setSituacaoPedido(TipoSituacaoPedido.FECHADO);
//					return pedidos.add(pedido);
//			});
//        	return new ResponseEntity<>(pedidos, HttpStatus.OK); 
//    }
    
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

