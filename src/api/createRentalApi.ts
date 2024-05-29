import {NewRental} from "../types/NewRental";
import RentalManager from "./helpers/RentalManager";
import {Rental} from "../types/Rental";

export default function createRentalApi(rental: NewRental): Promise<Rental> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const newRental = RentalManager.rentMovie(rental);
                resolve(newRental);   
            } catch (error) {
                reject((error as Error).message);
            }
        }, 1000);
    });
}