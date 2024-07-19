document.addEventListener("DOMContentLoaded", function () {
    fetch('plugins.json')
        .then(response => response.json())
        .then(plugins => {
            plugins.forEach(plugin => {
                if (plugin.type === 'alert') {
                    alert(plugin.message);
                } else if (plugin.type === 'log') {
                    console.log(plugin.message);
                } else {
                    console.warn(`Unknown plugin type: ${plugin.type}`);
                }
            });
        })
        .catch(error => console.error('Error loading plugins:', error));
});