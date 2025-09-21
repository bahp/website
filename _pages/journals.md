---
layout: page
permalink: /publications/journals/
title: journals
description: journal publications grouped by year.
years: [2025, 2024, 2023, 2022, 2021, 2019, 2018, 2017, 2016]
nav: false
nav_order: 1
---

{% include bib_search.liquid %}

<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.years %}
  <!-- <h2 class="year">{{y}}</h2> -->
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
