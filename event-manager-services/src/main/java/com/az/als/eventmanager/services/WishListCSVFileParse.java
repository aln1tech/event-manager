package com.az.als.eventmanager.services;

import com.az.als.eventmanager.entity.WishItem;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

@Service
public class WishListCSVFileParse {
    private static final String[] FILE_HEADER_MAPPING = {"School Name", "Item Name", "Quanity"};

    public List<WishItem> parse(InputStream wishListCSVFile) {
        List<WishItem> wishItemList = new ArrayList<>();
        CSVParser csvFileParser = null;
        CSVFormat csvFileFormat = CSVFormat.DEFAULT.withHeader(FILE_HEADER_MAPPING);

        try {
            csvFileParser = new CSVParser(new InputStreamReader(wishListCSVFile), csvFileFormat);
            List csvRecords = csvFileParser.getRecords();
            for (int i = 1; i < csvRecords.size(); i++) {
                CSVRecord record = (CSVRecord) csvRecords.get(i);
                WishItem wishItem = new WishItem();
                wishItem.setSchoolName(record.get(FILE_HEADER_MAPPING[0]));
                wishItem.setItemName(record.get(FILE_HEADER_MAPPING[1]));
                wishItem.setQuanity(Integer.valueOf(record.get(FILE_HEADER_MAPPING[2])));
                wishItemList.add(wishItem);
            }
            return wishItemList;
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                csvFileParser.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return wishItemList;
    }
}
