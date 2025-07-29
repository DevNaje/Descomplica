package io;

import java.util.Scanner;

public class ScannerExemple {
    public static void main (String [] args) {

      //iniciar
      Scanner scanner = new Scanner(System.in);

      // ações de leitura
        System.out.print("Digite o seu nome: ");
        String nome = scanner.nextLine();
        System.out.print("Digite a sua idade : ");
        int idade = scanner.nextInt();

        //ação de saida

        System.out.println("Olá " +nome + " você possui " +idade+ " Anos.");

        scanner.close();
    }




}
