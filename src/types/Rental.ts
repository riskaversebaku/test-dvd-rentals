import {Dvd} from "./Dvd";
import {Customer} from "./Customer";
import {RentalStatus} from "./RentalStatus";

export type Rental = {
    id: string;
    dvd: Dvd;
    customer: Customer;
    status: RentalStatus;
    createdAt: Date;
}