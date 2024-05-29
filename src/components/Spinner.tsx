export function Spinner({ size }: { size?: number }) {
    return (
        <div className="spinner-border text-primary" role="status" style={{ height: size, width: size }}>
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}