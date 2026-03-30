(function () {
    function replaceLastSpace() {
        document.querySelectorAll('p, h1, h2, h3, h4, h5, h6').forEach(function (el) {
            var walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
            var nodes = [];
            while (walker.nextNode()) nodes.push(walker.currentNode);

            // Find the last text node with visible content
            var last = -1;
            for (var i = nodes.length - 1; i >= 0; i--) {
                if (/\S/.test(nodes[i].textContent)) {
                    last = i;
                    break;
                }
            }
            if (last < 0) return;

            var text = nodes[last].textContent;

            // If this node has two+ words separated by a space, replace the last one
            if (/\S \S/.test(text)) {
                nodes[last].textContent = text.replace(
                    /([\s\S]*) (\S+ *$)/,
                    '$1\u00A0$2'
                );
                return;
            }

            // If the node starts with a space and prior content exists,
            // the space before the last word is at the start of this node
            if (text.charAt(0) === ' ' && last > 0) {
                nodes[last].textContent = text.replace(' ', '\u00A0');
                return;
            }

            // Walk backwards to find the nearest node with a space
            for (var j = last - 1; j >= 0; j--) {
                if (nodes[j].textContent.indexOf(' ') !== -1) {
                    nodes[j].textContent = nodes[j].textContent.replace(
                        /([\s\S]*) ( *$)/,
                        '$1\u00A0$2'
                    );
                    return;
                }
            }
        });
    }

    document.addEventListener('DOMContentLoaded', replaceLastSpace);
})();