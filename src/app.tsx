import React from "react";
import CompareView, { load_new_imgs, CompareViewData } from "compare_view";

const ReactApp: React.FC = () => {
    // when buton pressed change images
    let button_ref = React.createRef<HTMLButtonElement>();

    // run when compare_view instance has been loaded
    function attach_btn(cvd: CompareViewData): void {
        button_ref.current?.addEventListener("click", () => {
            load_new_imgs(cvd, ["./cat.png", "./cat_green.png"]);
        });
    }

    return (
        <div>
            <h1>A bit of React using compare_view</h1>
            <CompareView image_urls={["./cat.png", "./cat_grey.png"]} config={{ create_controls: true }} />
            <CompareView image_urls={["./cat.png", "./cat_grey.png"]} callback={attach_btn} />
            <button ref={button_ref}>Wanna see a green cat?</button>
        </div>
    );
}

export default ReactApp;

