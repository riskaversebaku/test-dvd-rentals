import {PropsWithChildren, useCallback, useEffect, useState} from "react";
import {Rental} from "../types/Rental";
import searchRentalsApi from "../api/searchRentalsApi";
import {Spinner} from "./Spinner";
import { RentalDetailsCard } from "./DetailsCard";
import setRentalReturnedApi from "../api/setRentalReturnedApi";
import {Button} from "./Button";
import {Card} from "./Card";
import {RentalStatus} from "../types/RentalStatus";

const Content = ({ children }: PropsWithChildren) => {
    return (
        <Card title="All rentals">
            <p>This table displays all rentals, ordered by "Rented At" descending.</p>

            {children}
        </Card>
    )
}

export function RentalsTable() {
    const [isLoadingAllRentals, setIsLoadingAllRentals] = useState(false);
    const [isLoadingID, setLoadingId] = useState<string>('');
    const [selectedRental, setSelectedRental] = useState<Rental | null>(null);

    const [rentals, setRentals] = useState<Rental[]>([]);

    const loadRentals = useCallback(async () => {
        setIsLoadingAllRentals(true);

        const searchRentalsPromise = searchRentalsApi();

        searchRentalsPromise.then((rentals) => {
            setRentals(rentals);
        });

        searchRentalsPromise.finally(() => {
            setIsLoadingAllRentals(false);
        });
    }, [setIsLoadingAllRentals, searchRentalsApi, setRentals]);

    useEffect(() => {
        loadRentals().then(() => ({}));
    }, [loadRentals]);


    if(isLoadingAllRentals) {
        return (
            <Content>
                <div className="d-flex justify-content-center align-items-center">
                    <Spinner/>
                </div>
            </Content>
        )
    }

    return (
        <Content>
            <table className="table">
                <thead>
                <tr>
                    <th>Customer</th>
                    <th>DVD</th>
                    <th>Rented At</th>
                    <th>Status</th>
                    <th>Actions</th>
                    <th>Details</th>
                </tr>
                </thead>

                <tbody>
                {
                    !isLoadingAllRentals && rentals.map((rental) => (
                        <tr>
                            <td>{`${rental.customer.firstName} ${rental.customer.lastName}`}</td>
                            <td>{rental.dvd.title}</td>
                            <td>{rental.createdAt.toLocaleString()}</td>
                            <td>{rental.status}</td>
                            <td>
                                {rental.status !== RentalStatus.RETURNED && <Button type={"button"} className="btn btn-primary btn-sm"
                                                                         isLoading={isLoadingID === rental.id}
                                                                         onClick={() => onClickReturnDvd(rental.id)}>Return
                                    DVD</Button>}
                            </td>
                            <td>
                                <Button type={"button"} className="btn btn-primary btn-sm" onClick={() => setSelectedRental(rental)}>Details</Button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            {selectedRental && <RentalDetailsCard isLoadingID={isLoadingID} onClose={() => setSelectedRental(null)} rental={selectedRental} onReturn={(id) => onClickReturnDvd(id)} />}
        </Content>
    );

    async function onClickReturnDvd(rentalId: string) {
        try {
            setLoadingId(rentalId)
            await setRentalReturnedApi(rentalId);
            await loadRentals();
        } catch {
            alert("An error occurred while returning the DVD. Please try again.");
        }
    }
}