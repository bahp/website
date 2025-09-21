// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/website/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/website/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/website/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/website/cv/";
          },
        },{id: "dropdown-journals",
              title: "journals",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/website/publications/journals/";
              },
            },{id: "dropdown-conferences",
              title: "conferences",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/website/publications/conferences/";
              },
            },{id: "dropdown-theses",
              title: "theses",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/website/publications/theses/";
              },
            },{id: "dropdown-other",
              title: "other",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/website/publications/other";
              },
            },{id: "dropdown-courses",
              title: "courses",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/website/teaching/courses/";
              },
            },{id: "dropdown-supervision",
              title: "supervision",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/website/teaching/supervision/";
              },
            },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/website/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/website/blog/2024/photo-gallery/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/website/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/website/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/website/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/website/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/website/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/website/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/website/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/website/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/website/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/website/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/website/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/website/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/website/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/website/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/website/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/website/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/website/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/website/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/website/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/website/blog/2022/giscus-comments/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/website/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/website/blog/2021/diagrams/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/website/blog/2021/distill/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/website/blog/2020/twitter/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/website/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/website/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/website/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/website/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/website/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/website/books/the_godfather/";
            },},{id: "news-presentation-workshop-at-pydata-in-london",
          title: 'Presentation (workshop) at PyData in London.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/website/news/announcement_14/";
            },},{id: "news-accepted-to-participate-in-amr-dxc",
          title: 'Accepted to participate in AMR DxC!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/website/news/announcement_13/";
            },},{id: "news-accepted-to-participate-in-the-icl-uct-global-health-fellows-program",
          title: 'Accepted to participate in the ICL-UCT Global Health Fellows Program!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/website/news/announcement_12/";
            },},{id: "news-presentation-poster-and-award-at-embrace-in-london-award",
          title: 'Presentation (poster) and award at EMBRACE in London (award)!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/website/news/announcement_11/";
            },},{id: "news-hpru-team-return-from-three-week-placement-at-university-of-cape-town",
          title: 'HPRU team return from three week placement at University of Cape Town',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/website/news/announcement_15/";
            },},{id: "news-ambassador-at-the-robotics-summer-school",
          title: 'Ambassador at the Robotics Summer School',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/website/news/announcement_18/";
            },},{id: "news-bernard-hernandez-to-present-at-the-international-conference-in-health-informatics-2017",
          title: 'Bernard Hernandez to present at the International Conference in Health Informatics 2017',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/website/news/announcement_17/";
            },},{id: "news-presentation-oral-at-health-informatics-in-porto",
          title: 'Presentation (oral) at Health Informatics in Porto.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/website/news/announcement_10/";
            },},{id: "news-presentation-poster-at-icid-in-buenos-aires",
          title: 'Presentation (poster) at ICID in Buenos Aires.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/website/news/announcement_9/";
            },},{id: "news-awarded-the-imperial-college-techcelerate-prize",
          title: 'Awarded the Imperial College Techcelerate prize!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/website/news/announcement_4/";
            },},{id: "news-featured-innovative-start-up-at-techforesight-2040",
          title: 'Featured innovative start-up at TechForesight 2040!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/website/news/announcement_5/";
            },},{id: "news-presentation-oral-at-wohc",
          title: 'Presentation (oral) at WOHC.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/website/news/announcement_8/";
            },},{id: "news-eric-laithwaite-prize-awarded-to-oliver-stiff",
          title: 'Eric Laithwaite Prize awarded to Oliver Stiff!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/website/news/announcement_16/";
            },},{id: "news-presentation-oral-at-eccmid-in-lisbon",
          title: 'Presentation (oral) at ECCMID in Lisbon.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/website/news/announcement_6/";
            },},{id: "news-presentation-poster-at-icid-in-kuala-lumpur",
          title: 'Presentation (poster) at ICID in Kuala Lumpur.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/website/news/announcement_7/";
            },},{id: "news-presentation-oral-at-camo-net-ai-meeting-in-liverpool",
          title: 'Presentation (oral) at CAMO-Net AI meeting in Liverpool.',
          description: "march &amp; april, looking forward to summer",
          section: "News",handler: () => {
              window.location.href = "/website/news/announcement_19/";
            },},{id: "news-presentation-oral-at-camo-net-ai-meeting-in-london",
          title: 'Presentation (oral) at CAMO-Net AI meeting in London.',
          description: "march &amp; april, looking forward to summer",
          section: "News",handler: () => {
              window.location.href = "/website/news/announcement_20/";
            },},{id: "news-presentation-workshop-at-camo-net-meeting-in-uganda",
          title: 'Presentation (workshop) at CAMO-Net meeting in Uganda.',
          description: "data and dashboard design workshop",
          section: "News",handler: () => {
              window.location.href = "/website/news/announcement_21/";
            },},{id: "news-presentation-oral-at-camo-net-ai-meeting-in-liverpool",
          title: 'Presentation (oral) at CAMO-Net AI meeting in Liverpool.',
          description: "camonet ai uk liverpool .",
          section: "News",handler: () => {
              window.location.href = "/website/news/announcement_22/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/website/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/website/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/website/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/website/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/website/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/website/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/website/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/website/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/website/projects/9_project/";
            },},{id: "projects-abc4d",
          title: 'abc4d',
          description: "Advanced bolus calculator for diabetes (ABC4D) based on the Case-based Reasoning (CBR) methodology.",
          section: "Projects",handler: () => {
              window.location.href = "/website/projects/abc4d/";
            },},{id: "projects-health-ai-zine",
          title: 'Health AI Zine',
          description: "Booklet in a zine format illustrating the key ideas behind the use of data and AI for decision-support in health-care.",
          section: "Projects",handler: () => {
              window.location.href = "/website/projects/aihealth_zine/";
            },},{id: "projects-camo-net",
          title: 'CAMO-NET',
          description: "Multidisciplinary global collaboration to address the impact of antimicrobial resistance.",
          section: "Projects",handler: () => {
              window.location.href = "/website/projects/camonet/";
            },},{id: "projects-d-cat",
          title: 'D-CAT',
          description: "Clinical application tool to support dengue management in low and middle income countries.",
          section: "Projects",handler: () => {
              window.location.href = "/website/projects/dcat/";
            },},{id: "projects-eniapp",
          title: 'ENIAPP',
          description: "Clinical decision support system (CDSS) to support infection diagnosis and antimicrobial therapy selection.",
          section: "Projects",handler: () => {
              window.location.href = "/website/projects/eniapp/";
            },},{id: "projects-epicimpoc",
          title: 'EPiCIMPOC',
          description: "Clinical decision support system (CDSS) to support infection management at the point of care.",
          section: "Projects",handler: () => {
              window.location.href = "/website/projects/epicimpoc/";
            },},{id: "projects-protondx-timerhub",
          title: 'ProtonDx TimerHUB',
          description: "A web-app to provide a collection of timers for diagnostics.",
          section: "Projects",handler: () => {
              window.location.href = "/website/projects/pdx_timerhub/";
            },},{id: "projects-pregnancy-care",
          title: 'Pregnancy Care',
          description: "A web-app for midwifes to facilitate the management of antenatal care plans.",
          section: "Projects",handler: () => {
              window.location.href = "/website/projects/pregnant_care/";
            },},{id: "projects-rapid-fire-questions",
          title: 'Rapid Fire Questions',
          description: "A web-app for quick, fun, and insightful conversations in a flash!",
          section: "Projects",handler: () => {
              window.location.href = "/website/projects/rapid_fire_questions/";
            },},{id: "projects-javascript-spare-code",
          title: 'JavaScript spare code',
          description: "A portfolio of tools and visualisations developed in JavaScript.",
          section: "Projects",handler: () => {
              window.location.href = "/website/projects/spare_code_js/";
            },},{id: "projects-python-spare-code",
          title: 'Python spare code',
          description: "A portfolio of short scripts with tools and visualisations developed in Python.",
          section: "Projects",handler: () => {
              window.location.href = "/website/projects/spare_code_py/";
            },},{id: "projects-vital",
          title: 'VITAL',
          description: "Multidisciplinary global collaboration to develop tools to support dengue management in limited resource settings.",
          section: "Projects",handler: () => {
              window.location.href = "/website/projects/vital/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%62.%68%65%72%6E%61%6E%64%65%7A-%70%65%72%65%7A@%69%6D%70%65%72%69%61%6C.%61%63.%75%6B", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/bahp", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/bahp", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-1010-3559", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Bernard-Hernandez/", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/website/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Uq2UlxYAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
