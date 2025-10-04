const projects = [
  {
    title:"Consultancy Study: Land Use Development around El-Dabaa Axis",
    entity:"Ministry of Transport",
    role:[
      "Designed and implemented a comprehensive GIS data model tailored to project requirements.",
      "Built spatial relationships and applied topology rules to validate field data.",
      "Developed and deployed multiple Web GIS apps (Dashboards, StoryMaps, Survey123, Hub, WebAppBuilder, Experience Builder, Instant Apps, Field Maps).",
      "Delivered specialized GIS training for ministry engineers in the New Administrative Capital."
    ]
  },
  {
    title:"Consultancy Study: Land Use Development around Kalabsha Axis",
    entity:"Ministry of Transport",
    role:[
      "Produced project-specific GIS data model and relational schema.",
      "Applied ArcGIS Topology and Attribute Rules to correct field data.",
      "Created interactive dashboards and StoryMaps for stakeholders."
    ]
  },
  {
    title:"Consultancy Study: Land Use Development around Qous Axis",
    entity:"Ministry of Transport",
    role:[
      "Developed GIS workflows for land use comparison before and after construction.",
      "Integrated field survey data with validation routines.",
      "Published map viewers and StoryMaps to illustrate findings."
    ]
  },
  {
    title:"Consultancy Study: Dahshour Southern Junction Land Use Development",
    entity:"Ministry of Transport",
    role:[
      "Built GIS data model and enforced topology rules.",
      "Developed dashboards and StoryMaps for long-term development monitoring.",
      "Trained survey teams on data capture standards."
    ]
  },
  {
    title:"Consultancy Study: Regional Ring Road Land Use Development",
    entity:"Ministry of Transport",
    role:[
      "Built modular GIS database to track land-use changes.",
      "Developed interactive dashboards to monitor spatial impacts.",
      "Provided analysis reports to project planners."
    ]
  },
  {
    title:"Consultancy Study: Qena/Luxor Road Land Use Development",
    entity:"Ministry of Transport",
    role:[
      "Analyzed pre- and post-upgrade land use through GIS models.",
      "Automated geoprocessing tasks using ModelBuilder.",
      "Created dashboards and maps for reporting."
    ]
  },
  {
    title:"Consultancy Study: Cairo/Suez Road Land Use Development",
    entity:"Ministry of Transport",
    role:[
      "Implemented ArcGIS Topology and Attribute Rules for QA/QC.",
      "Published StoryMaps and field apps to support survey teams.",
      "Developed dashboards for management monitoring."
    ]
  },
  {
    title:"Regional Study: West Upper Egypt & Abu Simbel Sector",
    entity:"Environmental Compliance Center (KSA)",
    role:[
      "Performed monthly remote sensing monitoring of land-use change.",
      "Created automated image analysis workflows for planners.",
      "Designed dashboards to synchronize field data with HQ."
    ]
  },
  {
    title:"Control & Monitoring Project – Tuwaik Reserve",
    entity:"Marafi Company",
    role:[
      "Developed Web GIS apps and spatial models for marina site selection.",
      "Integrated AI and IoT concepts for smart management.",
      "Created decision-support simulations for stakeholders."
    ]
  },
  {
    title:"Marina Site Selection Study – Oman",
    entity:"Marafi Company",
    role:[
      "Conducted suitability analysis using ArcGIS Online.",
      "Built QA/QC apps for field validation and task management.",
      "Proposed infrastructure network extensions with GIS mapping."
    ]
  },
  {
    title:"Consultancy Study: Salalah Commercial Port",
    entity:"Medar Company",
    role:[
      "Designed dashboards for real-time construction monitoring.",
      "Performed spatial-statistical analyses of port operations.",
      "Delivered GIS-based management reports."
    ]
  },
  {
    title:"Satellite Imagery Construction Monitoring – Medar Projects",
    entity:"Environmental Compliance Center (KSA)",
    role:[
      "Analyzed satellite images to assess construction progress.",
      "Validated changes against site reports using QC procedures.",
      "Automated reporting workflows for timely updates."
    ]
  },
  {
    title:"Study: Disposal Sites & Focal Points (Saudi Arabia)",
    entity:"Environmental Compliance Center (KSA)",
    role:[
      "Managed geospatial data with GeoServer and PostGIS.",
      "Published secure WMS/WFS services for users.",
      "Performed spatial analysis to prioritize remediation zones."
    ]
  },
  {
    title:"Environmental Remote Sensing Monitoring – Saudi Arabia",
    entity:"Environmental Compliance Center (KSA)",
    role:[
      "Created interactive maps for parking and waste bin locations.",
      "Performed density and proximity analysis for service optimization.",
      "Generated planning reports with GIS insights."
    ]
  },
  {
    title:"Parking & Waste Bin Inventory – Jalmouda",
    entity:"Environmental Compliance Center (KSA)",
    role:[
      "Produced detailed maps and inventories for local infrastructure.",
      "Analyzed accessibility and distribution of services.",
      "Provided optimization recommendations to municipalities."
    ]
  },
  {
    title:"3D Masterplan – Golden Beach Village (Ras Sedr)",
    entity:"Golden Beach Village",
    role:[
      "Built 3D site models and terrain visualizations.",
      "Analyzed topographic changes impacting development.",
      "Delivered 3D planning maps for stakeholders."
    ]
  }
];

const container = document.getElementById('projectsContainer');

function renderCards(list){
  container.innerHTML = '';
  list.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';

    const roleList = '<ul>' + p.role.map(r => `<li>${r}</li>`).join('') + '</ul>';

    card.innerHTML = `
      <h2>${p.title}</h2>
      <div class="meta"><span>${p.entity}</span></div>
      <div class="desc">${roleList}</div>
    `;
    container.appendChild(card);
  });
}

renderCards(projects);

document.getElementById('searchBox').addEventListener('input', e => {
  const q = e.target.value.trim().toLowerCase();
  if(!q) return renderCards(projects);
  const filtered = projects.filter(p => (p.title + ' ' + p.entity + ' ' + p.role.join(' ')).toLowerCase().includes(q));
  renderCards(filtered);
});
