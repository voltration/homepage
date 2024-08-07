import json from "./colors.json" assert { type: "json" };

export function getLanguageColor(lang: string) {
    const l = lang.toLowerCase();

    for (const [lang, data] of Object.entries(json)) {
        if (lang.toLowerCase() === l) {
            return data.color;
        }
    }
    return "#ffffff";
}