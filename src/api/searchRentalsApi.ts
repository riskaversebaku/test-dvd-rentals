import RentalManager from "./helpers/RentalManager";
import {Rental} from "../types/Rental";

export default function searchRentalsApi(): Promise<Rental[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const allRentals = RentalManager.getRentals();

            resolve(allRentals);
        }, 1000);
    });
}