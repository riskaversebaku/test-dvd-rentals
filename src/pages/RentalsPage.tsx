import {RentalsTable} from "../components/RentalsTable";
import {Layout} from "../components/Layout";

export function RentalsPage() {
    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Rentals</h1>
                        <p>
                            This is a simple application to manage DVD rentals. You can add new rentals, return DVDs,
                            and delete rentals.
                        </p>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12">
                        <RentalsTable/>
                    </div>
                </div>
            </div>
        </Layout>
    );
}