function overrideLinks() {
    const mobilePrefix = '//m.';
    const anchors = document.querySelectorAll(`a[href*="${mobilePrefix}`)
    anchors.forEach(anchor => anchor.href = anchor.href.replace(mobilePrefix, '//www.'));
}

    const interval = 2000;
    const caller = () => {
        setTimeout(() => {
            caller();
        }, interval);
        overrideLinks();
    };
    caller();


