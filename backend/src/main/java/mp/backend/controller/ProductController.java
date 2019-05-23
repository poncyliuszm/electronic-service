package mp.backend.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import mp.backend.model.Product;
import mp.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
public class ProductController {

    private final ProductRepository productRepository;

    @Autowired
    public ProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @GetMapping("/list")
    public List<Product> list() {
        return productRepository.findAll();
    }

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @GetMapping("/{id}")
    public Product getOne(@PathVariable("id") Integer id) {
        return productRepository.findById(id).orElse(null);
    }

    @PostMapping("/save")
    public void save(@RequestBody Product product) {
        productRepository.save(product);
    }

    @PutMapping()
    public Product update(@RequestBody Product product) {
        return productRepository.save(product);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id) {
        productRepository.deleteById(id);
    }
}
