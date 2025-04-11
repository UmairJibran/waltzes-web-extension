
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: 'waltzes-analyze',
        title: 'Analyze with Waltzes',
        contexts: ['selection']
    });
});

const injectContentScript = async (tabId: number, mode: 'page_scan' | 'selected_text', selectedText?: string) => {
    try {
        const [{ result }] = await chrome.scripting.executeScript({
            target: { tabId },
            func: () => !!document.getElementById('job-application-extension-root'),
        });

        if (result) {
            await chrome.scripting.executeScript({
                target: { tabId },
                func: () => {
                    const root = document.getElementById('job-application-extension-root');
                    if (root) root.remove();
                },
            });
        } else {
            await chrome.scripting.insertCSS({
                target: { tabId },
                files: ['content.styles.css'],
            });

            await chrome.scripting.executeScript({
                target: { tabId },
                func: (injectedMode, injectedText) => {
                    const mode = injectedMode as 'page_scan' | 'selected_text';
                    window.waltzesContext = { mode, selectedText: injectedText };
                },
                args: [mode, selectedText]
            });

            await chrome.scripting.executeScript({
                target: { tabId },
                files: ['content.js'],
            });
        }
    } catch (error) {
        console.error('Failed to inject content script:', error);
    }
};

chrome.action.onClicked.addListener(async (tab) => {
    if (tab.id) {
        await injectContentScript(tab.id, 'page_scan');
    }
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
    if (info.menuItemId === 'waltzes-analyze' && tab?.id) {
        await injectContentScript(tab.id, 'selected_text', info.selectionText);
    }
});