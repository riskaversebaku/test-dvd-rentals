import {Spinner} from "./Spinner";

export function FullPageSpinner() {
    return (
        <div style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Spinner size={50} />
            <h3 className={"ms-4"} style={{ top: 2, position: "relative" }}>Loading</h3>
        </div>
    )
}