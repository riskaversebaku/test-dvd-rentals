import React, { useState } from 'react';
import {Rental} from "../types/Rental";
import {RentalStatus} from "../types/RentalStatus";
import {Button} from "./Button";
import {calculateAge} from "../utils/dateHelpers";

type Props = {
    rental: Rental;
    onClose: () => void;
    isLoadingID: string;
    onReturn: (id: string) => void;
}

export const RentalDetailsCard = ({ rental, onClose, onReturn, isLoadingID }: Props) => {
    const [status, setStatus] = useState(rental.status);

    return (
        <div className="card my-4 mx-auto" style={{ maxWidth: '600px' }}>
            <div className="card-header">
                <h4>Rental Details</h4>
            </div>
            <div className="card-body">
                <h5 className="card-title">Customer</h5>
                <p className="card-text"><strong>First Name:</strong> {rental.customer.firstName}</p>
                <p className="card-text"><strong>Last Name:</strong> {rental.customer.lastName}</p>
                {rental?.customer?.dateOfBirth && <>
                    <p className="card-text"><strong>Date of
                        Birth:</strong> {new Date(rental?.customer?.dateOfBirth).toLocaleDateString()}</p>
                    <p className="card-text"><strong>Age:</strong> {calculateAge(rental.customer.dateOfBirth)}</p>
                </>}
                <p className="card-text"><strong>Email:</strong> {rental.customer.emailAddress}</p>

                <h5 className="card-title mt-4">Status</h5>
                <p className="card-text">
                  {/* Here we can use class builder like clsx or classNames */}
                  <span className={`badge ${status === RentalStatus.RENTED ? 'badge-success' : 'badge-secondary'}`}>
                    {status}
                  </span>
                </p>

                <h5 className="card-title mt-4">DVD Details</h5>
                <p className="card-text"><strong>Title:</strong> {rental.dvd.title}</p>
                <p className="card-text"><strong>Genre:</strong> {rental.dvd.genre}</p>
                <p className="card-text"><strong>Cast:</strong> {rental.dvd.cast}</p>
                <p className="card-text"><strong>Director:</strong> {rental.dvd.director}</p>
                <p className="card-text"><strong>Description:</strong> {rental.dvd.notes}</p>
            </div>
            <div className="card-footer">
                <Button type="button" className="btn btn-secondary btn-sm"
                        onClick={onClose}>Close</Button>
                {rental.status !== RentalStatus.RETURNED && <Button type="button" className="btn btn-primary btn-sm"
                                                                    isLoading={isLoadingID === rental.id}
                                                                    onClick={() => onReturn(rental.id)}>Return DVD</Button>}
            </div>
        </div>
    );
};
