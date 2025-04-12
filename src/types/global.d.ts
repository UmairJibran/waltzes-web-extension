interface WaltzesContext {
    mode: 'page_scan' | 'selected_text';
    selectedText: string | null;
}

declare global {
    interface Window {
        waltzesContext?: WaltzesContext;
    }
}

export { };