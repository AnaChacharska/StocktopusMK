package mk.finki.ukim.mk.stocktopusbackend.web.rest;

import lombok.RequiredArgsConstructor;
import mk.finki.ukim.mk.stocktopusbackend.model.dto.StockDTO;
import mk.finki.ukim.mk.stocktopusbackend.model.dto.StockPercentageDTO;
import mk.finki.ukim.mk.stocktopusbackend.service.StockService;
import mk.finki.ukim.mk.stocktopusbackend.service.converter.StockConverterService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/stocks")
@RequiredArgsConstructor
public class StockController {
    private final StockService stockService;
    private final StockConverterService stockConverterService;

    @GetMapping
    public Page<StockDTO> findAll(Pageable pageable) {
        return this.stockService.findAll(pageable)
                .map(stockConverterService::convertToStockDTO);
    }
    @GetMapping("/getBestFour")
    public List<StockPercentageDTO> findBestFour(){
        return this.stockService.findBestFour();
    }

    @DeleteMapping("/{id}")
    public void deleteStock(@PathVariable Long id){
        stockService.deleteById(id);
    }

    @PostMapping("/edit/{id}")
    public StockDTO editStock(@PathVariable Long id, @RequestBody StockDTO stockDTO){
        return stockConverterService.convertToStockDTO(stockService.editStockById(id, stockDTO));
    }
}
