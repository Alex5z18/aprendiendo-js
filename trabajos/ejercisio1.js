

        

        function nombreResolucion(ancho, alto) {
            const resoluciones = {
                "7680x4320": "8k",
                "3840x2160": "4k",
                "2560x1440": "wqhd",
                "1920x1080": "fhd",
                "1280x720": "hd"
            };

            const clave = `${ancho}x${alto}`;
            return resoluciones[clave] || "Resolución no reconocida";
        }

        function mostrarResolucion() {
            const ancho = document.getElementById("ancho").value;
            const alto = document.getElementById("alto").value;
            const resultado = nombreResolucion(ancho, alto);
            document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
        }
        

    