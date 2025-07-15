import fs from 'node:fs';


const loadTraslation = (languageCode: string = 'es') => {
    const filePath = `./lang/${languageCode}.json`
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
}

export const traslate = (languageCode: string = "es", section: string) => {
    const file = loadTraslation(languageCode);
    return file[section];
}