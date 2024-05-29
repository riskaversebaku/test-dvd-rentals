import RentalManager from "./helpers/RentalManager";

export default function setRentalReturnedApi(rentalId: string): Promise<void> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                RentalManager.returnMovie(rentalId);
                resolve();
            } catch (error) {
                reject((error as Error).message);
            }
        }, 1000);
    });
}