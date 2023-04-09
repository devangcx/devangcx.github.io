/**
 * A list of objects representing the projects used on the website.
 */

const projects = [
    {
        title: `User manual`,
        description: `Easy to follow documentation to support industry professionals to develop their own Pollination apps.`,
        link: `https://docs.pollination.cloud/user-manual/apps/introduction`,
        thumbnail: `images/thumbnails/user_manual.png`,
        alt: `link to the Pollination user manual`,
        tag: 'support'
    },
    {
        title: `Sun-path app`,
        description: `A web app to see how the sun moves at a certain
        location on earth and load weather data on it.`,
        link: `https://sunpath.default.apps.staging.pollination.cloud/`,
        thumbnail: `images/thumbnails/sunpathIntro.jpg`,
        alt: `link to the sun path app`,
        tag: 'tech'
    },
    {
        title: `EPW weather app`,
        description: `A web app to visualize and interact with the weather data
        of a certain location for early design analysis by architects and
        energy modelers.`,
        link: `https://epw-viz.default.apps.staging.pollination.cloud/`,
        thumbnail: `images/thumbnails/weather-app.png`,
        alt: `link to weather report app`,
        tag: 'tech'
    },
    {
        title: `Outdoor comfort app`,
        description: `A web app to visualize and interact the outdoor 
        comfort metrics for a certain metrics and generate a PDF report.`,
        link: `https://outdoor-comfort.default.apps.staging.pollination.cloud/`,
        thumbnail: `images/thumbnails/outdoor-comfort-app.png`,
        alt: `link to outdoor comfort app`,
        tag: 'tech'
    },
    {
        title: `ladybug-charts`,
        description: `A python library to create interactive data plots
        using Ladybug, Pandas, and Plotly.`,
        link: `https://github.com/ladybug-tools/ladybug-charts`,
        thumbnail: `images/thumbnails/boston-diurnal.png`,
        alt: `link to ladybug-charts library`,
        tag: 'tech'
    },
    {
        title: `ladybug-vtk`,
        description: `A python library to create a 3D representation of
        the Ladybug objects to add to a web app.`,
        link: `https://github.com/ladybug-tools/ladybug-vtk`,
        thumbnail: `images/thumbnails/radiation-dome.png`,
        alt: `link to ladybug-vtk library`,
        tag: 'tech'
    },
    {
        title: `honeybee-vtk`,
        description: `A python library to translate any size of honeybee 
        JSON data to a 3D model to be visualized in a web app.`,
        link: `https://github.com/ladybug-tools/honeybee-vtk`,
        thumbnail: `images/thumbnails/honeybee-vtk.png`,
        alt: `link to honeybee-vtk library`,
        tag: 'tech'
    },
    {
        title: `honeybee-3dm`,
        description: `A python library to turn rhino objects in Honeybee JSON.`,
        link: `https://github.com/ladybug-tools/honeybee-3dm`,
        thumbnail: `images/thumbnails/honeybee-3dm.png`,
        alt: `link to honeybee-3dm library`,
        tag: 'tech'
    },
    {
        title: `Workflow Repository`,
        description: `A prototype for serverless dynamic content loading platform
        developed by a team of computational design leaders.`,
        link: `hokware.html`,
        thumbnail: `images/thumbnails/hok.png`,
        alt: `link to HOKWare prototype`,
        tag: 'tech'
    },
    {
        title: `View Script`,
        description: `Sketch to script. Turning the views to the surrounding in a
        quantifiable metric.`,
        link: `docs/view_analysis.pdf`,
        thumbnail: `images/thumbnails/view_script.jpg`,
        alt: `View Analysis`,
        tag: 'analysis'
    },
    {
        title: `Internal Portal`,
        description: `Company portal to document standard operating procedures and
        other commonly used tools.`,
        link: `central.html`,
        thumbnail: `images/thumbnails/msa.png`,
        alt: `link to MSA central website`,
        tag: 'tech'
    },
    {
        title: `Preliminary Studies`,
        description: `Early stage site studies.`,
        link: `docs/site_analysis.pdf`,
        thumbnail: `images/thumbnails/site_analysis.jpg`,
        alt: `Site Analysis`,
        tag: 'analysis'
    },
    {
        title: `Outdoor Comfort`,
        description: `Extensive outdoor comfort studies involving CFD.`,
        link: `docs/cfd_comfort.pdf`,
        thumbnail: `images/thumbnails/CFD+Comfort.jpg`,
        alt: `CFD Analysis`,
        tag: 'analysis'
    },
    {
        title: `Facade Optimization`,
        description: `Parametric optimization for ideal aperture size.`,
        link: `facade.html`,
        thumbnail: `images/thumbnails/optimized_facade.jpg`,
        alt: `Facade optimization`,
        tag: 'analysis'
    },
    {
        title: `Search Component`,
        description: `Addition to the Ladybug legacy plugin. A component to search the
        most relevant component to the search query.`,
        link: `https://discourse.ladybug.tools/t/ladybug-0-0-67-and-honeybee-0-0-64-release/4473?u=devang`,
        thumbnail: `images/thumbnails/ladybug_search.png`,
        alt: `Ladybug tools search component`,
        tag: 'tech'
    },
    {
        title: `Beaufort Scale`,
        description: `Addition to the Ladybug legacy plugin. Bringing Beaufort scale to
        the wind rose component.`,
        link: `https://twitter.com/DevangGC/status/805704769943670784?s=20`,
        thumbnail: `images/thumbnails/beaufort.jpg`,
        alt: `Beaufort Scale`,
        tag: 'tech'
    },
    {
        title: `Ladybug Developer`,
        description: `First acknowledgement of contributions to the Ladybug Tools.`,
        link: `https://twitter.com/__Mostapha__/status/830905451025985536?s=20`,
        thumbnail: `images/thumbnails/contribution.jpg`,
        alt: `First mention of Ladybug tools contribution`,
        tag: 'tech'
    },
    {
        title: `User Support`,
        description: `Contributions to the community discussions and user support.`,
        link: `https://discourse.ladybug.tools/u/devang/summary`,
        thumbnail: `images/thumbnails/discourse.png`,
        alt: `Discourse Forum`,
        tag: 'support'
    },
    {
        title: `Energy Balance`,
        description: `Early Stage Energy Modelling.`,
        link: `docs/energy.pdf`,
        thumbnail: `images/thumbnails/energybalance.jpg`,
        alt: `Energy Balance`,
        tag: 'analysis'
    },
    {
        title: `LEED V4 Daylight Credit`,
        description: `Compliance documentation for LEED V4 daylight
        credit option-2.`,
        link: `docs/leed_daylight.pdf`,
        thumbnail: `images/thumbnails/leed.png`,
        alt: `LEED V4 daylight compliance sample`,
        tag: 'analysis'
    },
    {
        title: `Estidama Daylight Credit`,
        description: `Compliance documentation for Estidama PBRS LBi-7 Daylight &
        Glare.`,
        link: `docs/estidama_daylight.pdf`,
        thumbnail: `images/thumbnails/estidama.jpg`,
        alt: `Estidama daylight compliance sample`,
        tag: 'analysis'
    },
    {
        title: `EPW Modification`,
        description: `A tutorial for mechanical engineers to mould EnergyPlus weather
        data for eQuest.`,
        link: `docs/epw_tutorial.pdf`,
        thumbnail: `images/thumbnails/energyplus.png`,
        alt: `EPW to eQuest tutorial`,
        tag: 'support'
    },
    {
        title: `Design Remediation with simulations`,
        description: `Environmental analysis as a tool for building
        design remediation.`,
        link: `docs/building_performance_simulation.pdf`,
        thumbnail: `images/thumbnails/buildingPerformanceSimulation.jpg`,
        alt: `Simulation sample`,
        tag: 'analysis'
    },
    {
        title: `Energy Model Calibration`,
        description: `Using metered data on a real building to
        calibrate an energy model.`,
        link: `docs/skirkanich_hall.pdf`,
        thumbnail: `images/thumbnails/skirkanichHall.jpg`,
        alt: `Energy model calibration sample`,
        tag: 'analysis'
    },
    {
        title: `Farnsworth House`,
        description: `Energy simulation as a tool for selecting Glass.`,
        link: `docs/farnsworth_house.pdf`,
        thumbnail: `images/thumbnails/farnsworthHouse.jpg`,
        alt: `Simulating the Farnsworth house`,
        tag: 'analysis'
    },
    {
        title: `Gated Community`,
        description: `Campus design for a gated community.`,
        link: `docs/oidc.pdf`,
        thumbnail: `images/thumbnails/oidc.jpg`,
        alt: `OIDC apartment campus`,
        tag: 'building'
    },
    {
        title: `Luxury Apartments`,
        description: `Design for high-rise luxury apartments.`,
        link: `docs/apartment.pdf`,
        thumbnail: `images/thumbnails/apartment.jpg`,
        alt: `Wind Park apartment campus`,
        tag: 'building'
    },
    {
        title: `Villa`,
        description: `Construction documents for a luxury villa.`,
        link: `docs/villa.pdf`,
        thumbnail: `images/thumbnails/villa.jpg`,
        alt: `Villa`,
        tag: 'building'
    },
    {
        title: `Design Thesis`,
        description: `National Independence Museum.`,
        link: `docs/academic_work.pdf`,
        thumbnail: `images/thumbnails/thesis.jpg`,
        alt: `Thesis`,
        tag: 'design'
    },
];

export default projects;