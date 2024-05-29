import {Layout} from "../components/Layout";
import {NewRental} from "../types/NewRental";
import {FormEvent, Reducer, useReducer, useRef, useState} from "react";
import createRentalApi from "../api/createRentalApi";
import searchDvdsApi from "../api/searchDvdsApi";
import {Dvd} from "../types/Dvd";
import {createResource} from "../utils/createResource";
import {Button} from "../components/Button";
import {createAlert} from "../utils/createAlert";

type ActionType =
    | { type: "FirstName"; value: string }
    | { type: "LastName"; value: string }
    | { type: "Email"; value: string }
    | { type: "DvdId"; value: number }
    | { type: "DateOfBirth"; value: Date }

const onChange: Reducer<NewRental, ActionType> = (state: NewRental, action: ActionType): NewRental => {
    switch (action.type) {
        case "FirstName":
            return {...state, customer: {...state.customer, firstName: action.value }};
        case "LastName":
            return {...state, customer: {...state.customer, lastName: action.value }};
        case "Email":
            return {...state, customer: {...state.customer, emailAddress: action.value }};
        case "DvdId":
            return {...state, dvdId: action.value};
        case "DateOfBirth":
            return {...state, customer: {...state.customer, dateOfBirth: action.value }};
        default:
            return {...state};
    }
}

const resource = createResource(searchDvdsApi());

const initialRentalState: NewRental = {
    customer: {
        firstName: "",
        lastName: "",
        emailAddress: "",
        dateOfBirth: new Date()
    },
    dvdId: 0,
};

export default function NewRentalPage() {
    const dvds = resource.read()!;
    const [newRental, dispatch] = useReducer(onChange, initialRentalState);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const formRef = useRef<HTMLFormElement>(null);

    return (
        <Layout>
            <fieldset disabled={isSubmitting}>
                <form ref={formRef} onSubmit={onSubmit}>
                    <div className="container">
                        <div className="row mb-4">
                            <div className="co-12">
                                <h1>New Rental</h1>
                                <p>
                                    Please enter the customer details and the DVD ID to create a new rental.
                                </p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <h4>DVD Details</h4>
                                <div className="mb-3 mt-4" style={{maxWidth: 300}}>
                                    <label className="form-label">DVD</label>
                                    <select onChange={event => dispatch({
                                        type: "DvdId",
                                        value: parseInt(event.target.value)
                                    })}
                                            name="dvd" id="dvd" className="form-select" required defaultValue={""}>
                                        <option value={""}>Select a DVD</option>
                                        {dvds.map((dvd: Dvd) => (
                                            <option key={dvd.id} value={dvd.id}>{dvd.title}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-12">
                                <h4>Customer details</h4>
                                <div className="mb-3 mt-4" style={{maxWidth: 300}}>
                                    <label htmlFor="firstName" className="form-label">First name</label>
                                    <input onChange={event => dispatch({type: "FirstName", value: event.target.value})}
                                           type="text" className="form-control" id="firstName" required minLength={1}
                                           maxLength={30}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="mb-3" style={{maxWidth: 300}}>
                                    <label htmlFor="lastName" className="form-label">Last name</label>
                                    <input onChange={event => dispatch({type: "LastName", value: event.target.value})}
                                           type="text" className="form-control" id="lastName" required minLength={1}
                                           maxLength={30}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="mb-3" style={{maxWidth: 300}}>
                                    <label htmlFor="emailAddress" className="form-label">Email address</label>
                                    <input onChange={event => dispatch({type: "Email", value: event.target.value})}
                                           type="email" className="form-control" id="emailAddress" required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="mb-3" style={{maxWidth: 300}}>
                                    <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
                                    <input onChange={event => dispatch({type: "DateOfBirth", value: new Date(event.target.value) })}
                                           type="date" className="form-control" id="dateOfBirth" required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <Button isLoading={isSubmitting} type="submit" className="btn btn-primary me-3">Create Rental</Button>
                                <Button type="reset" className={"btn btn-light"}>Reset</Button>
                            </div>
                        </div>
                    </div>
                </form>
            </fieldset>
        </Layout>
    );

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // its better to avoid type casting
        const dob = new Date(newRental?.customer?.dateOfBirth as Date);
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        const monthDiff = today.getMonth() - dob.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
            age--;
        }

        if (age < 18) {
            await createAlert("error", "Customer must be 18 years or older.");
            return;
        }

        setIsSubmitting(true);
        await createRentalApi(newRental);
        setIsSubmitting(false);

        await createAlert("success", "Rental created successfully");

        if (formRef.current) {
            formRef.current.reset();
        }
    }
}
