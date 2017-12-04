document.addEventListener('DOMContentLoaded', function() {
    cy = cytoscape({
        container: document.getElementById('cy'),

        elements: [
            // nodes
            { group: 'nodes', data: { id: '3358071', name: 'WEB3', companyName: 'GAPLAST Gesellschaft für Kunststoffverarbeitung mbH' }},
            { group: 'nodes', data: { id: '20636706', name: 'HR', companyName: 'GAPLAST Gesellschaft für Kunststoffverarbeitung mbH' }},
            { group: 'nodes', data: { id: '1983844', name: 'HR', companyName: 'GAPLAST Gesellschaft für Kunststoffverarbeitung mbH' }},
            { group: 'nodes', data: { id: '23892305', name: 'ND', companyName: 'GAPLAST Gesellschaft für\nKunststoffverarbeitung mit beschränkter Haftung' }},
            { group: 'nodes', data: { id: '23892306', name: 'ND', companyName: 'GAPLAST Gesellschaft für Kunststoffverarbeitung mbH' }},
            { group: 'nodes', data: { id: '25040687', name: 'ND', companyName: 'GAPLAST Gesellschaft für Kunststoffverarbeitung mbH' }},
            { group: 'nodes', data: { id: '25040688', name: 'ND', companyName: 'GAPLAST Gesellschaft für\nKunststoffverarbeitung mit beschränkter Haftung' }},
            { group: 'nodes', data: { id: '26295175', name: 'WEB5', companyName: 'GAPLAST Gesellschaft für Kunststoffverarbeitung mbH' }},
            { group: 'nodes', data: { id: '30593337', name: 'WEB6', companyName: 'GAPLAST Gesellschaft für Kunststoffverarbeitung mbH' }},
            { group: 'nodes', data: { id: '32456970', name: 'WEB7', companyName: 'GAPLAST Gesellschaft für Kunststoffverarbeitung mbH' }},
            { group: 'nodes', data: { id: '37081047', name: 'SA', companyName: 'GAPLAST Gesellschaft für Kunststoffverarbeitung mbH' }},
            { group: 'nodes', data: { id: '37316448', name: 'AAA', companyName: 'GAPLAST Gesellschaft für Kunststoffverarbeitung mbH' }},
            
            //edges
            { group: 'edges', data: { id: '37316448_37316448', source: '37316448', target: '37316448', name: 'duplicate', weight: 0.9 , relationSource: 'rel-cl' }},
            { group: 'edges', data: { id: '23892305_32456970', source: '23892305', target: '32456970', name: 'duplicate', weight: 0.9 , relationSource: 'rel-cl' }},
            { group: 'edges', data: { id: '23892305_23892306', source: '23892305', target: '23892306', name: 'duplicate', weight: 0.9 , relationSource: 'rel-cl' }},
            { group: 'edges', data: { id: '25040687_30593337', source: '25040687', target: '30593337', name: 'duplicate', weight: 0.9 , relationSource: 'rel-cl' }},
            { group: 'edges', data: { id: '25040687_25040688', source: '25040687', target: '25040688', name: 'duplicate', weight: 0.9 , relationSource: 'rel-cl' }},
            { group: 'edges', data: { id: '25040687_26295175', source: '25040687', target: '26295175', name: 'duplicate', weight: 1 , relationSource: 'rel-cl' }},
            { group: 'edges', data: { id: '25040687_37316448', source: '25040687', target: '37316448', name: 'duplicate', weight: 1 , relationSource: 'rel-cl' }},
            { group: 'edges', data: { id: '25040687_32456970', source: '25040687', target: '32456970', name: 'duplicate', weight: 0.9 , relationSource: 'rel-cl' }},
            { group: 'edges', data: { id: '3358071_37316448', source: '3358071', target: '37316448', name: 'deleted', weight: 0.9, relationSource: 'rel-cl' }},
            { group: 'edges', data: { id: '3358071_26295175', source: '3358071', target: '26295175', name: 'deleted', weight: 0.9, relationSource: 'rel-cl' }},
            { group: 'edges', data: { id: '3358071_20636706', source: '3358071', target: '20636706', name: 'deleted', weight: 0.9, relationSource: 'rel-cl' }},
            { group: 'edges', data: { id: '3358071_30593337', source: '3358071', target: '30593337', name: 'deleted', weight: 0.9, relationSource: 'rel-cl' }},
            { group: 'edges', data: { id: '3358071_25040688', source: '3358071', target: '25040688', name: 'deleted', weight: 0.9, relationSource: 'rel-cl' }},
            { group: 'edges', data: { id: '3358071_32456970', source: '3358071', target: '32456970', name: 'deleted', weight: 0.9, relationSource: 'rel-cl' }},
            { group: 'edges', data: { id: '3358071_25040687', source: '3358071', target: '25040687', name: 'deleted', weight: 0.9, relationSource: 'sales_admin' }},
            { group: 'edges', data: { id: '26295175_37316448', source: '26295175', target: '37316448', name: 'deleted', weight: 0.9, relationSource: 'sales_admin' }},
            { group: 'edges', data: { id: '26295175_32456970', source: '26295175', target: '32456970', name: 'obc-dup', weight: 0.9, relationSource: 'sales_admin' }},
            { group: 'edges', data: { id: '26295175_30593337', source: '26295175', target: '30593337', name: 'obc-dup', weight: 0.9, relationSource: 'sales_admin' }},
            { group: 'edges', data: { id: '25040688_37316448', source: '25040688', target: '37316448', name: 'obc-dup', weight: 0.9, relationSource: 'sales_admin' }},
            { group: 'edges', data: { id: '25040688_26295175', source: '25040688', target: '26295175', name: 'obc-dup', weight: 0.9, relationSource: 'sales_admin' }},
            { group: 'edges', data: { id: '25040688_32456970', source: '25040688', target: '32456970', name: 'obc-dup', weight: 0.9, relationSource: 'sales_admin' }},
            { group: 'edges', data: { id: '25040688_30593337', source: '25040688', target: '30593337', name: 'obc-dup', weight: 0.9, relationSource: 'sales_admin' }},
            { group: 'edges', data: { id: '20636706_25040687', source: '20636706', target: '25040687', name: 'obc-dup', weight: 0.9, relationSource: 'source_trace_id' }},
            { group: 'edges', data: { id: '20636706_30593337', source: '20636706', target: '30593337', name: 'obc-dup', weight: 0.9, relationSource: 'source_trace_id' }},
            { group: 'edges', data: { id: '20636706_25040688', source: '20636706', target: '25040688', name: 'updates', weight: 0.9, relationSource: 'source_trace_id' }},
            { group: 'edges', data: { id: '20636706_37316448', source: '20636706', target: '37316448', name: 'updates', weight: 0.9, relationSource: 'source_trace_id' }},
            { group: 'edges', data: { id: '20636706_26295175', source: '20636706', target: '26295175', name: 'updates', weight: 0.9, relationSource: 'source_trace_id' }},
            { group: 'edges', data: { id: '1983844_23892306', source: '1983844', target: '23892306', name: 'updates', weight: 0.9, relationSource: 'source_trace_id' }},
            { group: 'edges', data: { id: '1983844_23892305', source: '1983844', target: '23892305', name: 'updates', weight: 0.9, relationSource: 'source_trace_id' }},
            { group: 'edges', data: { id: '23892306_32456970', source: '23892306', target: '32456970', name: 'updates', weight: 0.9, relationSource: 'source_trace_id' }},
            { group: 'edges', data: { id: '32456970_37316448', source: '32456970', target: '37316448', name: 'updates', weight: 0.9, relationSource: 'sales_admin' }},
            { group: 'edges', data: { id: '30593337_32456970', source: '30593337', target: '32456970', name: 'merge', weight: 0.3, relationSource: 'sales_admin' }},
            { group: 'edges', data: { id: '37316448_25040688', source: '37316448', target: '25040688', name: 'merge', weight: 0.1, relationSource: 'sales_admin' }},
            { group: 'edges', data: { id: '23892306_23892305', source: '23892306', target: '23892305', name: 'unmerge', weight: 0.1, relationSource: 'sales_admin' }},
            { group: 'edges', data: { id: '25040688_25040687', source: '25040688', target: '25040687', name: 'unmerge', weight: 0.1, relationSource: 'sales_admin' }},
        ],

        style: 
        [
            {
                selector: 'node',
                style: {
                    'label': 'data(name)',
                    'background-color': '#4db798',
                    'height': 48,
                    'width': 48,
                    'font-size': 13,
                    'text-valign': 'center',
                    'text-halign': 'center',
                    // 'border-color': '#000',
                    // 'border-width': 1,
                    // 'border-opacity': 0.5,
                }
            },
            {
                selector: 'edge',
                style: {
                    'label': 'data(name)',
                    'width': 'mapData(weight, 0, 1, 0, 3)',
                    'font-size': 12,
                    'line-color': '#ccc',
                    'text-margin-y': -10,
                    'curve-style': 'bezier',
                    'edge-text-rotation': 'autorotate',
                    'target-arrow-color': '#ccc',
                    'target-arrow-shape': 'triangle'
                }
            },
            {
                selector: 'edge[name = "deleted"]',
                style: {
                    'line-color': 'red',
                }
            },
        ],

       layout: {
        name: 'cose',
        idealEdgeLength: 10,
        nodeOverlap: 10,
        refresh: 20,
        fit: true,
        padding: 30,
        componentSpacing: 20,
        randomize: true,
        nodeRepulsion: 400000,
        edgeElasticity: 100000,
        nestingFactor: 5,
        gravity: 60,
        numIter: 1500,
        initialTemp: 150,
        coolingFactor: 0.95,
        minTemp: 1.0,
        animate: true,
       },

    });

    cy.$('node').qtip({
        content: {
            title: function(){
                return this.id();
            },
            text: function(){
                return this.data().companyName;
            },
        },
        show: { when: { event: 'focus' }},
        // hide: {
        //     event: 'mouseout',
        // },
        position: {
            my: 'bottom center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });

    cy.$('edge').qtip({
        content: {
            title: function(){
                return this.id();
            },
            text: function(){
                return this.data().relationSource;
            },
        },
        show: { when: { event: 'focus' }},
        // hide: {
        //     event: 'mouseout',
        // },
        position: {
            my: 'bottom center',
            at: 'top center'
        },
        style: {
            classes: 'qtip-bootstrap',
            tip: {
                width: 16,
                height: 8
            }
        }
    });

});

function resetZoom() {
    cy.fit();
}

function exportPng() {
    var png64 = cy.png();

    document.getElementById('png-export').src = png64;
}

function setLayout(name) {
    var options = {};
    
    if (name === "grid") {
        options = {
            name: 'grid',
            rows: 3,
            animate: true,
        };
    } else if (name === "random") {
        options = {
            name: 'random',
            animate: true,
        };
    } else if (name === "circle") {
        options = {
            name: 'circle',
            animate: true,
        };
    }
    
    var layout = cy.layout(options);
    layout.run();
}