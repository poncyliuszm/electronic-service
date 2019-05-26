package mp.backend.repository;

import mp.backend.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClientRepository extends JpaRepository<Client, Integer> {

    @Query(value = "select k.* from klient k left outer join pracownik p on p.ID_KLIENT=k.ID_KLIENT where p.ID_KLIENT is null", nativeQuery = true)
    List<Client> findAllWithoutUsers();
}