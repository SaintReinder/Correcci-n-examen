export interface Autores {
    nombre: string;
    libros: Array<string>;
}

export const ListaAutores:Array<Autores>=[
    {
        nombre: "William Shakespeare",
        libros: ["Tragedias", "Coriolano", "Hamlet", "Julio César ", "Macbeth", "Romeo y Julieta", "Tito Andrónico", "Cimbelino", "Como gustéis", "La tempestad"]
    },

    {
        nombre: "Franz Kafka",
        libros: ["Carta al padre","Ante la ley","El proceso","El castillo","La metamorfosis"," Diarios","La condena","Cartas a Milena","El artista del hambre","El Proceso"]
    },

    {
        nombre: "Miguel De Cervantes",
        libros: ["La Galatea","La gitanilla","El ingenioso hidalgo Don Quijote de La Mancha","La Gitanilla","Rinconete y Cortadillo","El coloquio de los perros","El celoso extremeño","La ilustre fregona","Viaje del Parnaso","Los trabajos de Persiles y Sigismunda"]
    },

    {
        nombre: "Dante Alighieri",
        libros: ["Convivio","Divina Comedia","Comedia","Divina Comedia. Infierno","Divina Comedia. Paraíso","Divina Comedia. Pugatorio","Monarchia","De Vulgari Eloquentia","Vida nueva","La Comedia de Dante"]
    },

    {
        nombre: "Paulo Coelho",
        libros: ["El Alquimista","El Peregrino de Compostela","El camino del arquero","Hippie","El Alquimista","El Peregrino de Compostela","Once minutos","Manual del guerrero de la luz"]
    },

    {
        nombre: "Jorge Luis Borges",
        libros: ["El Aleph","Ficciones","Cuentos completos","Historia universal de la infamia","El libro de arena","Poesía completa","El hacedor","Borges profesor","El informe de Brodie","L'Aleph"]
    }

]