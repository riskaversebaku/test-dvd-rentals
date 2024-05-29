import {DvdData} from "../searchDvdsApi";
import {Rental} from "../../types/Rental";
import {NewRental} from "../../types/NewRental";
import {validateEmailAddress} from "../../utils/validateEmailAddress";
import {calculateAge} from "../../utils/dateHelpers";

class RentalManager {
    private static rentals: Rental[] = [
        {
            id: crypto.randomUUID(),
            status: "RETURNED",
            createdAt: new Date("2024-02-20T13:16:00Z"),
            dvd: {
                id: 5,
                title: "The Lord of the Rings: The Return of the King",
                year: 2003,
                genre: "Fantasy",
                director: "Peter Jackson",
                cast: "Elijah Wood, Ian McKellen, Viggo Mortensen",
                notes: "The epic conclusion to the 'Lord of the Rings' trilogy, 'The Return of the King' follows Frodo and Sam as they continue their journey to Mount Doom to destroy the One Ring. Meanwhile, Aragorn must fulfill his destiny as the rightful king of Gondor."
            },
            customer: {
                firstName: "Pam",
                lastName: "Beesly",
                dateOfBirth: new Date("1989-01-11"),
                emailAddress: "pambeesly@dundermifflin.com"
            }
        },
        {
            id: crypto.randomUUID(),
            status: "RENTED",
            createdAt: new Date("2024-03-01T15:34:00Z"),
            dvd: {
                id: 4,
                title: "Pulp Fiction",
                year: 1994,
                genre: "Crime",
                director: "Quentin Tarantino",
                cast: "John Travolta, Uma Thurman, Samuel L. Jackson",
                notes: "A cult classic, 'Pulp Fiction' weaves interconnected stories of Los Angeles mobsters, small-time criminals, and a mysterious briefcase. Known for its nonlinear narrative and witty dialogue, the film explores themes of redemption, violence, and pop culture."
            },
            customer: {
                firstName: "Dwight",
                lastName: "Schrute",
                dateOfBirth: new Date("1981-08-03"),
                emailAddress: "dschrute@dundermifflin.com"
            }
        },
        {
            id: crypto.randomUUID(),
            status: "RENTED",
            createdAt: new Date("2024-03-05T10:00:00Z"),
            dvd: {
                id: 3,
                title: "The Dark Knight",
                year: 2008,
                genre: "Action",
                director: "Christopher Nolan",
                cast: "Christian Bale, Heath Ledger, Aaron Eckhart",
                notes: "With the help of allies Lt. Jim Gordon and DA Harvey Dent, Batman has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism."
            },
            customer: {
                firstName: "Michael",
                lastName: "Scott",
                dateOfBirth: new Date("1975-03-15"),
                emailAddress: "mscott@dundermifflin.com"
            }
        }
    ];

    public static rentMovie(newRental: NewRental): Rental {
        const dvd = DvdData.find((dvd) => dvd.id === newRental.dvdId);
        if (!dvd) throw Error("DVD not found");
        
        if (!validateEmailAddress(newRental.customer?.emailAddress)) throw Error("Invalid email address");
        if (calculateAge(newRental.customer?.dateOfBirth!) < 18) throw Error("Customer must be 18 or older");

        const rental: Rental = {
            id: crypto.randomUUID(),
            dvd: dvd,
            customer: newRental.customer!,
            createdAt: new Date(),
            status: "RENTED"
        };

        RentalManager.rentals.push(rental);

        return rental;
    }

    public static returnMovie(rentalId: string) {
        const rental = RentalManager.rentals.find((rental) => rental.id === rentalId);
        if (!rental) throw Error("Rental not found");
        if (rental.status === "RETURNED") throw Error("Rental already returned");

        rental.status = "RETURNED";
    }

    public static getRentals(): Rental[] {
        return RentalManager.rentals.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    }
}

export default RentalManager;