browser.tabs.query({ currentWindow: true, active: true }).then((tabs) => {
    let tab = tabs[0];
    console.log(tab.url);
}, console.error);
