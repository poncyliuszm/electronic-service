package mp.backend.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import mp.backend.model.Order;
import mp.backend.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/order")
public class OrderController {

    private final OrderRepository orderRepository;

    @Autowired
    public OrderController(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @GetMapping("/list")
    public List<Order> list() {
        return orderRepository.findAll();
    }

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @GetMapping("/{id}")
    public Order getOne(@PathVariable("id") Integer id) {
        return orderRepository.findById(id).orElse(null);
    }

    @PostMapping("/save")
    public void save(@RequestBody Order Order) {
        orderRepository.save(Order);
    }

    @PutMapping()
    public Order update(@RequestBody Order Order) {
        return orderRepository.save(Order);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id) {
        orderRepository.deleteById(id);
    }
}
