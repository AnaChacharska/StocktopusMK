package mk.finki.ukim.mk.stocktopusbackend.web.rest;

import lombok.RequiredArgsConstructor;
import mk.finki.ukim.mk.stocktopusbackend.model.dto.StockDetailsDTO;
import mk.finki.ukim.mk.stocktopusbackend.service.StockDetailsService;
import mk.finki.ukim.mk.stocktopusbackend.service.converter.StockDetailsConverterService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/stock-details")
@RequiredArgsConstructor
public class StockDetailsController {
    private final StockDetailsService stockDetailsService;
    private final StockDetailsConverterService stockDetailsConverterService;

    @GetMapping
    public Page<StockDetailsDTO> findAll(Pageable pageable) {
        return this.stockDetailsService.findAll(pageable)
                .map(stockDetailsConverterService::convertToStockDetailsDTO);
    }
}
