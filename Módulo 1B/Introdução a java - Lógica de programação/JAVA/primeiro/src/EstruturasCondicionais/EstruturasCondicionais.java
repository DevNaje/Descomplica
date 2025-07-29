package EstruturasCondicionais;

import java.util.Random;
import java.util.Scanner;

public class EstruturasCondicionais {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        System.out.print("Digite um numero: ");
        int num = scan.nextInt();

        if (num>=10) { System.out.print("O seu numero é maior do que 10");
            ;
        } else System.out.println("O seu numero é menor do que 10");



    }
}
