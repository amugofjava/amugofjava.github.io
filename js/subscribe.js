let sub = '';

$(document).ready(function () {
    const urlString = window.location.search.substring(1);
    let variablePairs = urlString.split('&');

    for (i = 0; i < variablePairs.length; i++) {
        const param = variablePairs[i].split('=');

        if (param[0] === 'url') {
            sub = param[1];
        }
    }

    $('#subscribeButton').click(function () {
        const decodedSub = decodeURIComponent(sub);
        window.open(`anytime-subscribe://subscribe?uri=${decodedSub}`);
    });
});