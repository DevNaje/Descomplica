package treinamento;

public class descomplica {

    public static void main(String[] args) {

        //boolean a = true;
        //boolean b = false;

        // Operador lógico && (And (E) lógico)
      // System.out.println("a && b: " + (a && b)); //False, por que b é false

        // Operador lógico || (Our (ou) lógico)
       // System.out.println("a || b: " + (a || b)); //true, por que b é true

        // Operador lógico || (Not (não) lógico)
       // System.out.println("!b: " + (!b)); //true, por que NÃO (!) b é true, ou ent, a é true

        // Operador lógico || (Not (não) lógico)
       // System.out.println("!a: " + (!a)); //false, por que NÃO (!) a é false ou ent, b é true

        int numero_par = 29;
       String status = (numero_par % 2 == 0) ? "O numero é par" : "O numero é impar";
       System.out.println(status);

    }
}
