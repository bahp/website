---
layout: page
permalink: /publications/theses/
title: theses
description: theses grouped by year.
years: [2019, 2013]
nav: false
nav_order: 1
---
<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.years %}
  <!-- <h2 class="year">{{y}}</h2> -->
  {% bibliography -f theses -q @*[year={{y}}]* %}
{% endfor %}

</div>
