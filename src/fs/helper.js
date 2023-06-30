import { access } from 'node:fs/promises';

export async function isExists(file) {
    try {
        await access(file);
        return true;
    } catch {
        return false;
    }
}
