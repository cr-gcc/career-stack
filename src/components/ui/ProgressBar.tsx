export function ProgressBar() {
    return (
        <div className="w-full bg-gray-400 rounded-full h-3 overflow-hidden">
            <div
                className="h-3 bg-red-600 animate-progress rounded-full"
                style={{ width: "100%", animationDuration: "1.2s" }}
            ></div>
        </div>
    )
}