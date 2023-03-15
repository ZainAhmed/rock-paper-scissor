package com.zain.sohail.rockpaperscissor.model;

import jakarta.persistence.*;

import java.util.Objects;
@Entity
public class GameStatus {
    @Id
    @SequenceGenerator(name = "status_id_sequence", sequenceName = "status_id_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator =  "status_id_sequence")
    private Integer id;
    private Integer draw;
    private Integer lose;
    private Integer won;

    public GameStatus(Integer id, Integer draw, Integer lose, Integer won) {
        this.id = id;
        this.draw = draw;
        this.lose = lose;
        this.won = won;
    }

    public GameStatus( Integer draw, Integer lose, Integer won) {
        this.draw = draw;
        this.lose = lose;
        this.won = won;
    }

    public GameStatus() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getDraw() {
        return draw;
    }

    public void setDraw(Integer draw) {
        this.draw = draw;
    }

    public Integer getLose() {
        return lose;
    }

    public void setLose(Integer lose) {
        this.lose = lose;
    }

    public Integer getWon() {
        return won;
    }

    public void setWon(Integer won) {
        this.won = won;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        GameStatus that = (GameStatus) o;
        return Objects.equals(id, that.id) && Objects.equals(draw, that.draw) && Objects.equals(lose, that.lose) && Objects.equals(won, that.won);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, draw, lose, won);
    }

    @Override
    public String toString() {
        return "GameStatus{" +
                "id=" + id +
                ", draw=" + draw +
                ", lose=" + lose +
                ", won=" + won +
                '}';
    }
}
