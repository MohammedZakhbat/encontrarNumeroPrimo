function isPrime(num) {
      if (num < 2) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    }

    function run() {
      const input = document.getElementById("arrayInput").value;
      const arr = input.split(",").map(n => parseInt(n.trim()));

      let i = 0;
      let found = false;
      let prime;

      document.getElementById("status").textContent = "Analizando...";

      do {
        if (isPrime(arr[i])) {
          prime = arr[i];
          found = true;
        }
        i++;
      } while (!found && i < arr.length);

      document.getElementById("result").textContent =
        found ? prime : "Ninguno";

      document.getElementById("status").textContent =
        found ? "Primo encontrado" : "Sin resultados";
    }