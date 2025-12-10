using System;

class Program
{
    // Función que recibe dos parámetros y devuelve el mayor
    static int NumeroMayor(int a, int b)
    {
        if (a > b)
        {
            return a;
        }
        else
        {
            return b;
        }
    }

    static void Main(string[] args)
    {
        // Ejemplo de uso
        Console.WriteLine("Ingrese el primer número:");
        int num1 = int.Parse(Console.ReadLine());

        Console.WriteLine("Ingrese el segundo número:");
        int num2 = int.Parse(Console.ReadLine());

        int mayor = NumeroMayor(num1, num2);

        Console.WriteLine("El número mayor es: " + mayor);
    }
}
