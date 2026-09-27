export function ProgressBar() {
    return (
        <div className="w-full bg-primary-soft rounded-full h-3 overflow-hidden">
            <div
                className="h-3 bg-primary animate-progress rounded-full"
                style={{ width: "100%", animationDuration: "1.2s" }}
            ></div>
        </div>
    )
}