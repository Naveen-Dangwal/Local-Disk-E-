package org.AJP.dto;
import org.AJP.model.Transaction;
import org.AJP.model.Book;
import org.AJP.model.Member;

public class TransactionDTO {

    private Transaction transaction;
    private Book book;
    private Member member;

    public TransactionDTO(Transaction transaction, Book book, Member member) {
        this.transaction = transaction;
        this.book = book;
        this.member = member;
    }

    // Getters and setters
    public Transaction getTransaction() {
        return transaction;
    }

    public void setTransaction(Transaction transaction) {
        this.transaction = transaction;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    public Member getMember() {
        return member;
    }

    public void setMember(Member member) {
        this.member = member;
    }
}

