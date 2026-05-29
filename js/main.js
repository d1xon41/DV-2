const opt = { actions: false };

vegaEmbed('#map-world',                   'vega/map_world.json',                    opt);
vegaEmbed('#map-choropleth',              'vega/map_choropleth.json',               opt);
vegaEmbed('#bar-percent-protected',       'vega/bar_percent_protected.json',        opt);
vegaEmbed('#map-bubbles-interactive',     'vega/map_bubbles_interactive.json',      opt);
vegaEmbed('#map-parks-count-choropleth',  'vega/map_parks_count_choropleth.json',   opt);
vegaEmbed('#map-choropleth-time',         'vega/map_choropleth_time.json',          opt);
vegaEmbed('#bar-parks-count',             'vega/map_parks_count.json',              opt);
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
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.chart-card').forEach(card => observer.observe(card));
document.querySelectorAll('.section-header').forEach(h => observer.observe(h));

// Hero counter animation
function animateCounter(el, target, suffix = '', decimals = 0) {
  if (!el) return;
  const duration = 1800;
  const steps = 60;
  const increment = target / steps;
  let current = 0;
  let step = 0;
  const timer = setInterval(() => {
    step++;
    current += increment;
    if (step >= steps) { current = target; clearInterval(timer); }
    el.textContent = decimals > 0
      ? current.toFixed(decimals) + suffix
      : Math.floor(current).toLocaleString() + suffix;
  }, duration / steps);
}

window.addEventListener('load', () => {
  animateCounter(document.getElementById('stat-parks'),   14432);
  animateCounter(document.getElementById('stat-percent'), 22.6, '%', 1);
  animateCounter(document.getElementById('stat-hectares'),173, 'M');
});