const STEPS_DATA = [
  {
    step_id: "1",
    title: "SURFACE PREPARATION & CLEANING",
    short_desc: "Cleaning and preparing the wall surface for maximum paint adhesion.",
    content: `
      <strong>1. For New Construction:</strong>
      <ul>
        <li>Curing Time: Ensure the surface is sufficiently dry. In ideal dry weather conditions, painting can begin after 3 weeks. Depending on humidity, this waiting period may extend to 2 or 3 months.</li>
        <li>Surface Grinding: Use a grinding stone to remove impurities that may affect the adhesion of the skim coat (putty) or alkali-resistant primer.</li>
        <li>Fine Sanding: Sand the surface again with fine or coarse sandpaper to remove remaining grit and dust.</li>
        <li>Moisturizing: If the wall is too dry, lightly dampen the surface using a roller or a mist sprayer before applying putty or primer.</li>
      </ul>
      <strong>2. For Renovation:</strong>
      <ul>
        <li>Deep Cleaning: Completely remove all mold, dirt, and old layers of peeling paint or putty.</li>
        <li>Pre-treatment: If the surface is still in good condition, lightly sand the entire area to create a "key" (texture) for the new paint layer to bond.</li>
      </ul>
    `
  },
  {
    step_id: "2",
    title: "WATERPROOFING APPLICATION",
    short_desc: "Applying a protective layer to prevent water leakage.",
    content: `
      <p>This critical step prevents water from seeping through the walls, which causes mold and structural damage.</p>
      <ul>
        <li>Apply 2-3 coats of high-quality waterproofing compound.</li>
        <li>Focus on areas exposed to heavy rain or high humidity.</li>
      </ul>
    `
  },
  {
    step_id: "3",
    title: "SKIM COATING (PUTTY APPLICATION)",
    short_desc: "Smoothing the wall surface with putty for an aesthetic finish.",
    content: `
      <p>Skimming creates a smooth and flat surface, making the final color look much more professional.</p>
      <ul>
        <li>Apply 2 coats, each 1-2mm thick.</li>
        <li>Sand the surface after drying to ensure absolute flatness.</li>
      </ul>
    `
  },
  {
    step_id: "4",
    title: "ALKALI-RESISTANT PRIMING",
    short_desc: "Protecting the paint from the natural alkalinity of concrete.",
    content: `
      <p>Priming is essential to prevent "alkali burn" which causes color fading and peeling.</p>
      <ul>
        <li>The primer acts as a glue between the wall and the topcoat.</li>
        <li>Apply 1 full coat evenly over the entire surface.</li>
      </ul>
    `
  },
  {
    step_id: "5",
    title: "FINAL TOPCOAT (COLOR PAINTING)",
    short_desc: "Applying the final color coats for the perfect aesthetic look.",
    content: `
      <p>The final step brings your vision to life with vibrant and durable colors.</p>
      <ul>
        <li>Apply the first coat, wait for it to dry (2 hours).</li>
        <li>Apply the second coat for uniform color and maximum protection.</li>
      </ul>
    `
  }
];


const StepList = {
  props: ['steps'],
  template: '#step-list-tpl'
};

const StepOverview = {
  template: '#overview-tpl'
};

// left content component
const StepDetail = {
  template: '#step-detail-tpl',
  data() { 
    return { steps: STEPS_DATA }; 
  },
  computed: {
    step() {
      const id = this.$route.params.id;
      return this.steps.find(s => s.step_id === id) || null;
    }
  }
};


const AppLayout = {
  template: '#app-tpl',
  data() {
    return { steps: STEPS_DATA };
  }
};

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    { path: '/', component: StepOverview },
    { path: '/step/:id', component: StepDetail }
  ]
});

const app = Vue.createApp(AppLayout);


app.component('step-list', StepList);


app.use(router);
app.mount('#app');