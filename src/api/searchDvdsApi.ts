import {Dvd} from "../types/Dvd";

export default function searchDvdsApi(): Promise<Dvd[]> {
    return new Promise((resolve) => {
        setTimeout(() => {            
            resolve(DvdData);
        }, 1000);
    });
}

export const DvdData: Dvd[] = [
    {
        id: 1,
        title: "The Shawshank Redemption",
        year: 1994,
        genre: "Drama",
        director: "Frank Darabont",
        cast: "Tim Robbins, Morgan Freeman",
        notes: "Based on Stephen King's novella, 'Rita Hayworth and Shawshank Redemption,' this powerful film tells the story of Andy Dufresne, a banker sentenced to life in Shawshank State Penitentiary for a crime he didn't commit. Inside the prison, Andy forms an unlikely friendship with fellow inmate Red, as he navigates the brutal realities of life behind bars. Through resilience, hope, and determination, Andy plots his escape while exposing corruption within the system. A timeless tale of friendship, redemption, and the triumph of the human spirit, 'The Shawshank Redemption' is a must-watch classic."
    },
    {
        id: 2,
        title: "The Godfather",
        year: 1972,
        genre: "Crime",
        director: "Francis Ford Coppola",
        cast: "Marlon Brando, Al Pacino, James Caan",
        notes: "Widely regarded as one of the greatest films of all time, this mob drama, based on Mario Puzo's novel of the same name, focuses on the powerful Italian-American crime family of Don Vito Corleone. When the don's youngest son, Michael, reluctantly joins the Mafia, he becomes involved in the inevitable cycle of violence and betrayal. Although Michael tries to maintain a normal relationship with his wife, Kay, he is drawn deeper into the family business."
    },
    {
        id: 3,
        title: "The Dark Knight",
        year: 2008,
        genre: "Action",
        director: "Christopher Nolan",
        cast: "Christian Bale, Heath Ledger, Aaron Eckhart",
        notes: "With the help of allies Lt. Jim Gordon and DA Harvey Dent, Batman has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism."
    },
    {
        id: 4,
        title: "Pulp Fiction",
        year: 1994,
        genre: "Crime",
        director: "Quentin Tarantino",
        cast: "John Travolta, Uma Thurman, Samuel L. Jackson",
        notes: "A cult classic, 'Pulp Fiction' weaves interconnected stories of Los Angeles mobsters, small-time criminals, and a mysterious briefcase. Known for its nonlinear narrative and witty dialogue, the film explores themes of redemption, violence, and pop culture."
    },
    {
        id: 5,
        title: "The Lord of the Rings: The Return of the King",
        year: 2003,
        genre: "Fantasy",
        director: "Peter Jackson",
        cast: "Elijah Wood, Ian McKellen, Viggo Mortensen",
        notes: "The epic conclusion to the 'Lord of the Rings' trilogy, 'The Return of the King' follows Frodo and Sam as they continue their journey to Mount Doom to destroy the One Ring. Meanwhile, Aragorn must fulfill his destiny as the rightful king of Gondor."
    },
    {
        id: 6,
        title: "Forrest Gump",
        year: 1994,
        genre: "Drama",
        director: "Robert Zemeckis",
        cast: "Tom Hanks, Robin Wright, Gary Sinise",
        notes: "Spanning decades of American history, 'Forrest Gump' follows the remarkable life of a simple man with a low IQ. From his childhood in Alabama to his time serving in Vietnam and beyond, Forrest's journey touches the lives of those around him in unexpected ways."
    },
    {
        id: 7,
        title: "Inception",
        year: 2010,
        genre: "Science Fiction",
        director: "Christopher Nolan",
        cast: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
        notes: "In a world where technology allows the manipulation of dreams, a skilled thief is tasked with planting an idea into the mind of a corporate heir. As the boundaries between reality and imagination blur, he faces his own inner demons."
    },
    {
        id: 8,
        title: "Schindler's List",
        year: 1993,
        genre: "Biography",
        director: "Steven Spielberg",
        cast: "Liam Neeson, Ben Kingsley, Ralph Fiennes",
        notes: "Based on the true story of Oskar Schindler, a German businessman who saved over a thousand Polish Jews during the Holocaust by employing them in his factories. The film is a powerful portrayal of courage, humanity, and the atrocities of war."
    },
    {
        id: 9,
        title: "The Matrix",
        year: 1999,
        genre: "Science Fiction",
        director: "The Wachowskis",
        cast: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
        notes: "In a dystopian future where reality is simulated by machines, a computer hacker discovers the truth and joins a rebellion against the oppressive system. Blending philosophy with groundbreaking action, 'The Matrix' explores the nature of perception and freedom."
    },
    {
        id: 10,
        title: "Fight Club",
        year: 1999,
        genre: "Drama",
        director: "David Fincher",
        cast: "Brad Pitt, Edward Norton, Helena Bonham Carter",
        notes: "A disenchanted office worker forms an underground fight club as a form of radical therapy, leading to an anarchic spiral of violence and self-discovery. 'Fight Club' is a provocative exploration of modern masculinity and societal disillusionment."
    }
]