package mp.backend.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import mp.backend.model.Category;
import mp.backend.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/category")
public class CategoryController {

    private final CategoryRepository categoryRepository;

    @Autowired
    public CategoryController(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @GetMapping("/list")
    public List<Category> list() {
        return categoryRepository.findAll();
    }

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @GetMapping("/{id}")
    public Category getOne(@PathVariable("id") Integer id) {
        return categoryRepository.findById(id).orElse(null);
    }

    @PostMapping("/save")
    public void save(@RequestBody Category category) {
        categoryRepository.save(category);
    }

    @PutMapping()
    public Category update(@RequestBody Category category) {
        return categoryRepository.save(category);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id) {
        categoryRepository.deleteById(id);
    }
}
