const opt = { actions: false };

vegaEmbed('#map-world',                   'vega/map_world.json',                    opt);
vegaEmbed('#map-choropleth',              'vega/map_choropleth.json',               opt);
vegaEmbed('#map-bubbles-interactive',     'vega/map_bubbles_interactive.json',      opt);
vegaEmbed('#map-parks-count-choropleth',  'vega/map_parks_count_choropleth.json',   opt);
vegaEmbed('#map-choropleth-time', 'vega/map_choropleth_time.json', opt);
vegaEmbed('#bar-parks-count',             'vega/map_parks_count.json',              opt);
vegaEmbed('#bar-percent-protected',       'vega/bar_percent_protected.json',        opt);
vegaEmbed('#bar-iucn',                    'vega/bar_iucn.json',                     opt);
vegaEmbed('#scatter-area',                'vega/scatter_area.json',                 opt);
vegaEmbed('#bar-bioregions',              'vega/bar_bioregions.json',               opt);
vegaEmbed('#line-visitors',               'vega/line_visitors.json',                opt);
vegaEmbed('#donut-landuse',               'vega/donut_landuse.json',                opt);
vegaEmbed('#small-multiples-iucn',        'vega/small_multiples_iucn.json',         opt);
vegaEmbed('#bar-governance',              'vega/bar_governance.json',               opt);
vegaEmbed('#line-extinctions',            'vega/line_extinctions.json',             opt);
vegaEmbed('#bar-extinctions',             'vega/bar_extinctions.json',              opt);