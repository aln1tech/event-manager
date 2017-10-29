package com.az.als.eventmanager.controller;

import com.az.als.eventmanager.entity.WishItem;
import com.az.als.eventmanager.services.StorageService;
import com.az.als.eventmanager.services.WishListCSVFileParse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api")
public class WishTreeController {

    private static final Logger LOGGER = LoggerFactory.getLogger(WishTreeController.class);
    @Autowired
    StorageService storageService;
    @Autowired
    WishListCSVFileParse wishListCSVFileParse;
    List<String> files = new ArrayList<String>();

    @PostMapping("/new-event")
    public ResponseEntity<String> createWishList(@RequestParam("item-list-file") MultipartFile file,
                                                 @RequestParam("event-name") String eventName,
                                                 @RequestParam("event-last-date") Date eventLastDate) {
        LOGGER.info("item-list-file :{} - event-name:{} - event-last-date:{}", file.getOriginalFilename(), eventName, eventLastDate);
        String message = "";
        try {
   /*         storageService.store(file);
            files.add(file.getOriginalFilename());*/
            List<WishItem> wishList = wishListCSVFileParse.parse(file.getInputStream());
            LOGGER.info("WishList :{}", wishList);
            return ResponseEntity.status(HttpStatus.OK).body(message);
        } catch (Exception e) {
            message = "FAIL to upload " + file.getOriginalFilename() + "!";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(message);
        }
    }
}
