package mp.backend.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import mp.backend.model.Document;
import mp.backend.repository.DocumentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/document")
public class DocumentController {

    private final DocumentRepository documentRepository;

    @Autowired
    public DocumentController(DocumentRepository documentRepository) {
        this.documentRepository = documentRepository;
    }

    @GetMapping("/list")
    public List<Document> list() {
        return documentRepository.findAll();
    }

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @GetMapping("/{id}")
    public Document getOne(@PathVariable("id") Integer id) {
        return documentRepository.findById(id).orElse(null);
    }

    @PostMapping("/save")
    public void save(@RequestBody Document Document) {
        documentRepository.save(Document);
    }

    @PutMapping()
    public Document update(@RequestBody Document Document) {
        return documentRepository.save(Document);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id) {
        documentRepository.deleteById(id);
    }
}
