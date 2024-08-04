package com.stackroute.transactionsmanagement.controller;

import com.stackroute.transactionsmanagement.model.IsolationLevel;
import com.stackroute.transactionsmanagement.service.BankAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.support.TransactionTemplate;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.support.TransactionCallbackWithoutResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/transaction")
public class TransactionController {

    private final BankAccountService bankAccountService;
    private final TransactionTemplate transactionTemplate;

    @Autowired
    public TransactionController(BankAccountService bankAccountService, TransactionTemplate transactionTemplate) {
        this.bankAccountService = bankAccountService;
        this.transactionTemplate = transactionTemplate;
    }

    @PostMapping("/transfer")
    public ResponseEntity<String> transferMoney(@RequestParam Long fromAccountId, @RequestParam Long toAccountId, @RequestParam double amount,@RequestParam IsolationLevel isolationLevel) {
       // use try catch and return status code 200 and "Money transferred successful" message if success
        // return Internal Server Error with "Error during money transfer" error message
    	
    	try {
    		bankAccountService.transferMoney(fromAccountId, toAccountId, amount, isolationLevel);
    		return ResponseEntity.ok("Money transferred successfully");
    	}
    	catch(Exception ex) {
    		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error during money transfer");
    	}

    }

    // Map the IsolationLevel enum to Spring's Isolation enum
    public int mapIsolationLevel(IsolationLevel isolationLevel) {
    	switch(isolationLevel) {
    	case READ_COMMITTED:
    		return Isolation.READ_COMMITTED.value();
    	case READ_UNCOMMITTED:
    		return Isolation.READ_UNCOMMITTED.value();
    	case SERIALIZABLE:
    		return Isolation.SERIALIZABLE.value();
    	case REPEATABLE_READ:
    		return Isolation.REPEATABLE_READ.value();
    	default:
    		return Isolation.DEFAULT.value();
    	
    	}
    }
}
