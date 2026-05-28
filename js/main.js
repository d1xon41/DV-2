const opt = { actions: false };

vegaEmbed('#map-world',                   'vega/map_world.json',                    opt);
vegaEmbed('#map-choropleth',              'vega/map_choropleth.json',               opt);
vegaEmbed('#map-choropleth-time', 'vega/map_choropleth_time.json', opt);
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
// Scroll animation observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
});

// Observe all chart cards and section headers
document.querySelectorAll('.chart-card').forEach(card => {
  observer.observe(card);
});

document.querySelectorAll('.section-header').forEach(header => {
  observer.observe(header);
});

document.querySelectorAll('.section-tag').forEach(tag => {
  observer.observe(tag);
});

// Hero stat counter animation
function animateCounter(element, target, suffix = '') {
  const isFloat = target % 1 !== 0;
  const duration = 1500;
  const steps = 60;
  const increment = target / steps;
  let current = 0;
  let step = 0;

  const timer = setInterval(() => {
    step++;
    current += increment;
    if (step >= steps) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = isFloat
      ? current.toFixed(1) + suffix
      : Math.floor(current).toLocaleString() + suffix;
  }, duration / steps);
}

// Animate hero stats on page load
window.addEventListener('load', () => {
  const stats = document.querySelectorAll('.stat-num');
  if (stats[0]) animateCounter(stats[0], 14432);
  if (stats[1]) animateCounter(stats[1], 22.6, '%');
  if (stats[2]) animateCounter(stats[2], 173, 'M');
});