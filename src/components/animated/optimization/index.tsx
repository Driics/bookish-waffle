import ImageLarge from "@/components/animated/optimization/ImageLarge";

export const ImageOptimizationAnim = () => {
    return (
        <div className="optimizations_root">
            <div className="optimizations_window" data-variant="large">
                <div style={{
                    "--stack-flex": "initial",
                    "--stack-direction": "column",
                    "--stack-align": "center",
                    "--stack-justify": "center",
                    "--stack-padding": "0px",
                    "--stack-gap": "0px",
                }} className="stuck" data-header={true}>
                    <div data-label="true">Original</div>
                </div>
                <div data-content={true}>
                    <ImageLarge/>
                </div>
            </div>
            <div className="optimizations_window" data-variant="medium"></div>
            <div className="optimizations_window" data-variant="small"></div>
        </div>
    )
}