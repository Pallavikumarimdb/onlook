"use client";

import { motion } from "motion/react";
import { TextSelected } from "./text-selected";
import { DivSelected } from "./div-selected";
import { ImgSelected } from "./img-selected";

type EditorBarProps = {
    selectedElement: "div" | "text" | "image";
};

export const EditorBar = ({ selectedElement }: EditorBarProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="flex flex-col border-b-[0.5px] border-border p-1 px-1.5 bg-background backdrop-blur drop-shadow-xl z-50"
            transition={{
                type: "spring",
                bounce: 0.1,
                duration: 0.4,
                stiffness: 200,
                damping: 25,
            }}
        >
            {selectedElement === "text" && <TextSelected />}
            {selectedElement === "div" && <DivSelected />}
            {selectedElement === "image" && <ImgSelected />}
        </motion.div>
    );
};
