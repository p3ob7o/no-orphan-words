(function () {
    function replaceLastSpace() {
        document.querySelectorAll('p, h1, h2, h3, h4, h5, h6').forEach(function (el) {
            var walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
            var lastTextNode = null;

            while (walker.nextNode()) {
                if (/\s/.test(walker.currentNode.textContent)) {
                    lastTextNode = walker.currentNode;
                }
            }

            if (lastTextNode) {
                lastTextNode.textContent = lastTextNode.textContent.replace(
                    /\s(\S+)\s*$/,
                    '\u00A0$1'
                );
            }
        });
    }

    document.addEventListener('DOMContentLoaded', replaceLastSpace);
})();