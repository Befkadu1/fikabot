export function qs(sel, root = document) {
    const el = root.querySelector(sel);
    if (!el)
        throw new Error(`Element not found: ${sel}`);
    return el;
}
export function qsa(sel, root = document) {
    return Array.from(root.querySelectorAll(sel));
}
//# sourceMappingURL=dom.js.map